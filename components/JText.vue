<script>
import BaseTextInput from './base/BaseTextInput';

export default {
  name: 'JText',
  extends: BaseTextInput,
  inheritAttrs: false,
  data() {
    return {
      cssClass: 'text-input',
    };
  },
}
</script>

<template>
  <label :class="['text-input-wrapper', localState]">
    <span class="text-input-label">
      <slot name="label">
        <span>{{ descriptor }}</span>
      </slot>
    </span>
    <input
      :class="cssClass"
      :type="$attrs.type || 'text'"
      :value="value"
      @blur="blur"
      @change="change"
      @focus="focus"
      @input="input"
      v-bind="$attrs"
    />
    <span
      class="text-input-messaging"
      v-if="this.localState === 'error' || this.localState === 'success'"
    >
      <slot name="messaging">
        <span>{{ this.messaging }}</span>
      </slot>
    </span>
  </label>
</template>
