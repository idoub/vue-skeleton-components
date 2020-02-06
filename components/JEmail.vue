<script>
import JText from './JText';
import EmailValidator from '../util/validators/EmailValidator';

export default {
  name: 'JEmail',
  extends: JText,
  data() {
    return {
      localValidator: EmailValidator,
      cssClass: 'email-input',
      type: 'email',
    };
  },
}
</script>
