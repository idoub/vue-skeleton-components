<script>
import BaseInput from './BaseInput';

export default {
  extends: BaseInput,
  inheritAttrs: false,
  name: 'JRadio',
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
      type="radio"
      :value="value"
      @change="change"
      @focus="focus"
      class="input-radio"
      v-bind="$attrs"
    />
  </label>
</template>
