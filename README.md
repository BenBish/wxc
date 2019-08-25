# Technical Implementation

This was an fun project with some interesting technical considerations. The development API endpoint for the products list supplied 6 products with stock levels but without unique IDs on them. I decided to add unique IDs to the data and handle stock levels within the SPA. Products when added to the cart are removed from the stock list and when remove from the cart they are added back in. When users checkout the levels are removed *permanently* (until the next hard refresh in this test environment).

Without a design I made some arbitrary decisions on presentation.

If this was a production piece I would look at optimizing the Bootstrap build and improving offline performance with service workers.

## Technical details
To speed up development and bootstrap the project quickly I used Create React App and added the following:

- bootstrap
- emotion
- reach router
- prettier

## Requirements

- [x] Product page
	- [x] Name
	- [x] Price
	- [x] Description
	- [x] Add to cart button
- [x] Cart page
	- [x] a summary of items added to the cart
	- [x] total price
	- [x] checkout button
- [x] When the user clicks on the checkout button, they should get a message confirming or declining their order
- [x] BONUS POINTS: Add accessibility to the website

### Accessibility

The user can tab through the products and add items to the cart using the space or enter keys. They can tab and navigate to the cart (and back to the shop). The user can remove products and *checkout*.

## Extras
- [x] Unit tests
- [x] Update stock levels when adding and removing items in the cart
- [x] Handle API failures and 404s 
- [x] Visually handle stock levels in the UI with low stock and out of stock indicators
- [x] Visually show item number in the cart
- [x] Mobile first, responsive SPA
- [x] Added Polyfills so fetch works in IE11

### Audits

Google Lighthouse scores the SPA as follows:

- 99 Performance
- 97 Accessibility
- 93 Best Practices
- 100 SEO

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>