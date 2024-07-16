<template>
  <div class="customers-transactions">
    <div class="d-flex my-4 search-container">

      <input type="text" class="form-control w-50 me-3" placeholder="Search Customer or Transaction"
        v-model="searchValue">
      <button @click="onSearch" class="btn btn-primary">Search</button>
    </div>

    <h2>Customers Grid</h2>

    <table class="mt-3 customers-tbl table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Transaction</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in customers">
          <tr class="accordion-toggle">
            <td data-toggle="collapse" data-target="#collapseTwo">{{ item.id }}</td>
            <td data-toggle="collapse" data-target="#collapseTwo">{{ item.name }}</td>
            <td v-if="!selectedCustomer || selectedCustomer?.id != item.id">
              <button class="btn btn-info" @click="showTransactions(item)"> Show Transaction</button>
            </td>
            <td v-else><button class="btn btn-info" @click="hideTransactions()"> Hide Transaction</button></td>
          </tr>
          <tr class="transactions-tbl-row" v-if="selectedCustomer && selectedCustomer?.id == item.id">
            <td>
              <BarChart v-if="chartData" :chartData="chartData" />
            </td>
            <td colspan="3">
              <div class="transactions-container my-4">
                <h4>Transactions for {{ selectedCustomer.name }}</h4>

                <table class="transactions-tbl table  table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in transactions">
                      <td>{{ item.id }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.amount }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.transactions-tbl-row {
  background-color: #dddddd;
}
</style>

<script>
import BarChart from './components/BarChart.vue'

import { getCustomers, getCustomerTransactions, getTransactionsByAmount, getCustomerById } from './services/customerService';

export default {
  components: { BarChart },

  data() {
    return {
      searchValue: "",
      selectedCustomer: null,
      customers: [],
      transactions: [],
      chartData: null
    }
  },
  mounted() {
    getCustomers().then(customersData => this.customers = customersData);
  },
  methods: {
    async onSearch() {
      const customersResult = await getCustomers(this.searchValue);
      if (customersResult?.length > 0) {
        this.customers = customersResult
        return;
      }

      const transactionsByAmount = await getTransactionsByAmount(this.searchValue);
      const customerIds = new Set(transactionsByAmount.map(a => a.customer_id));
      const promises = [];
      for (const id of customerIds) {
        promises.push(getCustomerById(id))
      }

      const result = await Promise.all(promises);
      this.customers = result || customersResult;
    },

    showTransactions(customer) {
      this.selectedCustomer = customer;
      getCustomerTransactions(customer.id).then(transactionsResponse => {
        this.transactions = transactionsResponse;
        const amounts = this.transactions.map(t => t.amount);
        this.chartData = {
          labels: this.transactions.map(t => t.date),
          datasets: [{ label: `${customer.name} Transactions Graph`, data: amounts }]
        }
      });
    },
    hideTransactions() {
      this.selectedCustomer = null;
      this.transactions = [];
      this.chartData = null;
    }
  },
}


</script>
