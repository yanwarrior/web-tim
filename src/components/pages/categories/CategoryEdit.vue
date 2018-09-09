<template>
  <div>
    <fish-card fluid color="grey">
      <div slot="header"><strong>. : : Edit Category</strong></div>

      <div class="fish table">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <div class="fish input small">
                  <div class="label-right"></div>
                  <input type="text" v-model="name" placeholder="Name..." autocomplete="off" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div slot="footer">
        <fish-button v-on:click="save" size="tiny">Save</fish-button>
      </div>
    </fish-card>
  </div>
</template>

<script>
import CategoryService from '@/components/services/CategoryService';

export default {
  name: 'CategoryEdit',
  data() {
    return {
      name: '',
      service: new CategoryService()
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id
      this.service.get(`/products/categories/${id}/`)
      .then((resp) => {
        this.name = resp.data.results.name
      })
      .catch((err) => {
        console.log(err)
      })
    },
    save() {
      let id = this.$route.params.id
      this.service.update(`/products/categories/${id}/`, {name: this.name})
      .then((resp) => {
        this.$router.push('/category-list')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.get()
  }
}
</script>

<style>

</style>
