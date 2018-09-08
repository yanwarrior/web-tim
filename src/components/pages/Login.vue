<template>
    <fish-layout class="demo2" side="1">
      <nav slot="header">
        <div class="logo">.:: TIM System Login</div>
      </nav>
      <div slot="content" style="height: 300px;">
        <h2>.:: TIM System Login</h2>
        <form class="fish form" style="width: 250px">
          <div class="field">
            <div>
              <div class="fish input left">
                <div class="label-right"></div>  
                <input v-model="form.username" type="text" placeholder="username..." autocomplete="off">
                <i class="fa fa-user"></i>
              </div>
            </div>
          </div>
          
          <div class="field">
            <div>
            <div class="fish input left">
                <div class="label-right"></div>  
                <input type="password" v-model="form.password" placeholder="password..." autocomplete="off">
                <i class="fa fa-lock"></i>
              </div>
            </div>
          </div>
          <fish-button @click="login" type="primary">Submit</fish-button>
        </form>
      </div>
    <div slot="footer">2018 @ copyright, PT. Oibro Teknologi Nusantara</div>
    </fish-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import LoginService from '@/components/services/LoginService';
import HeaderPartial from '@/components/partials/HeaderPartial';

export default {
  name: 'Login',
  data() {
    return {
      form: {username: null, password: null},
      sending: false,
      service: new LoginService()
    }
  },
  methods: {
    login(e) {
      this.service.login('/users/token-create/', this.form)
        .then((resp) => {
          localStorage.setItem('token', resp.data.results.token);
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}
</script>

<style>
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
    color: azure;
  }
  .fish.layout.demo2 > .header {
    padding: 0 20px;
    background:  #235377;
    margin-bottom: 20px;
  }
  .fish.layout.demo2 > .content {
    margin: 0 auto;
    padding: 0.7em 1em;
  }
</style>
