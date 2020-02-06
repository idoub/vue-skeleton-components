import Resp from './ValidationResponse';

export default (val) => {
  if (/[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i.test(val)) {
    return new Resp(true, 'Valid Email');
  } else {
    return new Resp(false, 'Please enter a valid email');
  }
};
