<template>
  <div class="headerbox">
    <div class="wrapper">
      <div class="navbar">
        <h1 class="app-title navbar-right">Transcriptions</h1>
        <IconButton icon="fetch" altText="Get Tasks"/>
        <IconButton icon="upload" altText="Upload Tasks"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconButton from '@/components/base/IconButton.vue'

@Component({
		components: {
			IconButton,
		},
 })
export default class AppHeader extends Vue {}

</script>

<style lang="scss" scoped>
.headerbox{
  background-color: #fff;
  padding: 30px;
  border: 2px solid #ddd;
}

.app-title {
  font-weight: 500; //Medium
  font-size: 18px;
  color: #414C5E;
  text-align: left;
}

.navbar{
  display: flex;
}

.navbar > * {
  margin: 0 10px 0 10px; //Default margin for navbar items
}

.navbar-right{
  margin-right: auto;
}

</style>
