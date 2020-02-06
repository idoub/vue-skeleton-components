<script>
import JCheckbox from './JCheckbox';

export default {
  name: 'JCheckboxList',
  components: {
    JCheckbox,
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
    }
  }
}
</script>

<template>
  <div>
    <j-checkbox
      :descriptor="option.descriptor"
      :key="option.key"
      :value="option.key"
      @input="input"
      :name="group"
      v-for="(option) in options"
    ></j-checkbox>
  </div>
</template>
