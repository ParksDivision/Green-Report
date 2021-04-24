<template>
  <div>
    <div class="login">
      <h3>Login</h3>
      <form @submit.prevent="pressed">
        <div class="login">
          <input type="email" placeholder="login" v-model="email" />
        </div>
        <div class="password">
          <input type="password" placeholder="password" v-model="password" />
        </div>
        <button>Submit</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
    </div>
    <div class="register">
      <p>Don't have an account yet?</p>
      <nuxt-link to="/register">Register new account</nuxt-link>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data.email)
          this.$store.commit('userInfoStore/updateUser', data);
          this.$router.replace({ name: 'profile' })
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login,
.register {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
div {
  color: inherit;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>
