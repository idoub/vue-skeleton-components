<script>
import BaseInput from './BaseInput';

export default {
  extends: BaseInput,
  inheritAttrs: false,
  name: 'JCheckbox',
}
</script>

<template>
  <label>
    <span>
      <slot name="label">
        <span>{{ descriptor }}</span>
      </slot>
    </span>
    <input
      type="checkbox"
      :value="value"
      @change="change"
      @focus="focus"
      class="input-checkbox"
      v-bind="$attrs"
    />
  </label>
</template>
