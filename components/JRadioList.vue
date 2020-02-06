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
      type: Array,
      default: () => ([]),
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
      :descriptor="option.descriptor"
      :key="option.key"
      :value="option.key"
      @input="$emit('input', $event)"
      :name="group"
      v-for="(option) in options"
    ></j-radio>
  </div>
</template>
