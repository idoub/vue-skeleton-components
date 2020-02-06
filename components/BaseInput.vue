<!-- This component is meant to be extended, not use as a component -->
<script>
export default {
  data() {
    return {
      localFormatter: this.formatter,
      localState: this.state || 'initial',
      localValidator: this.validator
    }
  },
  inheritAttrs: false,
  props: {
    descriptor: {
      type: String,
      default: '',
    },
    formatter: {
      type: Function,
      default: (val) => {
        return val;
      },
    },
    state: {
      type: String,
      default: 'initial',
    },
    validator: {
      type: Function,
      default: () => {
        return {
          passed: true,
          errorMessage: '',
          successMessage: '',
        }
      },
    },
    value: {
      type: String,
      default: '',
    }
  },
  methods: {
    change(evt) {
      const {target:{value}} = evt;
      // Run validation
      const validation = this.localValidator(value);
      // Failed/passed validation, change state
      if(!validation.passed) this.stateChange('error', validation.errorMessage);
      else this.stateChange('success', validation.successMessage);
      // Emit event to tell parent that there's a new value
      this.$emit('input', value);
    },
    focus(evt) {
      // Can change state
      this.stateChange('focus');
      // Emit event to tell parent that the focus is here
      this.$emit('focus', evt);
    },
    input(evt) {
      const {target:{value}} = evt;
      // Update state to remove any error/success state
      this.stateChange('initial');
      // Run formatting
      const formattedValue = evt.target.value = this.localFormatter(value);
      // Emit event to tell parent that user is typing
      this.$emit('input', formattedValue);
    },
    stateChange(state, messaging) {
      // Modify state
      this.localState = state;
      this.messaging = messaging;
      // Emit event to tell parent the current state
      this.$emit('state-change', {state, messaging});
    },
  },
}
</script>
