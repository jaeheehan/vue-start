<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children></children>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Provide } from 'vue-property-decorator'
import children from '@/components/children.vue'

@Component({
  components: {
    children
  }
})
export default class Home extends Vue {
  @Provide('message') public msg: string = 'provide/inject example';
}
</script>
