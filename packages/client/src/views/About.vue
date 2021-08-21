<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h4>{{ message }}</h4>
    <button @click="fetchData">fetch</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  data() {
    return {
      message: '',
    }
  },
  methods: {
    fetchData() {
      return axios.get('/api')
    },
  },
  created() {
    this.fetchData().then((response) => {
      this.message = response.data.message
    })
  },
}
</script>
