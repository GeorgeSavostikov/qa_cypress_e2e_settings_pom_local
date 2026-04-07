import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  url = '/settings';

  get userNameField() {
    return cy.getByDataCy('username-settings');
  }

  get bioField() {
    return cy.getByDataCy('bio-settings');
  }

  get emailField() {
    return cy.getByDataCy('email-settings');
  }

  get passwordField() {
    return cy.getByDataCy('password-settings');
  }

  get updateSettingsBtn() {
    return cy.getByDataCy('btn-settings');
  }

  get settingsPageLink() {
    return cy.getByDataCy('settings-page-link');
  }

  get settingsLogOutBtn() {
    return cy.getByDataCy('settings-log-out-btn');
  }

  typeUserName(username) {
    this.userNameField.type(username);
  }

  clearUserName() {
    this.userNameField.clear();
  }

  typeBio(bio) {
    this.bioField.type(bio);
  }

  typeEmail(email) {
    this.emailField.type(email);
  }

  typePassword(password) {
    this.passwordField.type(password);
  }

  clickUpdateSettingsBtn() {
    this.updateSettingsBtn.click();
  }

  openSettingsPage() {
    this.settingsPageLink.click();
  }

  clickLogOutSettingsBtn() {
    this.settingsLogOutBtn.click();
  }
}

export default SettingsPageObject;