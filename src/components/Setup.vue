<template>
  <div class="row">
    <div class="col-lg">
      <p class="text-muted" v-show="shareOptions.length === 0">Add some share options in order to continue to next step</p>

      <div v-show="shareOptions.length > 0">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Year</th>
              <th>Num of shares</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in shareOptions" v-bind:index="index" v-bind:key="index">
              <td>{{ item.year }}</td>
              <td>{{ item.shares }}</td>
              <td>
                <button type="button" class="btn btn-link" @click="deleteOption(index)">
                  <i class="fa fa-trash-o text-danger" aria-hidden="true"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
            <button type="button" class="btn btn-primary btn-block" @click="goToVest">Next</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg">
      <form>
        <div class="form-group">
          <label for="financialYearSelect">Financial Year</label>
          <select class="form-control" id="financialYearSelect" v-model="addForm.year">
            <option>2015</option>
            <option>2016</option>
            <option selected>2017</option>
          </select>
          <small id="emailHelp" class="form-text text-muted">The financial year which share options are awarded</small>
        </div>
        <div class="form-group">
          <label for="numberOfSharesInput">Number of share Options</label>
          <input type="number" class="form-control" id="numberOfSharesInput" placeholder="Enter shares..." v-model.number="addForm.shares">
        </div>
        <div class="row">
          <div class="text-center col-md-4 offset-md-4 col-sm-6 offset-sm-3">
            <button type="button" class="btn btn-outline-success btn-block" @click="addNewOptions">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import router from '@/router';
  import CONST from '../constants';

  const formDefaultValue = {
    year: '2017',
    shares: null,
  };

  const sharePrices = [{
    year: '2015',
    price: 0.5,
  }, {
    year: '2016',
    price: 1,
  }, {
    year: '2017',
    price: 1.58,
  }];

  export default {
    name: 'Setup',
    data() {
      return {
        shareOptions: [],
        addForm: Object.assign({}, formDefaultValue),
      };
    },
    mounted() {
      const localData = JSON.parse(localStorage.getItem(CONST.LOCAL_STORAGE) || '{}');
      if (localData && localData.data) this.shareOptions = localData.data;
    },
    methods: {
      addNewOptions() {
        if (this.addForm.shares > 0) {
          this.shareOptions.push({
            year: this.addForm.year,
            shares: this.addForm.shares,
            price: this.getPrice(this.addForm.year),
          });

          // sort array by year
          this.shareOptions.sort((a, b) => (
            a.year - b.year
          ));

          this.updateLocalStorage();

          // reset form
          this.addForm = Object.assign({}, formDefaultValue);
        }
      },
      deleteOption(index) {
        this.shareOptions.splice(index, 1);

        this.updateLocalStorage();
      },
      updateLocalStorage() {
        localStorage.setItem(CONST.LOCAL_STORAGE, JSON.stringify({
          date: new Date(),
          data: this.shareOptions,
        }));
      },
      getPrice(year) {
        for (let i = 0; i < sharePrices.length; i += 1) {
          if (sharePrices[i].year === year) {
            return sharePrices[i].price;
          }
        }
        return null;
      },
      goToVest() {
        router.push('/');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .col-lg {
    margin-top: 20px;

    table {
      .btn-link {
        padding: 0;
      }
    }

    button {
      cursor: pointer;
    }

    form {
      text-align: left;
    }
  }
</style>
