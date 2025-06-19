import { test } from "@playwright/test";
import { baseGuestFormData } from "../src/data/baseGuestFormData";
import { FormPage } from "../src/page-elements/form-page";

test("Fill form using facade pattern", async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  // use fillAndCheckForm method to fill the form and check it
  // This method is a facade that simplifies the process of filling and checking the form
  await formPage.fillAndCheckForm(baseGuestFormData);
  await formPage.checkFormHasText(baseGuestFormData);
});
