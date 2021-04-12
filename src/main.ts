import { createApp } from 'vue'
import Vue from './App.vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import Button from './plug/Button/index.js'

createApp(App).use(Button).mount('#app')
