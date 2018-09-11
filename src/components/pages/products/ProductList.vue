<template>
  <div>
    <!-- Segment 1 -->
    <fish-card fluid color="grey">
      <div slot="header">Product</div>

      <fish-tabs value="operate"><br>
        <fish-tab-pane label="Operate" index="operate">
          <fish-buttons>
            <fish-button v-on:click="add">Add</fish-button>
          </fish-buttons>
        </fish-tab-pane>

        <fish-tab-pane label="Search" index="search">
          <fish-input style="width: 400px" v-model="params.name" hint="Name..."></fish-input>
          <fish-button v-on:click="search">Search</fish-button>
        </fish-tab-pane>
      </fish-tabs>

      <br>

      <fish-table border :columns="productColumns" :data="products"></fish-table>
      <div slot="footer">
        <!-- pagination -->
        <fish-buttons>
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
      this.$router.push(`/product-edit/${record.id}`)
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
        attrs: {class: 'fish buttons'}
      },[
        h('a', {
          attrs: {class: 'fish button'},
          on: {
            click(e) {
              self.edit(e, record)
            }
          }
        }, ['Edit']),
        h('a', {
          attrs: {class: 'fish button'},
          on: {
            click(e) {
              self.delete(e)
            }
          }
        }, ['Delete']),
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
    },

    add(e) {
      this.$router.push('/product-add')
    }
  }, // end methods
  mounted() {
    this.all()
  }
}
</script>

<style></style>


