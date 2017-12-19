<template>
  <div>
    <div v-for="item in shareData">
      <h5>FY {{ item.year }}</h5>
      <p>The <strong>{{ item.shares }}</strong> options granted in <strong>{{ item.year }}</strong> will be available for purchase at <strong>£{{ item.price.toFixed(2) }}</strong> each.</p>
      <table class="table">
        <thead>
          <tr>
            <th v-for="i in 5" :class="{'table-primary': isCurrentYear(parseInt(item.year) + i) }">{{ parseInt(item.year) + i }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="i in 5" :class="{'table-primary': isCurrentYear(parseInt(item.year) + i) }">{{ parseInt(item.shares / 5) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'New',
    props: ['shareData'],
    methods: {
      isCurrentYear(year) {
        const date = new Date();
        return year === date.getFullYear();
      },
    },
  };
</script>

<style lang="scss" scoped>
  h5 {
    border-bottom: .05rem solid #cccccc;
    padding: 1rem 0 0.5rem 0;
  }
</style>
