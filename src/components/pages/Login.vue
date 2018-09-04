<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateLogin">
      <md-card class="md-layout-item md-size-30 md-small-size-80">
        <md-card-header>
          <div class="md-title">Tiny Inventory Manager</div>
        </md-card-header>
        
        <md-divider></md-divider>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-80">
              <md-field :class="getValidationClass('username')">
                <label for="username">Username</label>
                <md-input name="username" id="username" autocomplete="given-username" v-model="form.username" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.username.required">The username is required</span>
                <span class="md-error" v-else-if="!$v.form.username.minlength">Invalid username</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-80">
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input type="password" name="password" id="password" autocomplete="given-password" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
              </md-field>
            </div>
          </div>

          <md-card-actions>
            <md-button type="submit" class="md-raised md-primary" :disabled="sending">Login</md-button>
          </md-card-actions>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  mixins: [validationMixin],
  data() {
    return {
      form: {username: null, password: null},
      sending: false
    }
  },
  validations: {
    form: {
      username: {required, minLength: minLength(6)},
      password: {required, minLength: minLength(6)}
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]
      if (field) {
        return {'md-invalid': field.$invalid && field.$dirty }
      }
    },
    
    clearForm() {
      this.$v.$reset()
      this.form.username = null
      this.form.password = null
    },

    validateLogin() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log("ok")
      }
    }
  }
}
</script>

<style scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.md-card {
  margin: 0 auto;
  margin-top: 50px; 
}
</style>
