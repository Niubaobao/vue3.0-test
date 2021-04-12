

import Button from './button.vue'

Button.install = (app) => {
  app.component('el-button', Button)
}

export default Button