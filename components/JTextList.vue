<script>
import BaseList from './base/BaseList';
import JText from './JText';

export default {
  name: 'JTextList',
  extends: BaseList,
  props: {
    type: {
      type: Object,
      default: () => (JText),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      localVal: this.value,
    };
  },
  methods: {
    input(key, newVal) {
      this.localVal[key] = newVal;
      this.$emit('input', this.localVal);
    },
  },
}
</script>

<template>
  <div class="text-input-list">
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
