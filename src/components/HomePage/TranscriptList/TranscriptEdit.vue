<template>
	<div class="wrapper">
		<div class="item-box">
			<CheckboxInput/>
			<IconButton icon="person"/>
			<div class="textbox">
				<input type="text" placeholder="Voice" class="item-title" v-model="editData.voice"/>
				<textarea rows="5" placeholder="Text" class="item-content" v-model="editData.text"></textarea>
				<button class="btn btn-cancel" aria-label="Cancel" @click="cancelEdit">Cancel</button>
				<button class="btn btn-ok" aria-label="Save" @click="endEdit" :disabled="!validEdit">Save</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconButton from '@/components/base/IconButton.vue'
import CheckboxInput from '@/components/base/CheckboxInput.vue'

// import { State } from 'vuex-class'


@Component({
	components: {
		IconButton,
		CheckboxInput,
	},
})
export default class TranscriptEdit extends Vue {
	@Prop(Object) private item

	get validEdit() {
		return (this.editData.voice !== '') && (this.editData.text !== '')
	}

	// used to delete data if canceling on an invalid item, could also be "newItem"
	get validItem() {
		return (this.item.voice !== '') && (this.item.text !== '')
	}

	private editData = Object.assign({}, this.item) // Clone

	private cancelEdit() {
		// If it isn't valid (just added), don't keep it
		if (!this.validItem) {
			this.$store.dispatch('deleteTranscript', this.editData.id)
		}
		this.$store.dispatch('cancelEdit')
	}

	private endEdit() {
		this.$store.dispatch('setTranscript', this.editData)
	}

}
</script>
<style lang="scss" scoped>
@import 'itemstyle.scss';

.item-content {
	background-color: #fff;
	border: 2px solid #a9a9a9;
	text-align: left;
	width: 100%;
	resize: none;
	margin: 13px 0 13px 0;
}

.textbox{
	width: 90%;
}

.btn{
	border: none;
	color: white;
	padding: 8px 11px 8px 11px;
	margin: 0 10px 0 0;
	border-radius: 3px;
	font-size: 16px;
	display: inline;
}

.btn-ok{
	background-color: #34a5ff;

	&:disabled{
		background-color: #4e4e4e;
	}
}

.btn-cancel {
	background-color: #d14747;
}
</style>

