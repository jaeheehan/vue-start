<template>
    <div id="app">
        {{$store.state}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App4 extends Vue {
    created() {
        this.$store.dispatch('moduleA/setRootData', 'vkein')
    }
}
</script>

<style scoped>

</style>
