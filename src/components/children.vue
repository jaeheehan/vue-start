<template>
<div>
    <p>
        {{alertMessage}}
    </p>
    {{parentMessage}}
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Children extends Vue {
  @Prop() private parentMessage?: string;
  private alertMessage?: string;

  @Watch('parentMessage')
  private update(value: string, oldValue: string) {
    this.alertMessage = '메시지를 업데이트 했습니다.'
  }
}
</script>
