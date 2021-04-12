<template>
  <button 
    :class="[
    'el-button',
    type ? 'el-button--' + type : '',
    buttonSize?'el-button--' +  buttonSize : '',{
       'is-round': round,
       'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled||loading"
     @click="handleClick"
  >
  <i v-if="loading" class="el-icon-loading"></i>
  <i v-if="icon && !loading" :class="icon"></i>
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent,computed, PropType } from 'vue'

type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>

export default defineComponent({
  name:'ELButton',
  props:{
    type:{
      type:String as IButtonType,
      default:"default",
      validator:(val:String)=>{
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      }
    },
    loading:Boolean,
    icon:{
      type:String,
      default:''
    },
    disabled:Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: (val:String)=>{
        return  ['', 'large', 'medium', 'small', 'mini'].includes(val)
      },
    },
    round: Boolean,
    circle: Boolean,
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

    const buttonSize  = computed(()=>{
      return props.size
    })

    return {
      handleClick,
      buttonDisabled,
      buttonSize
    }
  },
})
</script>
