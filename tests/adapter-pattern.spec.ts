import { test } from "@playwright/test";
import { FormPage } from "../src/page-elements/form-page";
import { Adapter } from "../src/helpers/adapter";

const adapter = new Adapter();
const rawData = {
  title: "Test Title",
  fullName: "Marco Polo",
  company: "Explorers Inc.",
  position: "Explorer",
  address: "123 Ocean Ave, Suite 100, Venice, Italy, Italy, 30100",
  homePhone: "123-456-7890",
  workPhone: "098-765-4321",
  fax: "111-222-3333",
  cellPhone: "444-555-6666",
  email: "marcopolo123@marco.com",
  website: "www.marco-polo.com",
  userId: "marco123",
  password: "secretpassword",
  creditCardType: "Visa (Preferred)",
  creditCardNumber: "4111 1111 1111 1111",
  cardVerificationCode: "123",
  cardExpiration: "12, 2025",
  cardIssuingBank: "Bank of Venice",
  cardCustomerServicePhone: "800-555-0199",
  sex: "Male",
  socialSecurityNumber: "123-45-6789",
  driversLicenseNumber: "D1234567",
  dateOfBirth: "1-1-2000",
  age: "23",
  birthPlace: "Venice, Italy",
  income: "100000",
  customMessage: "Hello, World!",
  comments: "This is a test comment.",
};
const adaptedData = {
  ...rawData,
  ...adapter.adaptName(rawData.fullName),
  ...adapter.adaptAddress(rawData.address),
  ...adapter.adaptCardExpiration(rawData.cardExpiration),
  ...adapter.adaptDateOfBirth(rawData.dateOfBirth),
};

test("Fill form using builder pattern", async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  await formPage.fillForm(adaptedData);
  await formPage.checkFormHasText(adaptedData);
});
