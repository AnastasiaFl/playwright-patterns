import { FormData } from "./form-type";

export class FormBuilder {
  private data: FormData = {};

  withTitle(title: string): FormBuilder {
    this.data.title = title;
    return this;
  }

  withFirstName(firstName: string): FormBuilder {
    this.data.firstName = firstName;
    return this;
  }
  withMiddleInitial(middleInitial: string): FormBuilder {
    this.data.middleInitial = middleInitial;
    return this;
  }
  withLastName(lastName: string): FormBuilder {
    this.data.lastName = lastName;
    return this;
  }
  withFullName(fullName: string): FormBuilder {
    this.data.fullName = fullName;
    return this;
  }
  withCompany(company: string): FormBuilder {
    this.data.company = company;
    return this;
  }
  withPosition(position: string): FormBuilder {
    this.data.position = position;
    return this;
  }
  withAddressLine1(addressLine1: string): FormBuilder {
    this.data.addressLine1 = addressLine1;
    return this;
  }
  withAddressLine2(addressLine2: string): FormBuilder {
    this.data.addressLine2 = addressLine2;
    return this;
  }
  withCity(city: string): FormBuilder {
    this.data.city = city;
    return this;
  }
  withStateProvince(stateProvince: string): FormBuilder {
    this.data.stateProvince = stateProvince;
    return this;
  }
  withCountry(country: string): FormBuilder {
    this.data.country = country;
    return this;
  }
  withZip(zip: string): FormBuilder {
    this.data.zip = zip;
    return this;
  }
  withHomePhone(homePhone: string): FormBuilder {
    this.data.homePhone = homePhone;
    return this;
  }
  withWorkPhone(workPhone: string): FormBuilder {
    this.data.workPhone = workPhone;
    return this;
  }
  withFax(fax: string): FormBuilder {
    this.data.fax = fax;
    return this;
  }
  withCellPhone(cellPhone: string): FormBuilder {
    this.data.cellPhone = cellPhone;
    return this;
  }
  withEmail(email: string): FormBuilder {
    this.data.email = email;
    return this;
  }
  withWebsite(website: string): FormBuilder {
    this.data.website = website;
    return this;
  }
  withUserId(userId: string): FormBuilder {
    this.data.userId = userId;
    return this;
  }
  withPassword(password: string): FormBuilder {
    this.data.password = password;
    return this;
  }
  withCreditCardType(creditCardType: string): FormBuilder {
    this.data.creditCardType = creditCardType;
    return this;
  }
  withCreditCardNumber(creditCardNumber: string): FormBuilder {
    this.data.creditCardNumber = creditCardNumber;
    return this;
  }
  withCardVerificationCode(cardVerificationCode: string): FormBuilder {
    this.data.cardVerificationCode = cardVerificationCode;
    return this;
  }
  withCardExpirationDate(cardExpirationDate: string): FormBuilder {
    this.data.cardExpirationDate = cardExpirationDate;
    return this;
  }
  withCardExpirationYear(cardExpirationYear: string): FormBuilder { 
    this.data.cardExpirationYear = cardExpirationYear;
    return this;
  }
  withCardUserName(cardUserName: string): FormBuilder {
    this.data.cardUserName = cardUserName;
    return this;
  }
  withCardIssuingBank(cardIssuingBank: string): FormBuilder {
    this.data.cardIssuingBank = cardIssuingBank;
    return this;
  }
  withCardCustomerServicePhone(cardCustomerServicePhone: string): FormBuilder {
    this.data.cardCustomerServicePhone = cardCustomerServicePhone;
    return this;
  }
  withSex(sex: string): FormBuilder {
    this.data.sex = sex;
    return this;
  }
  withSocialSecurityNumber(socialSecurityNumber: string): FormBuilder {
    this.data.socialSecurityNumber = socialSecurityNumber;
    return this;
  }
  withDriversLicenseNumber(driversLicenseNumber: string): FormBuilder {
    this.data.driversLicenseNumber = driversLicenseNumber;
    return this;
  }
  withDayOfBirth(dayOfBirth: string): FormBuilder {
    this.data.dayOfBirth = dayOfBirth;
    return this;
  }
  withMonthOfBirth(monthOfBirth: string): FormBuilder {
    this.data.monthOfBirth = monthOfBirth;
    return this;
  }
  withYearOfBirth(yearOfBirth: string): FormBuilder {
    this.data.yearOfBirth = yearOfBirth;
    return this;
  }
  withAge(age: string): FormBuilder {
    this.data.age = age;
    return this;
  }
  withBirthPlace(birthPlace: string): FormBuilder {
    this.data.birthPlace = birthPlace;
    return this;
  }
  withIncome(income: string): FormBuilder {
    this.data.income = income;
    return this;
  }
  withCustomMessage(customMessage: string): FormBuilder {
    this.data.customMessage = customMessage;
    return this;
  }
  withComments(comments: string): FormBuilder {
    this.data.comments = comments;
    return this;
  }

  build(): FormData {
    return this.data;
  }
}
