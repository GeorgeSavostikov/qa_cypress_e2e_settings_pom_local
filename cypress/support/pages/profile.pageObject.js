import PageObject from '../PageObject';

class ProfilePageObject extends PageObject {
  url = '';

  get profileHeader() {
    return cy.getByDataCy('profile-header');
  }

  get profileBio() {
    return cy.getByDataCy('profile-bio');
  }

  assertHeaderContainUsername(username) {
    this.profileHeader.should('contain', username);
  }

  assertBioContainCorrectData(bio) {
    this.profileBio.should('contain', bio);
  }
}

export default ProfilePageObject;