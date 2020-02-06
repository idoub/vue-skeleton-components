<script>
import BaseList from './BaseList';
import JRadio from './JRadio';

export default {
  name: 'JRadioList',
  extends: BaseList,
  components: {
    JRadio,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div class="radio-list">
    <j-radio
      :descriptor="descriptor"
      :key="key"
      :value="key"
      @input="$emit('input', $event)"
      :name="group"
      v-for="(descriptor, key) in options"
      :checked="value===key"
    ></j-radio>
  </div>
</template>
