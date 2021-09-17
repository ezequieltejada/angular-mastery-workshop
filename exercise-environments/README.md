# Angular Mastery Workshop

by [@tomastrajan](https://twitter.com/tomastrajan) and [@kreuzercode](https://twitter.com/kreuzercode)

# Welcome to exercise - Environments

1. Go to your package.json and inspect the `"serve:api"` and the `"serve:api:prod"` script. What are they doing?
2. Run both
3. Open your browser, navigate to [localhost:4300/customers](Dev Backend) and in another tap to [localhost:4500/customers](Prod backend). Inspect the results.
4. Port 4300 - represents our our dev environment and port 4500 represents our production stage.
5. Run `npm run serve`, navigate to the customers page and check the results.
6. Navigate in your `/projects/customer-admin-app/src/environments` folder, and use the correct `API_URL` per environment (hint: check the currently used `RESOURCE_URL` in the `customers-backend.service.ts` file for inspiration, don't forget to include  `http://`  protocol, `localhost` host).
5. Navigate to the `customers-backend.service.ts` and replace the hardcoded `RESOURCE_URL` with the `API_URL` specified in your environment files by importing the default `environment.ts` file (relative import) and using provided values
6. Check if the application still fetches customers, if so, which one and why?
7. Add a new script to you `package.json` which will serve your application with the prod configurations (`"serve:prod": "ng serve -o --configuration production"`)
8. Check if the application still fetches customers, if so, which one and why?

Optional:
9. Create new `environment.test.ts` file (in the `/environments` folder) which will serve the results from the test backend (`server:api:test`), have a look at the script in `package.json` file to determine what should be the correct value of `API_URL`
10. Add a `test` configuration to your `angular.json` file (in `architect > build > configurations`). This configuration will be similar to the already existing `production` configuration, but it will ONLY replace the `environment.ts` file with the `environment.test.ts` file and leave out rest of the options...
11. Add a `test` configuration to your `angular.json` file (in `architect > serve > configurations`). This configuration will be very similar to the already existing `production` configuration...
12. Add a new script to you `package.json` which will serve your application with the test configuration (`"serve:test": "ng serve -o --configuration test"`)
13. Start both the application (`npm run serve:test`) and the mock backed (`npm run serve:api:test`) and check out if the results from the `db-test.json` are served.

# Tips

* for this exercise we will need 3 terminals to be able to run all the necessary processes ath the same time
