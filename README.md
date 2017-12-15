# Prerequisites
Before using this application make sure you have installed:
* NodeJs

Please sign up for accounts on `Amazon SES` and `SendGrid` to obtain API keys for development.

Create a new file in the `config` folder named `keys.js`

Copy and paste this code and fill in the required properties

```
const sendGridConfig = {
  apiKey: '<API KEY>'
};

const awsConfig = {
  accessKeyId: '<AccessKey>',
  secretAccessKey: '<Secret>',
  region: '<Region>'
};

module.exports = {
  sendGridConfig,
  awsConfig
};
```

# Installation
Run `npm-install` from the root directory in your terminal

# Running For Development
Running `npm start` will start the client at http://localhost:3000

# Technologies
* ReactJs
* NodeJs
* Express
* Redux
* Redux Form
* Bootstrap
* Material UI
* Amazon SES API
* SendGrid API
