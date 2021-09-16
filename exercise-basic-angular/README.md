# Angular Mastery Workshop

by [@tomastrajan](https://twitter.com/tomastrajan) and [@kreuzercode](https://twitter.com/kreuzercode)

# Welcome to exercise - Basic Angular

In this exercise were going to explore creation of components & services

- Create component
- Render data
- Use various built in directives
- Implement inter component communication 
- Create and use service

## TODO 0: Start application
Make sure your application is installed `npm ci` and is running by executing `npm start`

## TODO 1: Create CustomerItemComponent and related logic
1. Use `ng g c features/customers/customer-item` to generate new component, it will automatically be added to the `declarations: [ ]` of `CustomersModule`...
2. In the `customers.component.html` render `<my-org-customer-item></my-org-customer-item>` for every value in `customers` array (hint use `*ngFor` directive)
3. In the `customer-item.component.ts` define `@Input()` which accepts the customer object from the parent into `customer` property and also uses `Customer` interface
4. In the `customers.component.html` pass the `customer` object (from `*ngFor` iteration) down to the `<my-org-customer-item></my-org-customer-item>` using `[customer]` property binding
5. In the `customer-item.component.ts` try to log out value `@Input() customer` property in the constructor and in the `ngOnInit()` lifecycle hook (don't forget to implement the interface if it was not generated) and check out console in your browser Dev Tools... (hint `console.log('constructor', this.customer);`). How does this relate to Angular component life cycle? 
6. In the `customer-item.component.html` add `<mat-card></mat-card>` as a top level element and render customer name and surname into `<p>` tag inside the card with the help of interpolation `{{ }}` 
7. In the `customer-item.component.scss` add css rule for `mat-card` setting its `display: flex;`, `align-items: center;` and `justify-content: space-between;` and another rule for `p` setting its `margin` to `0` and  `width` to `200px;`
8. In the `customer-item.component.html` add `<mat-icon>person</mat-icon>` before the `<p>` tag
9. In the `customer-item.component.html` add `[class]` binding on the `<mat-card>` element which should set `vip` class (hint: `[class.vip]`) based on the value of `customer.isVip` property
10. In the `customer-item.component.scss` add nested css rule inside of `mat-card` using which will define rule for `.vip` class (nested rules that belong to element are prefixed with `&`, so `&.vip`) and add rule that sets `background-color` to `#fff4ba`
11. In the `customer-item.component.html` add `<mat-icon>star</mat-icon>` but display it conditionally only for the VIP customers (hint:  use `*ngIf` directive)
12. Also, we do not want to display two icons at the same time so hide the original `person` icon in case the customer is VIP
13. In the `customer-item.component.html` add `<button>` as the last child of the `<mat-card>` with `mat-stroked-button` directive and `Say hello` text content, after that add `(click)` event binding which will call `sayHello()` method and pass in the `customer` object as an argument
14. In the `customer-item.component.ts` implement public `sayHello()` method which accepts `customer` of type `Customer` as an argument and logs out customer full name when called (hint: try use javascript template string (back ticks and `${variable}`), to concatenate name and the surname), then open the browser dev tools look into console and click on the button
15. In the `customer-item.component.html` add `<button>`  as the last child of the `<mat-card>` with `mat-raised-button` directive and `Purchase item` text content, after that add `(click)` event binding which will call `purchaseItem()` method pass in the `customer` object as an argument, optional, use `color` attribute on the button with value `accent` and see what impact it will have on displayed button
16. In the `customer-item.component.ts` implement public `purchaseItem()` method which accepts `customer` of type `Customer` as an argument 
17. Continue by creating `@Output() purchase` property which will be initialized with `new EventEmitter<{ customerId: number, order: number }>()`, we're using inline type, please extract the type into `Purchase` Typescript interface and export it ( in the same file ), hint: `EventEmitter` comes from the `@angular/core` package
18. Inside of the previously created `purchaseItem()` method we can now call `this.purchase.emit()` and pass in and object with `customerId` property with value of the `customer` ID and `order` property with some random number (we can get random number by using `Math.ceil(Math.random() * 1000)`)
19. In the `customers.component.html` add new event binding that listens to the new custom `(purchase)` event of the `<my-org-customer-item>` and calls `handlePurchase()` method with `$event` as an argument
20. In the `customers.component.ts` implement the `handlePurchase()` method which accepts argument of type `Purchase`, use `customerId` to get hold of appropriate `customer` and add received `order` value to its `orders` array (this has to be done by re-creating `customers` array using `.map()` in which we re-create every customer object using object spread `{ ...customer }` and overriding the `orders` array for customer matched by the ID) The functionality can be verified by clicking on the button and checking dev tools console where the amount of logged out orders for given customer should grow per click.
21. Create new order service using `ng g s features/customers/services/order` and inject it into `CustomerItemComponent` using constructor injection (optional, remove the `providedIn: 'root'` and provide service using `providers: []` array of the lazy loaded `CustomersModule` to prevent its usage in other parts of the application as it belongs to the customers lazy feature...)
22. Inside of the service create new `calculateTotal` method which accepts customer `orders` array (of numbers) and calculates and returns total order value (hint: use array reduce)
23. In the `customer-item.component.ts` define new public `totalOrderValue` component property with value of `0` and display it in the template using interpolation `{{ }}` (can be in the new `<p>` tag before previously created buttons)
24. In the `customer-item.component.ts` import and implement `OnChanges` lifecycle hook (component interface) and inside that hook call previously injected `OrderService` to calculate total order value (based on customer `customer` property) and store it in the `totalOrderValue` property
25. Try placing some orders by clicking the button
26. In the `customer-item.component.ts` try adding another public `calculateTotal()` component method which will `console.log('method called');` call the `OrderService` service and return total value, try calling this function in the template ( in another `<p>` tag ) using interpolation `{{calculateTotal()}}` open console and try to click multiple buttons, how often is the function executed, why is it a problem?

# Epic! We have implemented Angular components using various template concepts like interpolation and directives, our components communicate using inputs (@Input) and events (@Output) and use injected service inside of life-cycle hook to calculate derived state in a way that doesn't harm the performance!

## How to start

- try searching for numbered `TODO` readme items and `// TODO` code comments in the `projects` folder or use TODO functionality of your editor 

## How to use exercises

- every exercise folder should be installed using `npm ci`
- every exercise can be started using `npm start` to run the app
- every exercise can start tests in watch mode using `npm run watch`
- please note that the first `npm start` or `npm run watch` after the `npm ci` will trigger initial IVY compilation, so they can NOT run in parallel (wait for the first one to finish IVY compilation and then start the other one)
- every exercise has it's own `README.md` file with additional description of the given exercise
- every exercise project contains ordered `TODO ` in the readme and `// TODO` comments inside of the source code (eg `// TODO 2: description`) which should be followed to complete the given exercise
- you can always search for `// TODO`, or `<!-- TODO` or check `README.md` for the next TODO item
