<script>
import BaseInput from './base/BaseInput';

export default {
  name: 'JCheckbox',
  extends: BaseInput,
  inheritAttrs: false,
}
</script>

<template>
  <label class="checkbox-wrapper">
    <span class="checkbox-label">
      <slot name="label">
        <span>{{ descriptor }}</span>
      </slot>
    </span>
    <input
      type="checkbox"
      :value="value"
      @change="$emit('input', $event.target.value)"
      class="checkbox"
      v-bind="$attrs"
    />
  </label>
</template>
