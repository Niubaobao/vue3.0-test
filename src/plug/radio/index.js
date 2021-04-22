import Radio from './src/radio.vue'

Radio.install = (app) => {
  app.component('el-radio', Radio)
}

export default Radio