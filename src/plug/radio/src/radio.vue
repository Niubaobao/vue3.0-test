<template>
  <label
    :class="{
      'is-disabled':disabled
    }"
    >
    <span>
      <span></span>
      <input 
      type="radio" 
      v-model="model"
      @change="handleChange"
      >
    </span>
    <span>
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick } from 'vue'

const isValidComponentSize = (val: string) =>
  ['', 'large', 'medium', 'small', 'mini'].includes(val)


export default defineComponent({
  name:"el-radio",
  setup(props,ctx) {

    const handleChange = ()=>{
      nextTick(()=>{
        ctx.emit('change',)
      })
    }

    const model = computed(()=>{
      computed<string | number | boolean>({
      get() {
        return  props.modelValue
      },
      set(val) {
       
      },
    })
    })

    return {
      handleChange,
      model
    }
    
  },  
  emits:['change'],
  props:{
   modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    label:{
      type:[String,Number,Boolean],
      default:''
    },
    disabled:Boolean,
    name:{
      type:String,
      default:''
    },
    border: Boolean,
    size: {
      type: String ,
      validator: isValidComponentSize,
    },
  }
})
</script>
