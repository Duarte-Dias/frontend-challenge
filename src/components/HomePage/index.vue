<template>
  <div>
    <AppHeader/>
    <IconButton icon="person" altText=""/>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IconButton from '@/components/base/IconButton.vue';
import AppHeader from './AppHeader.vue';


@Component({
   components: {
     AppHeader,
     IconButton,
   },
 })
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>

</style>
