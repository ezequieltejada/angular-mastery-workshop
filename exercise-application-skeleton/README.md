# Angular Mastery Workshop

by [@tomastrajan](https://twitter.com/tomastrajan) and [@kreuzercode](https://twitter.com/kreuzercode)

# Welcome to exercise - Application skeleton

In this exercise were going to explore how to scaffold an application skeleton using the Angular CLI and the Angular Schematics. We are going to learn the following topics:

- How to create a `CoreModule`
- How to create a `SharedModule`
- How to create base layout
- How to set up routing
- How to create lazy loaded `HomeModule` and `CustomersModule`

## TODO 1: Start the application
Make sure you installed all `node_modules` by running `npm ci` and that your application is running by executing `npm start`.

## TODO 2: Create a CoreModule
We're going to use Angular Schematics to help us scaffold the base application structure.

1. Run `ng generate module core` (or `ng g m core`) which will generate `CoreModule` file in the `src/app/core` folder.
2. Add `CoreModule` to the `imports: [ ]` array of the `AppModule` (the IDE should auto-import the module form correct location...).

## TODO 3: Create base layout
Now let's create some basic layout with a header (and navigation), footer and center the content area where we will display active route.

1. Use `ng g c core/layout/header` to generate new header component, it will automatically be added to the `declarations: [ ]` of `CoreModule` and then we have to also add it to the `exports: [ ]` too! 
2. Add `<my-org-header></my-org-header>` as the first component in the `app.component.html` template.
3. Use Use `ng g c core/layout/footer` to generate new footer component, it will automatically be added to the `declarations: [ ]` of `CoreModule` and then we have to also add it to the `exports: [ ]` too!
4. Add `<my-org-footer></my-org-footer>` as the last component in the `app.component.html` template.
5. Replace `<h1>` in the `app.component.html` template with the `<div class="content"></div>` (it should end up being between the header and the footer, it will also use some prepared styles you can find in `app.component.scss`).
6. Import `MatToolbarModule` and `MatButtonModule` from `@angular/material/<desired-module>` (this should be done by editor auto-import) inside of `core.module.ts` and add them to `imports: [ ]`.
7. Add `<mat-toolbar color="primary">Customer Admin</mat-toolbar>` in the `header.component.html` (remove original content`<p>` tag) .

## Todo 4: Prepare routing

1. Inside of `CoreModule` import the `RouterModule` and add it to both `imports: [ ]` and `exports: [ ]` arrays, this will enable us to use routing related components and directives...
2. In the `app.component.html` add `<router-outlet></router-outlet>` as a child of the `<div class="content"></div>`, this will be the location where we want to display our routes...
3. In the `header.component.html` add `<button mat-raised-button routerLink="home">Home</button>` as a child of `<mat-toolbar>`.
4. In the `header.component.html` add `<button mat-raised-button routerLink="customers">Customers</button>` as a second child of `<mat-toolbar>`.
5. (Optional) Add `button { margin: 0 0 0 20px; }` to the `header.component.scss` (our css rule does NOT have to be specific because Angular scopes styles per component).

## TODO 5: Create SharedModule
1. Run `ng generate module shared` (or `ng g m shared`) which will generate `SharedModule` file in the `src/shared` folder.
2. Inside our freshly generated module, please add `exports: [ ]` array to the `@NgModule` decorator and fill it with `CommonModule`. That way we can only import `SharedModule` and not both `SharedModule` and `CommonModule` in most other modules...
3. Import `MatCardModule` from `@angular/material/<desired-module>` (this should be done by editor auto-import) inside of `shared.module.ts` and add them to both `imports: [ ]` and `exports: []`.
4. We will use the `SharedModule` in our lazy loaded feature modules.

## Todo 6: Create lazy loaded HomeModule and CustomersModule
1. Run `ng g m features/home --route home --module app.module.ts` which is a schematics that we used previously to generated `Core` and `Shared` modules but now we use it with additional options `--route` and `--module` which will cause it to be generated as a lazy loaded module belonging to the root `AppModule` (its routing).
2. Replace the import of the `CommonModule` inside `home.module.ts` with `SharedModule` (hint: is always good to remove unused imports from the top of the file).
3. Overwrite the `home.component.html` with the following content `<mat-card>Home</mat-card>`.
4. Run `ng g m features/customers --route customers --module app.module.ts` will generate lazy loaded `CustomersModule`...
5. Replace the import of the `CommonModule` inside `customers.module.ts` with `SharedModule`.
6. Overwrite the `customers.component.html` with the following content `<mat-card>Customers</mat-card>`.
7. Navigate to routes using menu in the toolbar (if this does NOT work try restarting your application using `npm start`, CLI sometimes doesn't catch all the generated files while running...).
8. As you might have noticed, we're not displaying any route when navigating to plain root url `http://localhost:4200/`, lets fix that by adding redirect as a first route in `app-routing.module.ts` in the `routes: [ ]` array.

```javascript
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}

```
Try to use `http://localhost:4200/` url in your browser and see what happens!

## Todo 6: Analyze
1. Run `npm run analyze` to see how the graph changed as we're now having two lazy loaded modules
2. Try to figure out in which chunk the `MatCardModule` imported by the `SharedModule` landed. (hint: you might need to uncheck `main.<hash>.js` file in the controls to see small lazy loaded chunks)

# Great! We have nice application skeleton, layout and routing with lazy loading, that's a great starting point to start developing features!
