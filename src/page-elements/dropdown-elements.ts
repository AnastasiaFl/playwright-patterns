import { Page, Locator } from "@playwright/test";

interface PageComponent {
  getText(): Promise<string[]>;
}

class PageTitleComponent implements PageComponent {
  private title: Locator;

  constructor(page: Page) {
    this.title = page.locator('h1[data-rg-n="HeadingText"]');
  }

  async getText(): Promise<string[]> {
    const text = await this.title.textContent();
    return text ? [text.trim()] : [];
  }
}

class DropdownItemComponent implements PageComponent {
  private items: Locator;

  constructor(private root: Locator) {
    this.items = root.locator('[data-rg-n="BodyText"] p');
  }

  async getText(): Promise<string[]> {
    const elements = await this.items.all();
    const texts = await Promise.all(elements.map(async el => {
      const text = await el.textContent();
      return text?.trim() ?? '';
    }));
    return texts.filter(Boolean);
  }
}
export class TextSection implements PageComponent {
  private components: PageComponent[] = [];

  constructor(page: Page) {
    const dropdown = page.locator('.itemExpander_module_expandableSection__052d7f6a');
    this.components.push(new PageTitleComponent(page));
    this.components.push(new DropdownItemComponent(dropdown));
  }

  async getText(): Promise<string[]> {
    const allTexts = await Promise.all(this.components.map(c => c.getText()));
    return allTexts.flat();
  }
}