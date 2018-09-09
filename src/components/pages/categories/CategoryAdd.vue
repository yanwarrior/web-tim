<template>
  <div>
    <fish-card fluid color="grey">
      <div slot="header"><strong>. : : New Category</strong></div>

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
