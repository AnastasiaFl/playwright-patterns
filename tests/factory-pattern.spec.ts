import { test } from '@playwright/test';
import { FormPage } from '../src/page-elements/form-page';
import { UserFactory } from '../src/helpers/user-factory';

const userFactory = new UserFactory()
const data = userFactory.createUser('admin');

test('fill form using factory pattern', async ({ page }) => {
  const formPage = new FormPage(page);
  await formPage.gotoPage();

  await formPage.fillForm(data);
  await formPage.checkFormHasText(data);
});