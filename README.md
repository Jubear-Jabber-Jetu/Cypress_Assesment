Cypress Automation Framework for Web Application Testing
Overview
This is a test automation framework built using Cypress to perform UI testing on a sample e-commerce website. The framework includes two primary tests:

Form Submission Validation: Validates the functionality of the "Contact" form, ensuring proper error handling and successful form submission.
Add to Cart and Update: Verifies the cart functionality, including adding a product to the cart, updating its quantity, and validating the updated price.
Framework Structure
The framework is structured to be modular and scalable, following best practices for test automation:

Directory Structure

/cypress
  /fixtures
    - empty-file.txt            # Sample empty file used for form attachment
  /integration
    /tests
      - ApplicationSubmission.js  # Test for form submission validation
      - PaymentStatus.cy.js      # Test for add-to-cart and update functionality
  /support
    - commands.js                # Custom commands
    - index.js                   # Support configuration file
/cypress.json                    # Cypress configuration file
/package.json                    # Node.js dependencies and scripts
cypress.json: Contains Cypress configuration settings such as base URL, viewport size, etc.
integration/tests/: Contains individual test specifications (ApplicationSubmission.js, PaymentStatus.cy.js).
support/commands.js: Holds custom commands used across tests (if any).
fixtures/empty-file.txt: The empty file used in form validation for attachment.
Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (Recommended version: 16+)
npm (Node Package Manager)
Installation Steps
Clone the repository:

git clone https://github.com/Jubear-Jabber-Jetu/Cypress_Assesment.git
cd Cypress_Assesment
Install dependencies:

npm install

How to Run the Tests
Running Tests in Cypress
Open Cypress Test Runner: You can open Cypress in interactive mode using the following command:

npx cypress open

This will launch the Cypress Test Runner UI, where you can select and run individual tests.

Run Tests in Headless Mode: If you prefer running tests in headless mode (without the UI), use this command:

npx cypress run

This will run all the tests and provide a detailed report in the terminal.

How the Tests Work
1. Form Submission Validation Test
Navigation: The test first navigates to the "Contact" form page.
Validation Check: It attempts to submit the form with blank fields and verifies that validation errors are displayed.
Data Entry: The test then fills in the form with valid data, including the name, email, subject, and message.
File Attachment: A sample empty text file is attached as part of the form submission.
Submission: Finally, it clicks the submit button and verifies the success message.
Code Overview:

cy.get('[data-test="nav-contact"]').click();  // Navigate to Contact form
cy.get('[data-test="contact-submit"]').click(); // Try to submit with blank fields
cy.get('[data-test="first-name-error"]').should('be.visible'); 



2. Add to Cart and Update Test
Product Selection: The test navigates to the product page and selects "Combination Pliers."
Add to Cart: It adds the selected product to the cart.
Update Quantity: The test modifies the quantity of the product to 3 and verifies if the price is updated accordingly.
Price Verification: It checks if the total price reflects the updated quantity.

Code Overview:


cy.get('[data-test="product-01JM1GP4KPMAV49JVZ095F53XR"] > .card-body > [data-test="product-name"]').click(); // Select product
cy.get('[data-test="add-to-cart"]').click();  // Add to cart
cy.get('[data-test="product-quantity"]').clear().type('3').type('{enter}');  // Update quantity
cy.get('[data-test="line-price"]').should('contain.text', '$42.45');  // Verify price
Design Decisions
Page Object Model (POM): This framework follows the Page Object Model design pattern, where selectors for different elements are encapsulated in individual page objects. This improves maintainability and scalability.
Data-Driven Testing: This framework is set up to easily extend and handle various data sets in the future, especially for API tests.
Cypress Best Practices: The tests follow Cypress best practices by utilizing commands for common actions and ensuring tests are isolated and reliable.


Additional Notes
Allow Empty File: The allowEmpty: true flag is used in the form submission test to allow an empty file attachment during form submission.
Waiting for Actions: The cy.wait() method is used to ensure that the page has updated properly before making assertions (although this can be improved by handling asynchronous tasks properly with Cypress's cy.intercept or cy.wait with specific API calls).
Troubleshooting
Missing Files: If you encounter issues with missing files (e.g., empty-file.txt), make sure the file is present in the cypress/fixtures directory.
Cypress Version Compatibility: Ensure you are using a compatible Cypress version (recommended version: 9.0+).
License
This project is licensed under the MIT License.
