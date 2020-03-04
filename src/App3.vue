<template>
    <div id="app">
        <count></count>
        <button @click="increase">증가</button>
        <button @click="decrease">감소</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import count from '@/components/count.vue'

@Component({
    components: {
        count
    }
})
export default class App3 extends Vue {
    public increase() {
        this.$store.dispatch('increase')
    }
    public decrease() {
        this.$store.dispatch('decrease')
    }
}
</script>

<style scoped>

</style>
