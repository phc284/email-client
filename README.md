# Prerequisites
Before using this application make sure you have installed **NodeJs** (version 8.0.0+)

Please sign up for accounts on **[Amazon SES](https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html)** and **[SendGrid](https://sendgrid.com/)** to obtain API keys for development.

Follow the instructions for SendGrid and make sure to add verified email addresses to your Amazon SES account to send emails.



# Installation and Required Materials
Run **`npm-install`** from the root directory in your terminal

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
