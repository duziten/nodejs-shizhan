import Vue from 'vue'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: 'http://via.placeholder.com/1920x1080?text=404',
  loading: 'http://via.placeholder.com/1920x1080?text=loading&color=#368',
  attempt: 3,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.2
  }
})

import VueQuillEditor from 'vue-quill-editor/src/ssr'
// import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)

import At from 'vue-at'
Vue.component('at', At)

// import 'aos/dist/aos.css'
import aos from 'aos'
aos.init()

import FilePond, { registerPlugin } from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Register file type validation plugin
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
// registerPlugin(FilePondPluginFileValidateType)

Vue.component('FilePond', FilePond)
