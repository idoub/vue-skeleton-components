<!-- This component is meant to be extended, not use as a component -->
<script>
import BaseInput from './BaseInput';
import ValidResp from '../util/validators/ValidationResponse';

export default {
  name: 'BaseTextInput',
  extends: BaseInput,
  props: {
    formatter: {
      type: Function,
      default: (val) => val,
    },
    state: {
      type: String,
      default: 'initial',
    },
    validator: {
      type: Function,
      default: () => new ValidResp(true, ''),
    },
  },
  data() {
    return {
      localFormatter: this.formatter,
      localState: this.state || 'initial',
      localValidator: this.validator,
      messaging: '',
    };
  },
  methods: {
    blur(evt) {
      // Run change event to ensure validation
      this.change(evt);
      const {target:{value}} = evt;
      // So let's check if there's a value and otherwise set it back to initial
      if(value === '') this.stateChange('initial');
      // Always bubble event
      this.$emit('blur', evt);
    },
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
