<template>
  <div>
    <button :aria-label="this.altText">
      <img :src="this.iconSrc" :title="this.altText">
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconButton from '@/components/base/IconButton.vue'

@Component({
	components: {
		IconButton,
	},
})
export default class HomePage extends Vue {
	@Prop(String) public icon!: string
	@Prop(String) public altText!: string

	get iconSrc() {
		console.log('he')
		return require(`@/assets/icons/${this.icon}.svg`)
	}
}
</script>

<style scoped>
button {
  border: none;
  background-color: inherit;
}
</style>
