<template>
  <fish-layout class="demo3" sider="l">
    <header-partial slot="header"></header-partial>
    <nav-partial slot="sider"></nav-partial>
    <div slot="content"><router-view></router-view></div>
    <div slot="footer">Copyright @ 2018 Alhayyan Labs. All right reserved.</div>
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
.fish.layout {
  background: #fff;
  height: 100% !important;
  position: relative;
}
.fish.layout.demo3 > .header {
    padding: 0;
    color: #fff;
    background-color: #0a637e;
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
    font-size: 1.3rem;
  }
</style>

