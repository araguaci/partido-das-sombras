import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'   

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/partido-das-sombras', component: PdfViewer }
  ]
})
 
createApp(App).use(router).mount('#app')