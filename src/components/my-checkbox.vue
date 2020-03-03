<template>
    <div>
        <input type="checkbox" :checked="checked" @change="change">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit } from 'vue-property-decorator'

@Component
export default class MyCheckbox extends Vue {
    @Model('change', { type: Boolean}) public readonly checked!: boolean;

    @Emit()
    public change(event: Event) {
        return event.target
    }
}
</script>

<style scoped>

</style>
