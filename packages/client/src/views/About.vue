<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h4>{{ message }}</h4>
    <h1>{{ anotherMessage }}</h1>
    <button @click="fetchData2">fetch2</button>
    <Btn btnName="mygtukas" />
    <Btn btnName="2" />
    <Btn btnName="zyro" />
  </div>
</template>

<script>
import axios from 'axios'
import Btn from '../components/Btn.vue'

export default {
  name: 'About',
  components: {
    Btn,
  },
  data() {
    return {
      message: '',
      anotherMessage: '',
    }
  },
  methods: {
    fetchData() {
      return axios.get('api/test')
    },
  },
  created() {
    this.fetchData().then((response) => {
      this.message = response.data.message
      this.anotherMessage = response.data.anotherMessage
    })
  },
}
</script>
