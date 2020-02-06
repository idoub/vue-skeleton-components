<script>
import JText from './JText';

export default {
  name: 'JTextList',
  props: {
    options: {
      type: Object,
      default: () => ({}),
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
    input(key, newVal) {
      this.localVal[key] = newVal;
      this.$emit('input', this.localVal);
    },
  },
  data() {
    return {
      localVal: this.value,
    };
  },
}
</script>

<template>
  <div>
    <component
      :descriptor="descriptor"
      :is="type"
      :key="key"
      :value="localVal[key]"
      @input="(newVal) => input(key, newVal)"
      v-for="(descriptor, key) in options"
    ></component>
  </div>
</template>
