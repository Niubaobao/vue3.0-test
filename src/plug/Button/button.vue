<template>
  <button 
    :class="[
    'el-button',
    ]"
    :disabled="buttonDisabled||loading"
     @click="handleClick"
  >
  <i v-if="loading" class="el-icon-loading"></i>
  <i v-if="icon && !loading" :class="icon"></i>
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import { defineComponent,computed } from 'vue'

export default defineComponent({
  name:'ELButton',
  props:{
    loading:Boolean,
    icon:{
      type:String,
      default:''
    },
    disabled:Boolean,
  },
  emits:['click'],
  setup(props,ctx) {
    console.log(ctx)

    const handleClick = (evt)=>{
      ctx.emit('click',evt)
    }
    const buttonDisabled = computed(()=>{
      return props.disabled 
    })

    return {
      handleClick,
      buttonDisabled
    }
  },
})
</script>
