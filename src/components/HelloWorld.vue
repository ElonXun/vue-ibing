<template>
  <div class="hello">
    HelloWorld
    <button @click="getOauth">申请鉴权</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    getOauth: function(){
      const params = {
        callbackurl: 'http://localhost:8080/#/getFinalOauth'
      }
      axios.get('http://localhost:3000/getOauth', {params})
        .then(function (response) {
          const data = response.data;
          const { redirectUrl } = data;
          console.log(response);
          window.open(redirectUrl, '_self')
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("getOauth")
      // window.open('http://localhost:3000/getOauth', '_self')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
