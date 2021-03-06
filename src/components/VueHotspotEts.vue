<template>
  <div class="ui__vue_hotspot" ref="vueHotspot" v-if="config">
    <!-- image -->
    <img class="ui__vue_hotspot_background_image"
      ref="vueHotspotBackgroundImage"
      :src="config.image"
      @load="successLoadImg"
      alt="Hotspot Image">
    <!-- overlay -->
    <span class="ui__vue_hotspot_overlay"
      ref="vueHotspotOverlay"
      :style="`height: ${overlayHeight}; width: ${overlayWidth}; left: ${overlayLeft}; top: ${overlayTop};`"
      v-if="config.editable"
      @click.stop.prevent="addHotspot">
      <p>{{ config.overlayText }}</p>
    </span>
    <!-- hotspot DataPoint -->
    <DataPoint
      v-for="(hotspot, i) in config.data"
      :key="i"
      :hotspot="hotspot"
      :config="config"
      :imageLoaded="imageLoaded"
      :vueHotspotBackgroundImage="vueHotspotBackgroundImage"
      :vueHotspot="vueHotspot"
      @hotspot-click="$emit('hotspot-click', $event)"
      @delete-hotspot="deleteHotspot"
      @edit-hotspot="editHotspot"
    />
    <!-- ControlBox -->
    <ControlBox
      v-if="config.displayControlBox"
      :config="config"
      @save-data="saveAllHotspots"
      @after-delete="removeAllHotspots"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import DataPoint from './module/DataPoint.vue'
import ControlBox from './module/ControlBox.vue'
import { throttle } from './utils/common.js'
import VueCompositionApi, {
  createComponent,
  ref,
  reactive,
  toRefs,
  isRef,
  onMounted,
  onUnmounted,
  watch
} from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default createComponent({
  components: {
    DataPoint,
    ControlBox
  },
  props: {
    initOptions: Object
  },
  setup (props, { emit }) {
    const vueHotspot = ref(null)
    const vueHotspotOverlay = ref(null)
    const vueHotspotBackgroundImage = ref(null)

    const defaultOptions = reactive({
      // Object to hold the hotspot data points
      data: [],

      // Default image placeholder
      image: 'https://via.placeholder.com/600x500?text=Oops!+image+not+found...',

      // Specify editable in which the plugin is to be used
      // `true`: Allows to create hotspots from UI
      // `false`: Display hotspots from `data` object
      editable: true,

      // Event on which the hotspot data point will show up
      // allowed values: `click`, `hover`, `none`
      interactivity: 'hover',

      // background color for hotspots
      hotspotColor: 'rgb(66, 184, 131)',
      messageBoxColor: 'rgb(255, 255, 255)',
      textColor: 'rgb(53, 73, 94)',

      // overlay text
      overlayText: 'Please Click The Image To Add Hotspots.',

      // opacity for hotspots, default is 0.8
      opacity: 0.8,

      // Hotspot schema
      schema: [
        {
          'property': 'Title',
          'default': 'Vue Hotspot'
        },
        {
          'property': 'Message',
          'default': 'This is a Vue Hotspot Component which lets you create hotspot. '
        }
      ],
      displayControlBox: true,
      isDeletable: false,
      hotspotEditable: true
    })
    const config = ref(null)
    const imageLoaded = ref(false)
    const frameSize = reactive({
      overlayHeight: 0,
      overlayWidth: 0,
      overlayLeft: 0,
      overlayTop: 0
    })

    watch(imageLoaded, (loaded, prev) => {
      if (loaded) {
        resizeOverlay()
      }
    })

    watch(() => props.initOptions, (initOptions, prev) => {
      // overwrite defaults with initOptions
      config.value = { ...config.value ? config.value : deepCopy(defaultOptions), ...initOptions }
    }, {
      deep: true
    })

    onMounted(() => {
      window.addEventListener('resize', throttle(resizeOverlay, 50))
    })

    onUnmounted(() => {
      window.removeEventListener('resize', throttle(resizeOverlay, 50))
    })

    function addHotspot (e) {
      const relativeX = e.offsetX
      const relativeY = e.offsetY
      const unWrappedConfig = isRef(config) ? config.value : config
      const height = vueHotspotOverlay.value.offsetHeight
      const width = vueHotspotOverlay.value.offsetWidth
      const hotspot = { x: relativeX / width * 100, y: relativeY / height * 100 }
      const schema = unWrappedConfig.schema
      for (let i = 0; i < schema.length; i++) {
        const value = schema[i]
        let fill
        if (unWrappedConfig.needDescription === false && schema[i].property === 'Message') {
          fill = value.property
        } else {
          fill = prompt(`Please enter ${value.property}`, value.default)
        }
        if (fill === null) {
          return
        }
        hotspot[value.property] = fill
      }
      hotspot.id = '_' + Math.random().toString(36).substr(2, 9)
      unWrappedConfig.data.push(hotspot)
      emit('add-hotspot', hotspot)
    }

    function resizeOverlay () {
      const image = isRef(vueHotspotBackgroundImage) ? vueHotspotBackgroundImage.value : vueHotspotBackgroundImage
      const frame = isRef(vueHotspot) ? vueHotspot.value : vueHotspot
      frameSize.overlayHeight = `${(image.clientHeight / frame.clientHeight) * 100}%`
      frameSize.overlayWidth = `${(image.clientWidth / frame.clientWidth) * 100}%`
      frameSize.overlayLeft = `${image.offsetLeft - frame.clientLeft}px`
      frameSize.overlayTop = `${image.offsetTop - frame.clientTop}px`
    }

    function deepCopy (obj) {
      return JSON.parse(JSON.stringify(obj))
    }

    function successLoadImg (event) {
      if (event.target.complete === true) {
        imageLoaded.value = true
      }
    }

    function saveAllHotspots () {
      const unWrappedConfig = isRef(config) ? config.value : config
      emit('save-data', unWrappedConfig.data)
    }

    function removeAllHotspots () {
      emit('after-delete')
    }

    function deleteHotspot (hotspotData) {
      const unWrappedConfig = isRef(config) ? config.value : config
      let dataList = unWrappedConfig.data.filter(item => {
        return item.id !== hotspotData.id
      })
      unWrappedConfig.data = dataList
      emit('delete-hotspot', hotspotData)
    }

    function editHotspot (hotspotData) {
      debugger
      if (config.value.hotspotEditable) {
        const fill = prompt(`Please enter title`, hotspotData.Title)
        if (fill === null) {
          return
        }
        hotspotData['Title'] = fill
        emit('edit-hotspot', hotspotData)
      }
    }

    return {
      // data
      defaultOptions,
      config,
      imageLoaded,
      ...toRefs(frameSize),
      // dom
      vueHotspot,
      vueHotspotOverlay,
      vueHotspotBackgroundImage,
      // methods
      deepCopy,
      successLoadImg,
      saveAllHotspots,
      removeAllHotspots,
      resizeOverlay,
      addHotspot,
      deleteHotspot,
      editHotspot
    }
  }
})
</script>

