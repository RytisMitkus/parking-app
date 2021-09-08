<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SignIn />
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '../components/SignUp.vue'

export default {
  name: 'Home',
  components: {
    SignIn,
  },
}
</script>
