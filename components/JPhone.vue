<script>
import JText from './JText';
import PhoneFormatter from '../util/formatters/PhoneFormatter';

export default {
  data() {
    return {
      localFormatter: PhoneFormatter
    }
  },
  extends: JText,
  inheritAttrs: false,
  name: 'JPhone',
}
</script>
