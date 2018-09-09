<template>
  <div>
    <!-- Segment 1 -->
    <fish-card fluid>
      <div slot="header"><strong>.:: Products</strong></div>
      <fish-tabs value="search">
        <fish-tab-pane label="Search" index="search">User</fish-tab-pane>
        <fish-tab-pane label="Summary" index="summary">Role</fish-tab-pane>
      </fish-tabs>
    </fish-card>
    
    <fish-divider></fish-divider>
    
    <fish-card fluid>
      <fish-table :columns="productColumns" :data="products"></fish-table>
      <div slot="footer">
        <fish-buttons size="tiny">
            <fish-button>Prev</fish-button>
            <fish-button>Next</fish-button>
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
      this.$popup.confirm(event, 'do you delete it？', () => {
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
    }
  }, // end methods
  mounted() {
    this.all()
  }
}
</script>

<style></style>


