import { type DirectiveBinding } from 'vue'
import lightGallery from 'lightgallery'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen'

declare global {
  interface HTMLElement {
    lightGallery?: any;
  }
}

const vLightgallery = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.lightGallery = lightGallery(el, {
      plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen],
      speed: 500,
      mode: 'lg-slide',
      selector: 'a',
      controls: true, // Ensure navigation controls are enabled
      download: false, // Disable the download button if not needed
      ...binding.value
    })
  },
  unmounted(el: HTMLElement) {
    if (el.lightGallery) {
      el.lightGallery.destroy(true)
    }
  }
}

export default vLightgallery

// import { type DirectiveBinding } from 'vue'
// import lightGallery from 'lightgallery'
// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'
// import lgAutoplay from 'lightgallery/plugins/autoplay'
// import lgFullscreen from 'lightgallery/plugins/fullscreen'

// declare global {
//   interface HTMLElement {
//     lightGallery?: any;
//   }
// }

// const vLightgallery = {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     el.lightGallery = lightGallery(el, {
//       plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen],
//       speed: 500,
//       mode: 'lg-slide',
//       selector: 'a',
//       controls: true, // Ensure navigation controls are enabled
//       download: false, // Disable the download button if not needed
//       ...binding.value
//     })
//   },
//   unmounted(el: HTMLElement) {
//     if (el.lightGallery) {
//       el.lightGallery.destroy(true)
//     }
//   }
// }

// export default vLightgallery
