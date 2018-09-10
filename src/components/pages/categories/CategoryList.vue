<template>
  <div>
    <fish-card fluid color="yellow">
      <div slot="header"><strong style="color: black">.:: Category </strong></div>
      <fish-tabs value="summary">
        <br>
        <fish-tab-pane label="Summary" index="summary">
          Please click <fish-button v-on:click="add" size='tiny'>Add</fish-button> to create new data.
        </fish-tab-pane>
        <fish-tab-pane label="Search" index="search">
          <fish-input size="tiny" style="width: 400px;" v-model="params.name" v-on:keyup.enter="search" hint="Name..."></fish-input>
          <fish-button size="tiny" v-on:click="search">Search</fish-button>
        </fish-tab-pane>
      </fish-tabs>
      <fish-divider></fish-divider>
      <fish-table :columns="categoryColumn" :data="categories" border></fish-table>
      <div slot="footer">
        <fish-buttons size="tiny">
          <fish-button type="primary" @click="(e) => {paginate(e, 'prev')}" v-if="links.prev" size="tiny">Prev</fish-button>
          <fish-button v-else size="tiny">Prev</fish-button>
          <fish-button type="primary" @click="(e) => {paginate(e, 'next')}" v-if="links.next" size="tiny">Next</fish-button>
          <fish-button v-else size="tiny">Next</fish-button>
        </fish-buttons>
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
      categoryColumn: [
        {title: 'ID', key: 'id'},
        {title: 'Name', key: 'name'},
        {title: 'Operate', key: 'operate', render: this.handleOperate}
      ],
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

    add(e) {
      this.$router.push('/category-add')
    },

    edit(e, record) {
      this.$router.push(`/category-edit/${record.id}`)
    },

    delete(e, record) {
      this.$popup.confirm(e, `do you delete ${record.name} ?`, () => {
        this.service.delete(`/products/categories/${record.id}/`)
        .then(resp => {
          this.all()
        })
        .catch(err => {
          console.log(err)
        })
      })
    },

    handleOperate(h, record, column) {
      let self = this
      return h('div', {
        attrs: {class: 'fish buttons tiny'}
      }, [
        h('a', {
          attrs: {class: 'fish button tiny'},
          on: {
            click(e) {
              self.edit(e, record)
            }
          }
        }, ['edit']),
        h('a', {
          attrs: {class: 'fish button tiny'},
          on: {
            click(e) {
              self.delete(e, record)
            }
          }
        }, ['delete'])
      ])
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
    }
  },
  
  mounted() {
    this.all();
  }
}
</script>

