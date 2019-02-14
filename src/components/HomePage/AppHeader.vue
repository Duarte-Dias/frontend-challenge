<template>
  <div class="headerbox">
    <div class="wrapper">
      <div class="navbar">
        <h1 class="app-title navbar-title">Transcriptions</h1>
        <IconButton icon="fetch" altText="Get Tasks" @click="loadTranscripts"/>
        <IconButton icon="upload" altText="Upload Tasks"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconButton from '@/components/base/IconButton.vue'
import { Action } from 'vuex-class'

@Component({
		components: {
			IconButton,
		},
 })
export default class AppHeader extends Vue {
 @Action private loadTranscripts
}

</script>

<style lang="scss" scoped>
.headerbox{
  background-color: #fff;
  padding: 30px;
  border: 2px solid #ddd;
  margin-bottom: 100px;
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

.navbar-title{
  margin-right: auto;
  margin-left: 0;
}

</style>
