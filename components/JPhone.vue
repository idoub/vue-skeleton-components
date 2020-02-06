<script>
import JText from './JText';
import PhoneFormatter from '../util/formatters/PhoneFormatter';
import PhoneValidator from '../util/validators/PhoneValidator';

export default {
  name: 'JPhone',
  extends: JText,
  data() {
    return {
      cssClass: 'phone-input',
      localFormatter: PhoneFormatter,
      localValidator: PhoneValidator,
      type: 'tel',
    };
  },
}
</script>
