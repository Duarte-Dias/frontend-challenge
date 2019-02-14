<template>
  <div @mouseenter="hover=true" @mouseleave="hover=false">
    <div class="item-box wrapper">
      <CheckboxInput/>
      <IconButton icon="person" altText="person"/>
      <div>
        <h2 class="item-title">{{ item.voice }}</h2>
        <p class="item-content">{{ item.text }}</p>
      </div>
      <IconButton v-if="hover" icon="delete" altText="Delete" class="del-icon"/>
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
}
</script>

<style lang="scss" scoped>
.item-box{
  text-align: left;
  display: flex;
  padding-bottom: 50px;
}

.item-box > * {
  margin: 0 4px 0 4px;
}


.del-icon{
  margin-left: auto;
  width: 10px; //To avoid wrap on hover
}


.item-title {
  font-family: MontSerrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color:#566074;
  margin: 0;
}

.item-content {
  font-family: OpenSans, sans-serif;
  font-size: 16px;
  color: #778195;
}
</style>

