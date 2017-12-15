<template>
  <div class="row">
    <p class="col-md-6 offset-md-3">{{ msg }}</p>
    <div class="col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3">
      <button type="button" class="btn btn-primary btn-block" @click="goToSetup">Next</button>
    </div>
  </div>
</template>

<script>
  import router from '@/router';

  export default {
    name: 'New',
    data() {
      return {
        msg: 'Looks like it\'s the first time you are here, let\'s get you started!',
      };
    },
    methods: {
      goToSetup() {
        router.push('setup');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .row {
    margin-top: 60px;
  }

  button {
    cursor: pointer;
  }
</style>
