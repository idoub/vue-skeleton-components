export default (val) => {
  if (/[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i.test(val)) {
    return {passed: true, successMessage: 'Valid Email'};
  } else {
    return {passed: false, errorMessage: 'Please enter a valid email'};
  }
};
