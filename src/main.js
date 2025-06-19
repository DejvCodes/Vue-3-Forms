import { createApp } from 'vue'
import App from './App.vue'
import { upperFirst, camelCase } from 'lodash'

const app = createApp(App)

const components = import.meta.glob('./components/Base[A-Z]*.{vue,js}', { eager: true })

for (const path in components) {
  const component = components[path].default
  const fileName = path.split('/').pop().replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(fileName))

  app.component(componentName, component)
}

app.mount('#app')