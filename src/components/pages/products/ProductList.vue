<template>
  <div>
    <!-- Segment 1 -->
    <fish-card fluid color="yellow">
      <div slot="header"><strong class="strong-header" style="color: black;">.:: Products</strong></div>
      <fish-tabs value="summary">
        <br>
        <fish-tab-pane label="Summary" index="summary">Role</fish-tab-pane>
        <fish-tab-pane label="Search" index="search">
          <fish-input size='tiny' style="width: 400px" v-model="params.name" hint="Name..."></fish-input>
          <fish-button size='tiny' v-on:click="search">Search</fish-button>
        </fish-tab-pane>
      </fish-tabs>
      <fish-divider></fish-divider>
      <fish-table border :columns="productColumns" :data="products"></fish-table>
      <div slot="footer">
        <!-- pagination -->
        <fish-buttons size="tiny">
          <fish-button type='primary' v-if="links.prev" v-on:click="(e) => {paginate(e, 'prev')}">Prev</fish-button>
          <fish-button v-else>Prev</fish-button>
          <fish-button type='primary' v-if="links.next" v-on:click="(e) => {paginate(e, 'next')}">Next</fish-button>
          <fish-button v-else>Next</fish-button>
        </fish-buttons>
      </div>
    </fish-card>
  </div>
</template>

<script>
import ProductService from '@/components/services/ProductService'

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      productColumns: [
        {title: 'Name', key: 'name'},
        {title: 'Category', key: 'category_human'},
        {
          title: 'Operate',
          key: 'operate',
          render: this.handleOperate
        }
      ],
      service: new ProductService(),
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
    delete(e) {
      this.$popup.confirm(e, 'do you delete it？', () => {
        console.log('OK....')
      })
    },

    edit(e, record) {
      console.log('redirect edit page ', record)
    },

    all() {
      this.service.all('/products/product-list/', this.params)
      .then(resp => {
        this.products = resp.data.results
        this.links.next = resp.data.links.next
        this.links.prev = resp.data.links.prev
      })
      .catch(err => {
        console.log(err)
      })
    },

    handleOperate(h, record, column) {
      let self = this;
      return h('div',{
        attrs: {class: 'fish buttons tiny'}
      },[
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
              self.delete(e)
            }
          }
        }, ['delete']),
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
      this.params.page = ''
      this.links.next = null
      this.links.prev = null
      this.all()
    }
  }, // end methods
  mounted() {
    this.all()
  }
}
</script>

<style></style>


