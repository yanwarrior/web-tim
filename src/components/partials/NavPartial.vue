<template>
<div>
  <md-toolbar class="md-transparent" md-elevation="0">
    Menu
  </md-toolbar>
  <md-list>
    <md-list-item>
      <md-icon>move_to_inbox</md-icon>
      <span class="md-list-item-text">
        <router-link :to="{name: 'category-list'}">Category</router-link>
      </span>
    </md-list-item>
    <md-list-item>
      <md-icon>send</md-icon>
      <span class="md-list-item-text">Sent Mail</span>
    </md-list-item>
    <md-list-item>
      <md-icon>delete</md-icon>
      <span class="md-list-item-text">Trash</span>
    </md-list-item>
    <md-list-item>
      <md-icon>error</md-icon>
      <span class="md-list-item-text">Spam</span>
    </md-list-item>
  </md-list>
</div>
</template>

<script>
export default {
  name: 'NavPartial'
}
</script>

