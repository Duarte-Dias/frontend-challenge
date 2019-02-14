<template>
  <div @mouseenter="hover=true" @mouseleave="hover=false">
    <div class="item-box wrapper">
      <CheckboxInput/>
      <IconButton icon="person"/>
      <div>
        <h2 class="item-title" @click="startEdit">{{ item.voice }}</h2>
        <p class="item-content" @click="startEdit">{{ item.text }}</p>
      </div>
      <IconButton v-if="hover" icon="delete" altText="Delete" class="del-icon" @click="deleteItem"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import CheckboxInput from '@/components/base/CheckboxInput.vue'
import IconButton from '@/components/base/IconButton.vue'


@Component({
	components: {
		CheckboxInput,
		IconButton,
	},
})
export default class TranscriptItem extends Vue {
	@Prop(Object) private item

	private hover = false

	private startEdit() {
		this.$store.dispatch('startEdit', this.item.id)
	}

	private deleteItem() {
		this.$store.dispatch('deleteTranscript', this.item.id)
	}
}
</script>

<style lang="scss" scoped>
@import './itemstyle.scss';


.del-icon{
  margin-left: auto;
  width: 10px; //To avoid wrap on hover
}
</style>

