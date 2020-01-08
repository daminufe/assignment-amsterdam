# To run the project

Please run `npm i` to install all the dependencies.

`npm start` to start the development environment as well as the mock server.

**Comment:** I didn't have much time as this week I am very busy, so I didn't make it look pretty, and I noticed I couldn't use the components as they are a NPM private repo.

**Tests:** I didn't make the tests, as I said for lack of time to finish it. I can talk about my experience with unit tests with Jest.

Thanks!


# Assignment

Please create a page that contains an input field.
When the user enters *at least* three characters into this input field,
you should display all flight information from the `flights.json` file where the destination matches the entered input.
Do this by using vanilla Javascript.

We think 4 hours should be enough to spend on this assignment.
Please don't spend more than that unless you're having fun and want to show off :)

## Requirement:
- Use Webpack to build an ES5 bundle of your program.
- Make it look nice. Make sure Webpack also packages your styles. We have provided some internal SCSS files in the `/sass` directory from our internal setup.
You can read about these on [http://takeoff.schiphol.nl/component/style-fundamentals](http://takeoff.schiphol.nl/component/style-fundamentals)
- Your application should treat the contents of `flights.json` as the output of an API endpoint.
It should load this via xhr and should not require a page load when the user changes their input.

## Submission:
- Create a clone of this repository locally.
Then push it to **your GitHub account** and continue working from there. Once you have finished, please send us the URL of the repository you have created.

### Some things to consider:
- We like tested code
- We like readable code
- We like using the latest features of ES6 where applicable
- Last but not least, have fun!