<style>
.ui__vue_hotspot {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}
.ui__vue_hotspot_background_image {
  max-width: 100%;
  width: 100%;
}
/* CSS class for overlay used in `editable:true` mode */
span.ui__vue_hotspot_overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  cursor: pointer;
}
span.ui__vue_hotspot_overlay > p {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.4);
  margin-top: 0px;
  padding: 20px;
  text-align: center;
}
.ui__vue_hotspot_hotspot > div > .ui__vue_hotspot_title > .ui_vue_remove_hotspot img {
  height: 10px;
  font-size: 10px;
}
.ui__vue_hotspot_hotspot > div > .ui__vue_hotspot_title > .ui_vue_remove_hotspot {
  background-color: transparent !important;
}
.ui__vue_hotspot_hotspot > div > .ui__vue_hotspot_title ,.ui__vue_hotspot_hotspot > div > .ui__vue_hotspot_message {
  background: #000 !important;
  color: #fff !important;
  opacity: 1 !important;
}
.ui__vue_hotspot_hotspot > div > .ui__vue_hotspot_message {
  margin-top: 0 !important;
}
/*
.ui__vue_hotspot_hotspot > div > .ui__vue_hotspot_title {
  color: #fff !important;
  background: #000 !important;
  opacity: 1 !important;
  text-align: left;
}
.ui__vue_hotspot_hotspot > div {
  color: rgb(53, 73, 94);
  background: #444
}*/
.ui__vue_hotspot_hotspot.active>div:before {
  border-left-color: #000 !important;
}
.ui__vue_hotspot_hotspot.active>div {
  background: #000 !important;
}

</style>
