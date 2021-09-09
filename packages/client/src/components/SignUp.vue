<template>
  <buttn @click="signIn">auth</buttn>
  <div>{{ auth }}</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signIn',
  data() {
    return {
      auth: null,
    }
  },
  methods: {
    async signIn() {
      const { data } = await axios.get('/api/auth/signin')
      console.log(data)
      this.auth = data.message
    },
  },
}
</script>

<style>
</style>
