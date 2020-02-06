<script>
import BaseList from './BaseList';
import JCheckbox from './JCheckbox';

export default {
  name: 'JCheckboxList',
  extends: BaseList,
  components: {
    JCheckbox,
  },
  props: {
    value: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      localVal: new Set(this.value),
    };
  },
  methods: {
    input(newVal) {
      this.localVal[this.localVal.has(newVal) ? 'delete' : 'add'](newVal);
      this.$emit('input', Array.from(this.localVal));
    },
  },
}
</script>

<template>
  <div class="checkbox-list">
    <j-checkbox
      :descriptor="descriptor"
      :key="key"
      :value="key"
      @input="input"
      :name="group"
      v-for="(descriptor, key) in options"
      :checked="value.includes(key)"
    ></j-checkbox>
  </div>
</template>
