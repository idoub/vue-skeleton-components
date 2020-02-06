<script>
import BaseInput from './BaseInput';

export default {
  extends: BaseInput,
  inheritAttrs: false,
  name: 'JText',
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
      :type="$attrs.type || 'text'"
      :value="value"
      @input="input"
      @change="change"
      @focus="focus"
      class="input-text"
      v-bind="$attrs"
    />
    <span v-if="this.localState === 'error' || this.localState === 'success'" >
      <slot name="messaging">
        <span>{{ this.messaging }}</span>
      </slot>
    </span>
  </label>
</template>
