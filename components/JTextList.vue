<script>
import JText from './JText';

export default {
  name: 'JTextList',
  props: {
    options: {
      type: Array,
      default: () => ([]),
    },
    type: {
      type: Object,
      default: () => (JText),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    input(key, newValue) {
      this.value[key] = newValue;
      this.$emit('input', this.value);
    },
  },
  computed: {
    localValue() {
      return this.value;
    }
  }
}
</script>

<template>
  <div>
    <component
      :is="type"
      v-for="(option, index) in options"
      :key="index"
      :descriptor="option.descriptor"
      :value="localValue[option.key]"
      @input="(newVal) => input(option.key, newVal)"
    ></component>
  </div>
</template>
