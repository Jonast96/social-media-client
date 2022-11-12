[![Automated E2E Testing](https://github.com/Jonast96/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Jonast96/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/Jonast96/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Jonast96/social-media-client/actions/workflows/unit-test.yml)

[![Deploy static content to Pages](https://github.com/Jonast96/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Jonast96/social-media-client/actions/workflows/pages.yml)

# How to install and run the project

Clone the repo and install npm

  -npm i
  
Run sass build script

  -npm run build

# Scripts avaliable in this project
    "build": "sass src/scss:dist/css"
    "start": "sass --watch src/scss:dist/css & live-server"
    "lint": "eslint src/**/*.js"
    "lint-fix": "eslint src/**/*.js --cache --fix"
    "prepare": "husky install"
    "format": "prettier -w ./**/*.{js,scss,html,md}"
    "test": "npm run test-unit && npm run test-e2e-cli"
    "test-unit": "jest"
    "test-e2e": "cypress open"
    "test-e2e-cli": "cypress run"
    "dev": "live-server"





# To do list

#The following workflows/hooks are required:

- [x] ~~_Project is configured to run Prettier on commit_~~ [2022-11-11]
- [x] ~~_Project is configured to run ESLint on commit_~~ [2022-11-11]
- [x] ~~_Project is configured to run Jest on commit_~~ [2022-11-11]
- [x] ~~_Project is configured to deploy to pages on merge to default_~~ [2022-11-11]

#The following file changes are required:

- [ ] Project readme file is updated to include new configuration information and status badges
- [ ] Project is configured for hosting (e.g. CDN links or a Bundler)

#The following features must be automatically tested with unit tests:

- [x] ~~_The login function returns a valid token when provided with valid credentials_~~ [2022-11-11]
- [x] ~~_The logout function clears the token from browser storage_~~ [2022-11-11]
- [x] ~~_The create item function creates a new item on the API_~~ [2022-11-11]

#The following features must be automatically tested with end-to-end tests:

- [x] ~~_The login form validates user inputs correctly based on API restrictions_~~ [2022-11-11]
- [x] ~~_The create item form validates user inputs correctly based on API restrictions_~~ [2022-11-11]
- [x] ~~_The logout button logs the user out when clicked_~~ [2022-11-11]
