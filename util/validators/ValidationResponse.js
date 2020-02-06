export default class ValidationResponse {
  constructor(passed, message) {
    this.passed = passed;
    if(passed) this.successMessage = message;
    else this.errorMessage = message;
  }
}
