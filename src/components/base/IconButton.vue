<template>
  <div>
    <button :aria-label="this.altText" @click="$emit('click')">
      <img :src="this.iconSrc" :title="this.altText">
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class IconButton extends Vue {
	@Prop(String) public icon!: string
	@Prop(String) public altText!: string

	get iconSrc() {
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
