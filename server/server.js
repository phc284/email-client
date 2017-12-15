const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {awsConfig, sendGridConfig } = require('../config/keys.js');
const sgMail = require('@sendgrid/mail');

var aws = require('aws-sdk');
var ses = new aws.SES(awsConfig)

const app = express();

app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../client/')));

app.post('/api/send', (req, res) => {
  console.log(req.body)

  sgMail.setApiKey(sendGridConfig)
  const msg = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.message
  };

  sgMail.send(msg).then(() => {
    throw error
    console.log('SUCCESS')
  }).catch((error) => {
      const params = {
        Destination: {
          ToAddresses: [req.body.to]
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: req.body.message
            }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: req.body.subject
          }
        },
        ReturnPath: req.body.from,
        Source: req.body.from
      }

      ses.sendEmail(params, (err, data) => {
        if (err) console.log(err, err.stack)
        else console.log(data)
      })
      console.log('********Send Grid Failed. Used AWS*******')
    })



  // res.send('Success!')
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
