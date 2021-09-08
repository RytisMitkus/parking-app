<template>
  <div>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signIn',
  methods: {
    signIn() {
      return axios.get('api/auth/google')
    },
  },
}
</script>

<style>
</style>
