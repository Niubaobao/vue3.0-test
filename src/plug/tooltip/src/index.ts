import { defineComponent, render, h } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../config'



export default defineComponent({
  name: 'tooltip',

  props: {
    manual: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      validator: (val: unknown) => {
        return typeof val === 'boolean'
      },
      default: undefined,
    },
  },

  emits: [UPDATE_MODEL_EVENT],

  setup(props, ctx) {

  },

  render() {

    const popper = h();

    return popper

  }
})