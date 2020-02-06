<!-- This component is meant to be extended, not use as a component -->
<script>
export default {
  name: 'BaseInput',
  props: {
    descriptor: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
