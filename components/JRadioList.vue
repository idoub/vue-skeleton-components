<script>
import JRadio from './JRadio';

export default {
  name: 'JRadioList',
  components: {
    JRadio,
  },
  props: {
    group: {
      type: String,
      default: () => Math.random(),
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
  <div>
    <j-radio
      :descriptor="descriptor"
      :key="key"
      :value="key"
      @input="$emit('input', $event)"
      :name="group"
      v-for="(descriptor, key) in options"
    ></j-radio>
  </div>
</template>
