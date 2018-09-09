<template>
  <div>
    <fish-card fluid color="grey">
      <div slot="header"><strong>. : : Categories</strong></div>
      <div class="fish table">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <div class="fish input small">
                  <div class="label-right"></div>  
                    <input type="text" v-model="params.name" @keyup.enter="search"  placeholder="Search by name" autocomplete="off"> 
                </div>
              </td>
            </tr>
            <tr>
              <td>Operate</td>
              <td>
                <fish-button size='tiny'><router-link to="/category-add">New</router-link></fish-button>
                <fish-button @click="(e) => {paginate(e, 'prev')}" v-if="links.prev" size="tiny">Prev</fish-button>
                <fish-button v-else size="tiny">Prev</fish-button>
                <fish-button @click="(e) => {paginate(e, 'next')}" v-if="links.next" size="tiny">Next</fish-button>
                <fish-button v-else size="tiny">Next</fish-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </fish-card>
    <fish-divider></fish-divider>
    <fish-card fluid color="grey">
      <div class="fish table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Operate</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>
                <fish-button size="tiny">Edit</fish-button>
                <fish-button size="tiny">Delete</fish-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </fish-card>

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
      links: {
        next: null,
        prev: null
      }
    }
  },
  methods: {
    all() {
      this.service.all('/products/categories/', this.params)
        .then((resp) => {
          this.categories = resp.data.results
          this.links.next = resp.data.links.next
          this.links.prev = resp.data.links.prev
        })
        .catch((err) => {
          console.log(err)
        })
    },
    hand(h, record, column) {
      return "<a>Hello</a>";
    },
    paginate(e, type) {
      if (type == 'next') {
        this.params.page = this.links.next
        this.all()
      }

      if (type == 'prev') {
        this.params.page = this.links.prev
        this.all()
      }
    },
    search(e) {
      // clear next prev
      this.params.page = ''
      this.links.next = null
      this.links.prev = null
      this.all()
    },
  },
  
  mounted() {
    this.all();
  }
}
</script>

