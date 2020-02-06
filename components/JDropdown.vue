<script>
export default {
  name: 'JDropdown',
  inheritAttrs: false,
  props: {
    group: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <select
    :name="group"
    @change="$emit('input', $event.target.value)"
    v-bind="$attrs"
  >
    <option
      :key="key"
      :value="key"
      v-for="(descriptor, key) in options"
    >{{ descriptor }}</option>
  </select>
</template>
