<template>
  <div class="signup-cont container rounder p-4 pb-2 bg-white">
    <label class="h1 mb-3">Sign up</label>
    <InputField text="First name" type="text" parentType="sing_up" class="w-100 mb-3" @input-sent="setFname" :needDelete="deleteinput"></InputField>
    <InputField text="Last name" type="text" parentType="sing_up" class="w-100 mb-3" @input-sent="setLname" :needDelete="deleteinput"></InputField>
    <InputField text="Email" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setEmail" :needDelete="deleteinput"></InputField>
    <InputField text="Password" type="password" parentType="sign_up" class="w-100 mb-1" @input-sent="setPassword" :needDelete="deleteinput"></InputField>
    <StrengthBar class="mb-2" :stren="passStrength"></StrengthBar>

  </div>
</template>

<script>
import InputField from '../components/InputField.vue'
import StrengthBar from '../components/StrengthBar.vue'


import Swal from 'sweetalert2'

export default {

  data(){
    return{
      userInput:{
        userData:{
          first_name:'',
          last_name:'',
          email:'',
          password:'',
        },
        passwordagain:'',
      },
      users:[],
      deleteinput:false,
    }
  },

  components: {
    InputField,
    StrengthBar

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
    },
    setEmail(data){
      this.userinput.userData.email = data
    },
    setPassword(data){
      this.userinput.userData.password = data
      this.setStrength(this.userinput.userData.password)
    },
    setPasswordAgain(data){
      this.userinput.passwordagain = data
    },

    setStrength(pass){

      var str = 0;
      var output = 'none';
      var lowerCaseLetters = /[a-z]/g;
      if (pass.match(lowerCaseLetters)) {
        str++;
      }
      var upperCaseLetters = /[A-Z]/g;
      if (pass.match(upperCaseLetters)) {
        str++;
      }
      var numbers = /[0-9]/g;
      if (pass.length >= 8) {
        str++;
      }
      if (pass.length === 0){
        output = 'none'
      }

      output = str === 1 ? 'weak':
               str === 2 ? 'medium':
               str === 3 ? 'good':
               str === 4 ? 'strong' : 'strength'

      this.
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
  .h1 {
    padding : 10px;
    border: 1px green solid;
  }
</style>