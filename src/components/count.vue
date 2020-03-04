<template>
    <div>
        {{$store.getters.count}}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
export default class Count extends Vue {}
</script>

<style scoped>

</style>
