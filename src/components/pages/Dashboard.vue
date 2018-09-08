<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <header-partial></header-partial>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full">
        <nav-partial></nav-partial>
      </md-app-drawer>

      <md-app-content>
        <!-- Content here -->
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import NavPartial from '@/components/partials/NavPartial';
import HeaderPartial from '@/components/partials/HeaderPartial';

export default {
  name: 'Dashboard',
  data() {
    return {
      title: 'My Dashboard'
    }
  },
  components: {
    HeaderPartial,
    NavPartial
  }
}
</script>


<style scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, .12);
}

.md-drawer {
  width: 230px;
}
</style>

