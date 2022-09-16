<template>
  <div class="form-floating w-25 input-field">
    <input :type="text" class="form-control" :id="givenID" @keyup="sendInput"
    :placeholder="text">
    <i v-if="show" class="open_eye" :id="iconId" @click="changeType"></i>
    <label :for="givenId">{{text}}</label>
  </div>
</template>

<script>
export default {
  name:'input-field',

  props:{
    text:String,
    type:String,
    parentType:String,
    needDelete:Boolean
  },

  data(){
    return{
      givenId:this.text.toLocaleLowerCase().replace(' ','_') + '_' + this.parentType,
      iconId:this.text.toLocaleLowerCase().replace(' ','_') + '_' + 'eye',
      show:false
    }
  },
  
  methods:{
    sendInput(){
      const data = document.getElementById(this.givenId)
      this.$emit('input-sent', data.value)
    },

    changeType(){
      const typeinput = document.getElementById(this.givenId)
      const eye = document.getElementById(this.icondId)
      typeinput.type = typeinput.type === 'password' ? 'text' : 'password'
      eye.classList.toggle("closed_eye")
    }

  },

  watch:{
    needDelete:function(){
      const input = document.getElementById(this.givenId)
      input.value = ''
      this.$emit('input-sent', input.value)
    }
  },

  mounted(){
    this.type === 'password' ? this.show = true : null
  }

}
</script>

<style scoped>

</style>