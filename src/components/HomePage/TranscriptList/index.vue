<template>
  <div>
		<div v-for="t in transcripts" :key="t.id">
    		<TranscriptItem v-if="editingTranscript !== t.id"  :item="t"/>
			<TranscriptEdit v-else :item="t"/>
		</div>
		<IconButton icon="add-row" altText="Add a Transcript" v-if="!editing" @click="addTranscript"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TranscriptItem from './TranscriptItem.vue'
import TranscriptEdit from './TranscriptEdit.vue'
import IconButton from '@/components/base/IconButton.vue'

import { State, Getter, Action } from 'vuex-class'


@Component({
 	components: {
		 TranscriptItem,
		 TranscriptEdit,
		 IconButton,
 	},
})
export default class TranscriptList extends Vue {
	@State private transcripts
	@State private editingTranscript
	@Getter private editing

	@Action private addTranscript
}
</script>

