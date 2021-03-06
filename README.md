# Prerequisites
Before using this application make sure you have installed **NodeJs** (version 8.0.0+)

Please sign up for accounts on **[Amazon SES](https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html)** and **[SendGrid](https://sendgrid.com/)** to obtain API keys for development.

Follow the instructions for SendGrid and make sure to add verified email addresses to your Amazon SES account to send emails.

There is a separate branch `v2` that has a better method of a fail safe for the email



# Installation and Required Materials
Clone this repo on to your local machine by either downloading the .zip or running:

`git clone https://github.com/phc284/email-client.git`

This application makes use of [Nodemon](https://github.com/remy/nodemon), which actively monitors changes in your node.js application.

Run `npm install -g nodemon`

Traverse to the root directory of the application and run **`npm-install`** to install all dependencies

# Setting Up Config
Create a new folder named `config` in the root directory and create a new file `keys.js` within it.

Copy and paste this code in `keys.js` and fill in the required properties

```
const sendGridConfig = {
  apiKey: 'YOUR_API_KEY'
};

const awsConfig = {
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'YOUR_REGION'
};

module.exports = {
  sendGridConfig,
  awsConfig
};
```

The `keys.js` file is used to keep private keys and user identification safe from the public


# Running For Development
Running **`npm start`** will start the client at http://localhost:3000

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
