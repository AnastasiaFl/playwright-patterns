import { test } from "@playwright/test";
import { FormPage } from "../src/page-elements/form-page";
import { UserFactory } from "../src/helpers/user-factory";
import { UserType } from "../src/data/constants";

const userFactory = new UserFactory();
const data = userFactory.createUser(UserType.ADMIN);

test("Fill form using factory pattern", async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  await formPage.fillForm(data);
  await formPage.checkFormHasText(data);
});
