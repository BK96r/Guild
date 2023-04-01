Test Plan: Cars.com Listing Prices Sorting

Feature: 
As a user, I want to sort the search results by price, 
so that I can easily find the car that fits my budget.

Testing Approach:
Automated UI Testing with Cypress

Test Cases:
a. Sort by Highest Price: This test will check if the prices of used cars are correctly
   sorted in descending order based on the selected option. 
   It will verify that the first car has the highest price, and the last car has the lowest price.
b. Sort by Lowest Price: This test will check if the prices of used cars are correctly
   sorted in ascending order based on the selected option. 
   It will verify that the first car has the lowest price, and the last car has the highest price.

Pre-requisites:
A web browser (Chrome or Firefox) with the Cypress plugin installed.

Expected Results:
a. The test should pass if the prices of the listed cars are correctly sorted based on the selected option.
b. The test should fail if the prices of the listed cars are not correctly sorted based on the selected option.

Test Deliverables:
a. Test Plan
b. Test Results
c. Defects (if any)