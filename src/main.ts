import { createApp } from 'vue'
import Vue from './App.vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import Button from './plug/Button/index.js'
import Radio from './plug/radio/index.js'
import Vuex from './store/vuex'
import otherModel from './store/other-model'
import router from './routers/index'


export const app = createApp(App)

// app.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     otherModel
//   }
// })

app.use(Button).use(Radio).use(router).mount('#app')







