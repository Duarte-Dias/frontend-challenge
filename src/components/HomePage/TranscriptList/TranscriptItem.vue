<template>
  <div class="item-box wrapper">
    <CheckboxInput/>
    <div>
      <h2 class="item-title">hahaha</h2>
      <p class="item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus corrupti eaque. Illo ducimus reiciendis dolores provident officiis commodi, possimus nemo? Libero nulla voluptatibus rerum delectus minus ullam vitae saepe.</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CheckboxInput from '@/components/base/CheckboxInput.vue'

@Component({
	components: {
		CheckboxInput,
	},
})
export default class TranscriptItem extends Vue {}
</script>

<style lang="scss" scoped>
.item-box{
  text-align: left;
  display: flex;
}

.item-title {
  font-family: MontSerrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color:#566074;
}

.item-content {
  font-family: OpenSans, sans-serif;
  font-size: 16px;
  color: #778195;
}
</style>

