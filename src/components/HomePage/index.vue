<template>
  <div class="wrapper">
    <IconButton icon="person"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IconButton from '@/components/base/IconButton.vue';

@Component({
   components: {
     IconButton,
   },
 })
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
