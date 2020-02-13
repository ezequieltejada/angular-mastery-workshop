# Angular Mastery Workshop

by [@tomastrajan](https://twitter.com/tomastrajan)
by [@kreuzercode](https://twitter.com/kreuzercode)

# Welcome to exercise - Environments

1. Go to your package.json and inspect the ```"serve:api"``` and the ```"serve:api:prod"``` script. What are they doing?
2. Run both
3. Open your browser, navigate to [localhost:4300/customers](Dev Backend) and in another tap to [localhost:4500/customers](Prod backend). Inspect the results.
4. Port 4300 - represents our our dev environment and port 4500 represents our production stage.
5. Run ```npm run serve```, navigate to the customers page and check the results.
6. Navigate in your environments folder, and use the correct API_URL per environment.
5. Navigate to the ```customers-backend.service.ts``` and replace the hardcoded ```RESOURCE_URL``` with the ```API_URL``` specified in your environment files.
6. Check if the application still fetches customers, if so, which one and why?
7. Add a new script to you ```package.json``` which will serve your application with the prod configurations (```"serve:prod": "ng serve -o --prod"```)
8. Check if the application still fetches customers, if so, which one and why?

Optional:
9. Add a ```environment.test.ts``` file which will serve the results from the test backend (```server:api:test```). 
10. Add a test configuration to your ```angular.json```. This configuration will replace the ```environment.ts``` file with the ```environment.test.ts``` file.
11. Start the application and check out if the results from the ```db-test.json``` are served.
