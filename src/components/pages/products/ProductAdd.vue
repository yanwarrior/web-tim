<template>
  <div>
    <fish-card fluid color="yellow">
      <div slot="header">
        <strong style="color: black">.:: Add Category</strong>
      </div>
      <fish-form style="width: 300px">
        <fish-field>
          <fish-input v-model="name" hint="Name"></fish-input>
        </fish-field>
        <fish-field>
          <fish-select v-model="categoryId" :search="seacrhCategoryChangeHandler">
            <fish-option :index="item.id"  :content="item.name" v-for="item in categories" :key="item.id"></fish-option>
          </fish-select>
        </fish-field>
        <fish-field>
          <fish-input v-model="stock" type="number" hint="Stock"></fish-input>
        </fish-field>
        <fish-field>
          <fish-input v-model="stockMinimum" type="number" hint="Stock Minimum"></fish-input>
        </fish-field>
        <fish-field>
          <fish-input v-model="price" type="number" hint="Price"></fish-input>
        </fish-field>
      </fish-form>
      <div slot="footer">
        <fish-buttons>
          <fish-button v-on:click="save" type="primary">Save</fish-button>
          <fish-button v-on:click="(e) => {$router.push('/product-list')}">Cancel</fish-button>
        </fish-buttons>
      </div>
    </fish-card>
  </div>
</template>

<script>
import ProductService from '@/components/services/ProductService'
import categoryService from '@/components/services/CategoryService'


export default {
  name: 'ProductAdd',
  data() {
    return {
      name: '',
      categoryId: '',
      stock: null,
      stockMinimum: null,
      price: null,
      categories: [],
      service: new ProductService(),
      categoryService: new categoryService()
    }
  },
  methods: {
    seacrhCategoryChangeHandler(v) {
      this.categoryService.all('/products/categories/', {
        name: v,
        select_mode: "True"
      })
      .then((resp) => {
        this.categories = resp.data.results
      })
      .catch((err) => {
        console.log(err)
      })
    },

    save(e) {
      this.service.create('/products/product-add/', {
        name: this.name,
        categoryId: this.categoryId,
        stock: this.stock,
        stockMinimum: this.stockMinimum,
        price: this.price
      })
      .then(resp => {
        this.$router.push('/product-list')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
