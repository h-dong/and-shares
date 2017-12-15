<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <Header/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';

  export default {
    name: 'app',
    components: {
      Header,
    },
  };
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  // @media (max-width: 1200px) {
  //   #app {
  //     width: initial;
  //     margin: 0 1rem;
  //   }
  // }

  // @media (min-width: 1200px) {
  //   #app {
  //     width: 1200px;
  //     margin: 0 auto;
  //   }
  // }
</style>
