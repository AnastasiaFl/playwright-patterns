## How to Run Tests

To run the tests in this project, follow these steps:

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run the tests:
    ```bash
    npx playwright test
    ```

3. For a specific test file:
    ```bash
    npx playwright test path/to/test-file.spec.ts
    ```

4. To run tests in headed mode:
    ```bash
    npx playwright test --headed
    ```

5. View the test report:
    ```bash
    npx playwright show-report
    ```

For more options, refer to the [Playwright CLI documentation](https://playwright.dev/docs/cli).