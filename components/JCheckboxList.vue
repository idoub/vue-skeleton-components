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
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
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
      :descriptor="descriptor"
      :key="key"
      :value="key"
      @input="input"
      :name="group"
      v-for="(descriptor, key) in options"
    ></j-checkbox>
  </div>
</template>
