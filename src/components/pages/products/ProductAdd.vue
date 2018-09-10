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
          <fish-tag v-if="category.name" index="1">{{category.name}}</fish-tag>
          <fish-select @change="changeCategorySelected" :search="seacrhCategoryChangeHandler">
            <fish-option :index="item.id"  :content="item.name" v-for="item in categories" :key="item.id"></fish-option>
          </fish-select>
        </fish-field>
        <fish-field>
          <fish-input-number v-model="stock" hint="Stock"></fish-input-number>
        </fish-field>
        <fish-field>
          <fish-input-number v-model="stockMinimum" hint="Stock Minimum"></fish-input-number>
        </fish-field>
        <fish-field>
          <fish-input-number v-model="price" hint="Price"></fish-input-number>
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
      category: {},
      name: '',
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

    changeCategorySelected(value) {
      this.category = this.categories.find(category => {
        if (category.id === value) return category; 
      })
    },

    save(e) {
      this.service.create('/products/product-add/', {
        name: this.name,
        categoryId: this.category.id,
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
