<script>
export default {
  name: 'JButton',
}
</script>

<template>
  <input type="button" @click="$emit('click')" />
</template>
