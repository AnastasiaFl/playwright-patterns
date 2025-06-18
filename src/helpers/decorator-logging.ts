import { FormPage } from "../page-elements/form-page";
import { FormData } from "../types";

export class DecoratorLoggingPage extends FormPage {
  async fillFormWithLogging(data: FormData) {
    if (data.title) {
      console.log('Filling title:', data.title);
      await this.titleInput.fill(data.title);
    }

    if (data.firstName) {
      console.log('Filling firstName:', data.firstName);
      await this.firstNameInput.fill(data.firstName);
    }
    if (data.middleInitial) {
      console.log('Filling middleInitial:', data.middleInitial);
      await this.middleInitialInput.fill(data.middleInitial);
    }
    if (data.lastName) {
      console.log('Filling lastName:', data.lastName);
      await this.lastNameInput.fill(data.lastName);
    }
    if (data.fullName) {
      console.log('Filling fullName:', data.fullName);
      await this.fullNameInput.fill(data.fullName);
    }
    if (data.company) {
      console.log('Filling company:', data.company);
      await this.companyInput.fill(data.company);
    }
    if (data.position) {
      console.log('Filling position:', data.position);
      await this.positionInput.fill(data.position);
    }
    if (data.addressLine1) {
      console.log('Filling addressLine1:', data.addressLine1);
      await this.addressLine1Input.fill(data.addressLine1);
    }
    if (data.addressLine2) {
      console.log('Filling addressLine2:', data.addressLine2);
      await this.addressLine2Input.fill(data.addressLine2);
    }
    if (data.city) {
      console.log('Filling city:', data.city);
      await this.cityInput.fill(data.city);
    }
    if (data.stateProvince) {
      console.log('Filling stateProvince:', data.stateProvince);
      await this.stateProvinceInput.fill(data.stateProvince);
    }
    if (data.country) {
      console.log('Filling country:', data.country);
      await this.countryInput.fill(data.country);
    }
    if (data.zip) {
      console.log('Filling zip:', data.zip);
      await this.zipInput.fill(data.zip);
    }
    if (data.homePhone) {
      console.log('Filling homePhone:', data.homePhone);
      await this.homePhoneInput.fill(data.homePhone);
    }
    if (data.workPhone) {
      console.log('Filling workPhone:', data.workPhone);
      await this.workPhoneInput.fill(data.workPhone);
    }
    if (data.fax) {
      console.log('Filling fax:', data.fax);
      await this.faxInput.fill(data.fax);
    }
    if (data.cellPhone) {
      console.log('Filling cellPhone:', data.cellPhone);
      await this.cellPhoneInput.fill(data.cellPhone);
    }
    if (data.email) {
      console.log('Filling email:', data.email);
      await this.emailInput.fill(data.email);
    }
    if (data.website) {
      console.log('Filling website:', data.website);
      await this.websiteInput.fill(data.website);
    }
    if (data.userId) {
      console.log('Filling userId:', data.userId);
      await this.userIdInput.fill(data.userId);
    }
    if (data.password) {
      console.log('Filling password:', data.password);
      await this.passwordInput.fill(data.password);
    }
    if (data.creditCardType) {
      console.log('Selecting creditCardType:', data.creditCardType);
      await this.creditCardTypeSelect.selectOption(data.creditCardType);
    }
    if (data.creditCardNumber) {
      console.log('Filling creditCardNumber:', data.creditCardNumber);
      await this.creditCardNumberInput.fill(data.creditCardNumber);
    }
    if (data.cardVerificationCode) {
      console.log('Filling cardVerificationCode:', data.cardVerificationCode);
      await this.cardVerificationCodeInput.fill(data.cardVerificationCode);
    }
    if (data.cardExpirationDate) {
      console.log('Selecting cardExpirationDate:', data.cardExpirationDate);
      await this.cardExpirationDateInput.selectOption(data.cardExpirationDate);
    }
    if (data.cardExpirationYear) {
      console.log('Selecting cardExpirationYear:', data.cardExpirationYear);
      await this.cardExpirationYearInput.selectOption(data.cardExpirationYear);
    }
    if (data.cardUserName) {
      console.log('Filling cardUserName:', data.cardUserName);
      await this.cardUserNameInput.fill(data.cardUserName);
    }
    if (data.cardIssuingBank) {
      console.log('Filling cardIssuingBank:', data.cardIssuingBank);
      await this.cardIssuingBankInput.fill(data.cardIssuingBank);
    }
    if (data.cardCustomerServicePhone) {
      console.log('Filling cardCustomerServicePhone:', data.cardCustomerServicePhone);
      await this.cardCustomerServicePhoneInput.fill(data.cardCustomerServicePhone);
    }
    if (data.sex) {
      console.log('Filling sex:', data.sex);
      await this.sexInput.fill(data.sex);
    }
    if (data.socialSecurityNumber) {
      console.log('Filling socialSecurityNumber:', data.socialSecurityNumber);
      await this.socialSecurityNumberInput.fill(data.socialSecurityNumber);
    }
    if (data.driversLicenseNumber) {
      console.log('Filling driversLicenseNumber:', data.driversLicenseNumber);
      await this.driversLicenseNumberInput.fill(data.driversLicenseNumber);
    }
    if (data.dayOfBirth) {
      console.log('Selecting dayOfBirth:', data.dayOfBirth);
      await this.dayOfBirth.selectOption(data.dayOfBirth);
    }
    if (data.monthOfBirth) {
      console.log('Selecting monthOfBirth:', data.monthOfBirth);
      await this.monthOfBirthInput.selectOption(data.monthOfBirth);
    }
    if (data.yearOfBirth) {
      console.log('Selecting yearOfBirth:', data.yearOfBirth);
      await this.yearOfBirthInput.selectOption(data.yearOfBirth);
    }
    if (data.age) {
      console.log('Filling age:', data.age);
      await this.ageInput.fill(data.age);
    }
    if (data.birthPlace) {
      console.log('Filling birthPlace:', data.birthPlace);
      await this.birthPlaceInput.fill(data.birthPlace);
    }
    if (data.income) {
      console.log('Filling income:', data.income);
      await this.incomeInput.fill(data.income);
    }
    if (data.customMessage) {
      console.log('Filling customMessage:', data.customMessage);
      await this.customMessageInput.fill(data.customMessage);
    }
    if (data.comments) {
      console.log('Filling comments:', data.comments);
      await this.commentsInput.fill(data.comments);
    }
  }
}
