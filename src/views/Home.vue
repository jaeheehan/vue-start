<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children :parentMessage="message"></children>
    <button @click="changeMessage">메시지를 바꿔줄게요</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import children from '@/components/children.vue'

@Component({
  components: {
    children
  }
})
export default class Home extends Vue {
  private message: string = 'Hello Vkein!!!@~!@!@';

  public changeMessage() {
    this.message = '바뀌는 메시지'
  }
}
</script>
