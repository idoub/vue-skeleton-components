<script>
import BaseInput from './BaseInput';

export default {
  name: 'JRadio',
  extends: BaseInput,
  inheritAttrs: false,
}
</script>

<template>
  <label class="radio-wrapper">
    <span class="radio-label">
      <slot name="label">
        <span>{{ descriptor }}</span>
      </slot>
    </span>
    <input
      type="radio"
      :value="value"
      @change="$emit('input', $event.target.value)"
      class="radio"
      v-bind="$attrs"
    />
  </label>
</template>
