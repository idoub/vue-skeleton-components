<script>
import JText from './JText';
import EmailValidator from '../util/validators/EmailValidator';

export default {
  data() {
    return {
      localValidator: EmailValidator
    }
  },
  extends: JText,
  inheritAttrs: false,
  name: 'JEmail',
}
</script>
