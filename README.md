# Unit tests with Jest!

# STARTING

First, install the jest library
- 'npm i --save-dev @types/jest'

To run all tests
- 'npm test'

To run all tests with coverage
- 'npm test -- --coverage'

## HOW TO TEST API CALLS?

Test integration from api's using a real api endpoint is not the best practice for a unit test purpose, that's why Mock Service Worker
[MSW DOC](https://mswjs.io/docs/getting-started)

Install 
- 'npm install msw@latest --save-dev'

### INTERCEPTING REQUESTS
[MSW DOC - INTERCEPTING REQUESTS](https://mswjs.io/docs/basics/intercepting-requests)

To avoid api data change on tests we call 'server.close()'

with we need to keep a request with some data as call more than one calls on tests we can just not call 'server.close()'

With we do not want to set the 'server.close' or 'server.resetHandlers()' for every single test we can use the 'beforeAll(server.listen())', 'afterEach(server.resetHandlers())', 'afterAll(server.close())' all this 
can be set up on the server definition file as it can be defined in the test file as well.
# PROBLEMS THAT COULD HAPPEN
if the npm test is showing the error:

'Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.'

just type on terminal:
'npm install --save-dev @testing-library/react'

-- find a extension that shows each line that was tested

[JEST QUICK COVERAGE](https://marketplace.visualstudio.com/items?itemName=RukshanDias.jest-coverage)
