import { Page, Locator, expect } from "@playwright/test";
import { FormData } from "../types";

export class FormPage {
  readonly titleInput: Locator;
  readonly firstNameInput: Locator;
  readonly middleInitialInput: Locator;
  readonly lastNameInput: Locator;
  readonly fullNameInput: Locator;
  readonly companyInput: Locator;
  readonly positionInput: Locator;
  readonly addressLine1Input: Locator;
  readonly addressLine2Input: Locator;
  readonly cityInput: Locator;
  readonly stateProvinceInput: Locator;
  readonly countryInput: Locator;
  readonly zipInput: Locator;
  readonly homePhoneInput: Locator;
  readonly workPhoneInput: Locator;
  readonly faxInput: Locator;
  readonly cellPhoneInput: Locator;
  readonly emailInput: Locator;
  readonly websiteInput: Locator;
  readonly userIdInput: Locator;
  readonly passwordInput: Locator;
  readonly creditCardTypeSelect: Locator;
  readonly creditCardNumberInput: Locator;
  readonly cardVerificationCodeInput: Locator;
  readonly cardExpirationDateInput: Locator;
  readonly cardExpirationYearInput: Locator;
  readonly cardUserNameInput: Locator;
  readonly cardIssuingBankInput: Locator;
  readonly cardCustomerServicePhoneInput: Locator;
  readonly sexInput: Locator;
  readonly socialSecurityNumberInput: Locator;
  readonly driversLicenseNumberInput: Locator;
  readonly dayOfBirth: Locator;
  readonly monthOfBirthInput: Locator;
  readonly yearOfBirthInput: Locator;
  readonly ageInput: Locator;
  readonly birthPlaceInput: Locator;
  readonly incomeInput: Locator;
  readonly customMessageInput: Locator;
  readonly commentsInput: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.titleInput = page.locator('input[name="01___title"]');
    this.firstNameInput = page.locator('input[name="02frstname"]');
    this.middleInitialInput = page.locator('input[name="03middle_i"]');
    this.lastNameInput = page.locator('input[name="04lastname"]');
    this.fullNameInput = page.locator('input[name="04fullname"]');
    this.companyInput = page.locator('input[name="05_company"]');
    this.positionInput = page.locator('input[name="06position"]');
    this.addressLine1Input = page.locator('input[name="10address1"]');
    this.addressLine2Input = page.locator('input[name="11address2"]');
    this.cityInput = page.locator('input[name="13adr_city"]');
    this.stateProvinceInput = page.locator('input[name="14adrstate"]');
    this.countryInput = page.locator('input[name="15_country"]');
    this.zipInput = page.locator('input[name="16addr_zip"]');
    this.homePhoneInput = page.locator('input[name="20homephon"]');
    this.workPhoneInput = page.locator('input[name="21workphon"]');
    this.faxInput = page.locator('input[name="22faxphone"]');
    this.cellPhoneInput = page.locator('input[name="23cellphon"]');
    this.emailInput = page.locator('input[name="24emailadr"]');
    this.websiteInput = page.locator('input[name="25web_site"]');
    this.userIdInput = page.locator('input[name="30_user_id"]');
    this.passwordInput = page.locator('input[name="31password"]');
    this.creditCardTypeSelect = page.locator('select[name="40cc__type"]');
    this.creditCardNumberInput = page.locator('input[name="41ccnumber"]');
    this.cardVerificationCodeInput = page.locator('input[name="43cvc"]');
    this.cardExpirationDateInput = page.locator('select[name="42ccexp_mm"]');
    this.cardExpirationYearInput = page.locator('select[name="43ccexp_yy"]');
    this.cardUserNameInput = page.locator('input[name="44cc_uname"]');
    this.cardIssuingBankInput = page.locator('input[name="45ccissuer"]');
    this.cardCustomerServicePhoneInput = page.locator(
      'input[name="46cccstsvc"]'
    );
    this.sexInput = page.locator('input[name="60pers_sex"]');
    this.socialSecurityNumberInput = page.locator('input[name="61pers_ssn"]');
    this.driversLicenseNumberInput = page.locator('input[name="62driv_lic"]');
    this.dayOfBirth = page
      .locator('div:has-text("Date of Birth")')
      .locator("xpath=following::select")
      .nth(1);
    this.monthOfBirthInput = page
      .locator('div:has-text("Date of Birth")')
      .locator("xpath=following::select")
      .nth(0);
    this.yearOfBirthInput = page
      .locator('div:has-text("Date of Birth")')
      .locator("xpath=following::select")
      .nth(2);
    this.ageInput = page.locator('input[name="66pers_age"]');
    this.birthPlaceInput = page.locator('input[name="67birth_pl"]');
    this.incomeInput = page.locator('input[name="68__income"]');
    this.customMessageInput = page.locator('input[name="71__custom"]');
    this.commentsInput = page.locator('input[name="72__commnt"]');
  }

  async gotoPage() {
    await this.page.goto("https://www.roboform.com/filling-test-all-fields");
  }

  async fillForm(data: FormData) {
    if (data.title) await this.titleInput.fill(data.title);

    if (data.firstName) await this.firstNameInput.fill(data.firstName);
    if (data.middleInitial)
      await this.middleInitialInput.fill(data.middleInitial);
    if (data.lastName) await this.lastNameInput.fill(data.lastName);
    if (data.fullName) await this.fullNameInput.fill(data.fullName);
    if (data.company) await this.companyInput.fill(data.company);
    if (data.position) await this.positionInput.fill(data.position);
    if (data.addressLine1) await this.addressLine1Input.fill(data.addressLine1);
    if (data.addressLine2) await this.addressLine2Input.fill(data.addressLine2);
    if (data.city) await this.cityInput.fill(data.city);
    if (data.stateProvince)
      await this.stateProvinceInput.fill(data.stateProvince);
    if (data.country) await this.countryInput.fill(data.country);
    if (data.zip) await this.zipInput.fill(data.zip);
    if (data.homePhone) await this.homePhoneInput.fill(data.homePhone);
    if (data.workPhone) await this.workPhoneInput.fill(data.workPhone);
    if (data.fax) await this.faxInput.fill(data.fax);
    if (data.cellPhone) await this.cellPhoneInput.fill(data.cellPhone);
    if (data.email) await this.emailInput.fill(data.email);
    if (data.website) await this.websiteInput.fill(data.website);
    if (data.userId) await this.userIdInput.fill(data.userId);
    if (data.password) await this.passwordInput.fill(data.password);
    if (data.creditCardType)
      await this.creditCardTypeSelect.selectOption(data.creditCardType);
    if (data.creditCardNumber)
      await this.creditCardNumberInput.fill(data.creditCardNumber);
    if (data.cardVerificationCode)
      await this.cardVerificationCodeInput.fill(data.cardVerificationCode);
    if (data.cardExpirationDate)
      await this.cardExpirationDateInput.selectOption(data.cardExpirationDate);
    if (data.cardExpirationYear)
      await this.cardExpirationYearInput.selectOption(data.cardExpirationYear);
    if (data.cardUserName) await this.cardUserNameInput.fill(data.cardUserName);
    if (data.cardIssuingBank)
      await this.cardIssuingBankInput.fill(data.cardIssuingBank);
    if (data.cardCustomerServicePhone)
      await this.cardCustomerServicePhoneInput.fill(
        data.cardCustomerServicePhone
      );
    if (data.sex) await this.sexInput.fill(data.sex);
    if (data.socialSecurityNumber)
      await this.socialSecurityNumberInput.fill(data.socialSecurityNumber);
    if (data.driversLicenseNumber)
      await this.driversLicenseNumberInput.fill(data.driversLicenseNumber);
    if (data.dayOfBirth) await this.dayOfBirth.selectOption(data.dayOfBirth);
    if (data.monthOfBirth)
      await this.monthOfBirthInput.selectOption(data.monthOfBirth);
    if (data.yearOfBirth)
      await this.yearOfBirthInput.selectOption(data.yearOfBirth);
    if (data.age) await this.ageInput.fill(data.age);
    if (data.birthPlace) await this.birthPlaceInput.fill(data.birthPlace);
    if (data.income) await this.incomeInput.fill(data.income);
    if (data.customMessage)
      await this.customMessageInput.fill(data.customMessage);
    if (data.comments) await this.commentsInput.fill(data.comments);
  }

  async checkFormHasText(data: FormData) {
    if (data.title) await expect(this.titleInput).toHaveValue(data?.title);
    if (data.firstName)
      await expect(this.firstNameInput).toHaveValue(data.firstName);
    if (data.middleInitial)
      await expect(this.middleInitialInput).toHaveValue(data.middleInitial);
    if (data.lastName)
      await expect(this.lastNameInput).toHaveValue(data.lastName);
    if (data.fullName)
      await expect(this.fullNameInput).toHaveValue(data.fullName);
    if (data.company) await expect(this.companyInput).toHaveValue(data.company);
    if (data.position)
      await expect(this.positionInput).toHaveValue(data.position);
    if (data.addressLine1)
      await expect(this.addressLine1Input).toHaveValue(data.addressLine1);
    if (data.addressLine2)
      await expect(this.addressLine2Input).toHaveValue(data.addressLine2);
    if (data.city) await expect(this.cityInput).toHaveValue(data.city);
    if (data.stateProvince)
      await expect(this.stateProvinceInput).toHaveValue(data.stateProvince);
    if (data.country) await expect(this.countryInput).toHaveValue(data.country);
    if (data.zip) await expect(this.zipInput).toHaveValue(data.zip);
    if (data.homePhone)
      await expect(this.homePhoneInput).toHaveValue(data.homePhone);
    if (data.workPhone)
      await expect(this.workPhoneInput).toHaveValue(data.workPhone);
    if (data.fax) await expect(this.faxInput).toHaveValue(data.fax);
    if (data.cellPhone)
      await expect(this.cellPhoneInput).toHaveValue(data.cellPhone);
    if (data.email) await expect(this.emailInput).toHaveValue(data.email);
    if (data.website) await expect(this.websiteInput).toHaveValue(data.website);
    if (data.userId) await expect(this.userIdInput).toHaveValue(data.userId);
    if (data.password)
      await expect(this.passwordInput).toHaveValue(data.password);
    if (data.creditCardType)
      await expect(this.creditCardTypeSelect).toContainText(
        data.creditCardType
      );
    if (data.creditCardNumber)
      await expect(this.creditCardNumberInput).toHaveValue(
        data.creditCardNumber
      );
    if (data.cardVerificationCode)
      await expect(this.cardVerificationCodeInput).toHaveValue(
        data.cardVerificationCode
      );
    if (data.cardExpirationDate)
      await expect(this.cardExpirationDateInput).toHaveValue(
        data.cardExpirationDate
      );
    if (data.cardExpirationYear)
      await expect(this.cardExpirationYearInput).toHaveValue(
        data.cardExpirationYear
      );
    if (data.cardUserName)
      await expect(this.cardUserNameInput).toHaveValue(data.cardUserName);
    if (data.cardIssuingBank)
      await expect(this.cardIssuingBankInput).toHaveValue(data.cardIssuingBank);
    if (data.cardCustomerServicePhone)
      await expect(this.cardCustomerServicePhoneInput).toHaveValue(
        data.cardCustomerServicePhone
      );
    if (data.sex) await expect(this.sexInput).toHaveValue(data.sex);
    if (data.socialSecurityNumber)
      await expect(this.socialSecurityNumberInput).toHaveValue(
        data.socialSecurityNumber
      );
    if (data.driversLicenseNumber)
      await expect(this.driversLicenseNumberInput).toHaveValue(
        data.driversLicenseNumber
      );
    if (data.dayOfBirth)
      await expect(this.dayOfBirth).toHaveValue(data.dayOfBirth);
    if (data.monthOfBirth)
      await expect(this.monthOfBirthInput).toHaveValue(data.monthOfBirth);
    if (data.yearOfBirth)
      await expect(this.yearOfBirthInput).toHaveValue(data.yearOfBirth);
    if (data.age) await expect(this.ageInput).toHaveValue(data.age);
    if (data.birthPlace)
      await expect(this.birthPlaceInput).toHaveValue(data.birthPlace);
    if (data.income) await expect(this.incomeInput).toHaveValue(data.income);
    if (data.customMessage)
      await expect(this.customMessageInput).toHaveValue(data.customMessage);
    if (data.comments)
      await expect(this.commentsInput).toHaveValue(data.comments);
  }

  async fillAndCheckForm(data: FormData) {
    await this.fillForm(data);
    await this.checkFormHasText(data);
  }
}
