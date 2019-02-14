<template>
  <div class="item-box wrapper">
    <CheckboxInput/>
    <IconButton icon="person" altText="person"/>
    <div>
      <h2 class="item-title">hahaha</h2>
      <p class="item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus corrupti eaque. Illo ducimus reiciendis dolores provident officiis commodi, possimus nemo? Libero nulla voluptatibus rerum delectus minus ullam vitae saepe.</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CheckboxInput from '@/components/base/CheckboxInput.vue'
import IconButton from '@/components/base/IconButton.vue'


@Component({
	components: {
		CheckboxInput,
		IconButton,
	},
})
export default class TranscriptItem extends Vue {}
</script>

<style lang="scss" scoped>
.item-box{
  text-align: left;
  display: flex;
}

.item-box > * {
  margin: 0 4px 0 4px;
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

