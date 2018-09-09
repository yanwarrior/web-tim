<template>
  <div>
      <fish-menu mode="inline" style="width: 200px;">
        <fish-option index="0" content="::: Dashboard"></fish-option>
        <fish-submenu index="1" mode="inline">
          <template slot="title">::: Master</template>
          <fish-option index="1-0" @click="(e) => {redirect(e, '/category-list')}" content="Category"></fish-option>
          <fish-option index="1-1" content="Product"></fish-option>
        </fish-submenu>

        <fish-submenu index="2" mode="inline">
          <template slot="title">::: Transaction</template>
          <fish-option index="2-1" content="Order"></fish-option>
        </fish-submenu>

        <fish-submenu index="3" mode="inline">
          <template slot="title">::: Reporting</template>
          <fish-option index="3-1" content="Report Product"></fish-option>
          <fish-option index="3-2" content="Report Omzet"></fish-option>
        </fish-submenu>

        <fish-submenu index="4" mode="inline">
          <template slot="title">::: Settings</template>
          <fish-option index="4-1" content="About TIM"></fish-option>
          <fish-option index="4-2" content="Send Feedback"></fish-option>
        </fish-submenu>
        <fish-option index="5" content="::: Logout"></fish-option>
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

