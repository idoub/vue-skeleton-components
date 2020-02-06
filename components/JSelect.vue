<script>
import BaseList from './BaseList';

export default {
  name: 'JSelect',
  extends: BaseList,
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <select
    class="dropdown"
    :name="group"
    @change="$emit('input', $event.target.value)"
  >
    <option
      class="dropdown-option"
      :key="key"
      :value="key"
      v-for="(descriptor, key) in options"
      :selected="value===key"
    >{{ descriptor }}</option>
  </select>
</template>
