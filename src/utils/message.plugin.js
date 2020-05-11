import M from 'materialize-css'
import localizeFilter from '@/filters/localize.filters' 

export default {
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      const localizedText = localizeFilter(html)
      M.toast({html: localizedText})
    }
    Vue.prototype.$error = function(html) {
      console.log(html)
      M.toast({html: `[${localizeFilter('Error')}]: ${localizeFilter(html)}`})
    }
  } 
}
