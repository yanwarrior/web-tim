<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="params.name" @keyup.enter="search" />
        </md-field>
      </md-table-toolbar>
      
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
      </md-table-row>

      <md-table-row v-for="category in categories" :key="category.id">
        <md-table-cell>{{ category.id }}</md-table-cell>
        <md-table-cell>{{ category.name }}</md-table-cell>
      </md-table-row>
    </md-table>
    
    <md-card>
      <md-card-content>
        <md-button @click="(e) => {paginate(e, 'prev')}" v-if="prevPage" class="md-raised md-primary">Prevoius</md-button>
        <md-button v-else class="md-raised">Prevoius</md-button>
        <md-button @click="(e) => {paginate(e, 'next')}" v-if="nextPage" class="md-raised md-primary">Next</md-button>
        <md-button v-else class="md-raised">Next</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>


<script>
import CategoryService from '@/components/services/CategoryService'

export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [],
      service: new CategoryService(),
      params: {
        page: '',
        name: ''
      },
      nextPage: '',
      prevPage: ''
    }
  },
  methods: {
    all() {
      this.service.all('/products/categories/', this.params)
        .then((resp) => {
          console.log(resp.data)
          this.categories = resp.data.results
          this.nextPage = resp.data.links.next
          this.prevPage = resp.data.links.prev
        })
        .catch((err) => {
          console.log(err)
        })
    },
    paginate(e, type) {
      if (type == 'next') {
        this.params.page = this.nextPage
        this.all()
      }

      if (type == 'prev') {
        this.params.page = this.prevPage
        this.all()
      }
    },
    search(e) {
      // clear next prev
      this.params.page = ''
      this.nextPage = null
      this.prevPage = null
      this.all()
    },
  },
  
  mounted() {
    this.all();
  }
}
</script>

