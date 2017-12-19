<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: tab === 'SHARE' }" href="#" @click="tab = 'SHARE'">Share Allocation</a>
        </li>
        <li class="nav-item" v-if="false">
          <a class="nav-link" :class="{ active: tab === 'VEST' }" href="#" @click="tab = 'VEST'">Vest Options (WIP)</a>
        </li>
      </ul>
    </div>
    <div class="card-body" v-show="tab === 'SHARE'">
      <ShareAllocation :shareData="shareOptions" />
    </div>
    <div class="card-body" v-show="tab === 'VEST'">
      <VestOptions :shareData="shareOptions" />
    </div>
  </div>
</template>

<script>
  import router from '@/router';
  import CONST from '../constants';
  import ShareAllocation from './ShareAllocation';
  import VestOptions from './VestOptions';

  export default {
    name: 'Home',
    components: {
      ShareAllocation,
      VestOptions,
    },
    data() {
      return {
        tab: 'SHARE',
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
