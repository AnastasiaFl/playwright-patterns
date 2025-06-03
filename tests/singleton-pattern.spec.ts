import { test } from "@playwright/test";
import { DatabaseSingleton } from "../src/helpers/database-singleton";
import { FormPage } from "../src/page-elements/form-page";

const db = DatabaseSingleton.getInstance();

test("fill form using singleton pattern", async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();
  const data = db.getDatabase();
  await formPage.fillForm(data);
  await formPage.checkFormHasText(data);
});
