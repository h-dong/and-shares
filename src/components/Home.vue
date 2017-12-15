<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Share Allocation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vest Options</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <h4 class="card-title">Share Allocation</h4>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
  import router from '@/router';
  import CONST from '../constants';

  export default {
    name: 'Home',
    data() {
      return {
        shareOptions: [],
      };
    },
    mounted() {
      const localData = JSON.parse(localStorage.getItem(CONST.LOCAL_STORAGE) || '{}');

      if (localData && localData.data) {
        this.shareOptions = localData.data;
      } else {
        router.push('new');
      }
    },
  };
</script>
