import { test } from "@playwright/test";
import { cloneForm } from "../src/helpers/prototype-cloning";
import { FormPage } from "../src/page-elements/form-page";
import { baseGuestFormData } from "../src/data/baseGuestFormData";

test("Fill form using prototype pattern with base guest", async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  await formPage.fillForm(baseGuestFormData);
  await formPage.checkFormHasText(baseGuestFormData);
});

test("Fill form using prototype pattern with guest from LA", async ({
  page,
}) => {
  const CAGuestFormData = cloneForm(baseGuestFormData);
  CAGuestFormData.firstName = "John";
  CAGuestFormData.middleInitial = "D";
  CAGuestFormData.lastName = "Doe";
  CAGuestFormData.stateProvince = "California";
  CAGuestFormData.customMessage = "Guest users from California";
  CAGuestFormData.city = "Los Angeles";
  CAGuestFormData.addressLine1 = "123 Sunset Blvd";
  CAGuestFormData.addressLine2 = "Apt 456";
  CAGuestFormData.zip = "90001";
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  await formPage.fillForm(CAGuestFormData);
  await formPage.checkFormHasText(CAGuestFormData);
});

test("Fill form using prototype pattern with guest from NY", async ({
  page,
}) => {
  const NYGuestFormData = cloneForm(baseGuestFormData);
  NYGuestFormData.firstName = "Jane";
  NYGuestFormData.lastName = "Smith";
  NYGuestFormData.stateProvince = "New York";
  NYGuestFormData.customMessage = "Guest users from New York";
  NYGuestFormData.city = "New York City";
  NYGuestFormData.addressLine1 = "456 Broadway St";
  NYGuestFormData.addressLine2 = "Suite 789";
  NYGuestFormData.zip = "10001";
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  await formPage.fillForm(NYGuestFormData);
  await formPage.checkFormHasText(NYGuestFormData);
});
