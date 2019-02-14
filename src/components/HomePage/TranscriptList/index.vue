<template>
  <div>
		<div v-for="t in transcripts" :key="t.id">
    	<TranscriptItem :item="t"/>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TranscriptItem from './TranscriptItem.vue'
import { State } from 'vuex-class'


@Component({
 	components: {
 		TranscriptItem,
 	},
})
export default class TranscriptList extends Vue {
	@State private transcripts
}
</script>

