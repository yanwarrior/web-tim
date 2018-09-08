<template>
  <div>
      <fish-menu mode="inline" style="width: 200px;">
        <fish-option index="0" content="Dashboard"></fish-option>
        <fish-submenu index="1" mode="inline">
          <template slot="title">Master Data</template>
          <fish-option index="1-0" @click="(e) => {redirect(e, '/category-list')}" content="Category"></fish-option>
          <fish-option index="1-1" content="Lucy"></fish-option>
          <fish-option index="1-2" content="Active"></fish-option>
        </fish-submenu>
        <fish-option index="2" content="Tongji"></fish-option>
        <fish-submenu index="3" mode="inline">
          <template slot="title">submenu</template>
          <fish-option index="3-0" content="Jack"></fish-option>
          <fish-option index="3-1" content="Lucy"></fish-option>
          <fish-option index="3-2" content="Active"></fish-option>
          <fish-submenu index="3-3" mode="inline">
            <template slot="title">submenu-3</template>
            <fish-option index="3-3-0" content="Jack"></fish-option>
            <fish-option index="3-3-1" content="Lucy"></fish-option>
            <fish-option index="3-3-2" content="Active"></fish-option>
          </fish-submenu>
        </fish-submenu>
      </fish-menu>
    </div>
</template>

<script>
export default {
  name: 'NavPartial',
  methods: {
    redirect(e, to) {
      this.$router.push(to);
    }
  }
}
</script>

