const { I } = inject();

module.exports = {

  // insert your locators and methods here

locators: {
  searchButton: "input#gNO89b"
},

validate() {

  I.seeInCurrentUrl("google");
  I.seeElement(this.locators.searchButton);
}

}