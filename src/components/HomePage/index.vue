<template>
  <div>
    <AppHeader/>
    <TranscriptList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from './AppHeader.vue'
import TranscriptList from './TranscriptList/index.vue'

@Component({
		components: {
			AppHeader,
			TranscriptList,
		},
 })
export default class HomePage extends Vue {}
</script>

