<template>
  <fish-layout class="demo3" sider="l">
    <header-partial slot="header"></header-partial>
    <nav-partial slot="sider"></nav-partial>
    <div slot="content"><router-view></router-view></div>
  </fish-layout>
</template>

<script>
import NavPartial from '@/components/partials/NavPartial';
import HeaderPartial from '@/components/partials/HeaderPartial';

export default {
  components: {
    HeaderPartial,
    NavPartial
  },
  name: 'Dashboard',
  data() {
    return {
      title: 'My Dashboard'
    }
  }
  
}
</script>


<style>
.fish.layout.demo3 > .header {
    padding: 0;
    background-color: #235377;
    color: azure;
  }
  .fish.layout.demo3 .has-sider > .content {
    margin: 20px;
    padding: 0.1em 1em;
  }
  .fish.layout.demo3 .logo {
    padding: 1em;
  }
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>

