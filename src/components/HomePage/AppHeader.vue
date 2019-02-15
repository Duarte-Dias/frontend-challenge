<template>
  <div class="headerbox">
    <div class="wrapper">
      <div class="headerbar">
        <h1 class="app-title headerbar-title">Transcriptions</h1>
        <IconButton icon="fetch" altText="Get Transcripts" @click="loadTranscripts" v-if="!editing"/>
        <IconButton icon="upload" altText="Upload Transcripts" @click="uploadTranscripts" v-if="!editing"/>
        
        <div v-if="editing" title="To sending invalid data, this is disabled">
          Can't get / upload during editing
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconButton from '@/components/base/IconButton.vue'
import { Action, Getter } from 'vuex-class'

@Component({
	components: {
			IconButton,
	},
 })
export default class AppHeader extends Vue {
	@Action private loadTranscripts
	@Action private uploadTranscripts
	@Getter private editing
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

.headerbar{
  display: flex;
}

.headerbar > * {
  margin: 0 10px 0 10px; //Default margin for headerbar items
}

.headerbar-title{
  margin-right: auto;
  margin-left: 0;
}

</style>
