import { test } from '@playwright/test';
import { FormPage } from '../src/page-elements/form-page';
import { FormBuilder } from '../src/helpers/form-builder';

test('fill form using builder pattern', async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  const formData = new FormBuilder()
    .withTitle('Test Title')
    .withFirstName('Marco')
    .withMiddleInitial('A')
    .withLastName('Polo')
    .withFullName('Marco Polo')
    .withCompany('Explorers Inc.')
    .withPosition('Explorer')
    .withAddressLine1('123 Ocean Ave')
    .withAddressLine2('Suite 100')
    .withCity('Venice')
    .withStateProvince('Italy')
    .withCountry('Italy')
    .withZip('30100')
    .withHomePhone('123-456-7890')
    .withWorkPhone('098-765-4321')
    .withFax('111-222-3333')
    .withCellPhone('444-555-6666')
    .withEmail('marcopolo123@marco.com')
    .withWebsite('www.marco-polo.com')
    .withUserId('marco123')
    .withPassword('secretpassword')
    .withCreditCardType('Visa (Preferred)')
    .withCreditCardNumber('4111 1111 1111 1111')
    .withCardVerificationCode('123')
    .withCardExpirationDate('12')
    .withCardExpirationYear('2025')
    .withCardUserName('Marco Polo')
    .withCardIssuingBank('Bank of Venice')
    .withCardCustomerServicePhone('800-555-0199')
    .withSex('Male')
    .withSocialSecurityNumber('123-45-6789')
    .withDriversLicenseNumber('D1234567')
    .withDayOfBirth('1')
    .withMonthOfBirth('1')
    .withYearOfBirth('2000')
    .withAge('23')
    .withBirthPlace('Venice, Italy')
    .withIncome('100000')
    .withCustomMessage('Hello, World!')
    .withComments('This is a test comment.')
    .build();

  await formPage.fillForm(formData);
  await formPage.checkFormHasText(formData);
});