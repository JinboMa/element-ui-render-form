import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElRenderForm from '../../dist/element-ui-render-form'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(ElRenderForm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
