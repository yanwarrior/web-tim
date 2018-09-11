<template>
  <div>
    <fish-card fluid color="grey">
      <div slot="header">New Category</div>

      <fish-form style="width: 300px">
        <fish-field>
          <fish-input v-model="name" hint="Name"></fish-input>
        </fish-field>
      </fish-form>

      <div slot="footer">
        <fish-buttons>
          <fish-button type="primary" v-on:click="save">Save</fish-button>
          <fish-button v-on:click="(e) => {$router.push('/category-list')}">Cancel</fish-button>
        </fish-buttons>
      </div>
    </fish-card>
  </div>
</template>

<script>
import CategoryService from '@/components/services/CategoryService';

export default {
  name: 'CategoryAdd',
  data() {
    return {
      name: '',
      service: new CategoryService()
    }
  },
  methods: {
    save() {
      this.service.create('/products/categories/', {name: this.name})
      .then((resp) => {
        this.$router.push('/category-list')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
