<template>
  <div class="signup-cont container rounder p-4 pb-2 bg-white">
    <label class="h1 mb-3">Sign up</label>
    <InputField text="First name" type="text" parentType="sing_up" class="w-100 mb-3" @input-sent="setFname" :needDelete="deleteinput"></InputField>
    <InputField text="Last name" type="text" parentType="sing_up" class="w-100 mb-3" @input-sent="setLname" :needDelete="deleteinput"></InputField>
    <InputField text="Email" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setEmail" :needDelete="deleteinput"></InputField>
    <InputField text="Password" type="password" parentType="sign_up" class="w-100 mb-1" @input-sent="setPassword" :needDelete="deleteinput"></InputField>
  </div>
</template>

<script>
import InputField from '../components/InputField.vue'

export default {

  data(){
    return{
      userInput:{
        userData:{
          first_name:'',
        }
      }
    }
  },

  components: {
    InputField,
  },

  props: {
    containertype:String,
  },

  methods:{
    setFname(data){
      this.userinput.userData.first_name = data
    },

    setLname(data){
      this.userinput.userData.last_name = data
    }
  },

  async getUsers(){
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data
  },

  async saveUser(user){
    const res = await fetch("http://localhost:5000/users",{
      method: 'POST' ,
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(user)
    });

    const data = await res.json();

    this.users.push(data)



  },





}
</script>

<style scoped>
  .signup-cont{
    display:flex;
    flex-direction: column;
    width:30%;
    position: absolute;
    top:13%;
    left:50%;
    transform: translate(-50%, 0%);
  }

</style>