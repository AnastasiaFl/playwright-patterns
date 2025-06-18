import { test } from "@playwright/test";
import { DecoratorLoggingPage } from "../src/helpers/decorator-logging";
import { baseGuestFormData } from "../src/data/baseGuestFormData";

test("Fill form using decorator pattern", async ({ page }) => {
  const formPage = new DecoratorLoggingPage(page);
  await formPage.gotoPage();

  await formPage.fillFormWithLogging(baseGuestFormData);
  await formPage.checkFormHasText(baseGuestFormData);
});
