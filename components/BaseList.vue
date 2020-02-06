<!-- This component is meant to be extended, not use as a component -->
<script>
export default {
  name: 'BaseList',
  props: {
    group: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
