import PageObject from '../PageObject';

class SignInPageObject extends PageObject {
  url = '/user/login';

  get emailField() {
    return cy.getByDataCy('email-sign-in-up');
  }

  get passwordField() {
    return cy.getByDataCy('password-sign-in-up');
  }

  get signInBtn() {
    return cy.getByDataCy('sign-in-up-btn');
  }

  typeEmail(email) {
    this.emailField.type(email);
  }

  typePassword(password) {
    this.passwordField.type(password);
  }

  clickSignInBtn() {
    this.signInBtn.click();
  }
}

export default SignInPageObject;
