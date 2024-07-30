# Unit tests with Jest!

# STARTING

First, install the jest library
- 'npm i --save-dev @types/jest'

To run all tests
- 'npm test'

To run all tests with coverage
- 'npm test -- --coverage'

# PROBLEMS THAT COULD HAPPEN
if the npm test is showing the error:

'Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.'

just type on terminal:
'npm install --save-dev @testing-library/react'

-- find a extension that shows each line that was tested