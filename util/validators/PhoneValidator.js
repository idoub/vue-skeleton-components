import Resp from './ValidationResponse';

export default (val) => {
  if (val.length < 10) {
    return new Resp(false, 'Please enter a valid phone number');
  } else {
    return new Resp(true, '');
  }
};
