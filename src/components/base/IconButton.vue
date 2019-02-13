<template>
  <div>
    <button><img :src="this.iconSrc"></img></button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import IconButton from '@/components/base/IconButton.vue';

@Component({
   components: {
     IconButton,
   },
 })
export default class HomePage extends Vue {
  @Prop(String) public icon!: string;

  get iconSrc() {
    return require(`@/assets/icons/${this.icon}.svg`);
  }

}
</script>
