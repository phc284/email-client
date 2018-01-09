/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sgMail = require('@sendgrid/mail');
var aws = require('aws-sdk');
const app = express();

/* Config */
const { awsConfig, sendGridConfig } = require('../config/keys.js');
var ses = new aws.SES(awsConfig);

app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../client/')));

/**** ROUTES ****/

app.post('/api/send', (req, res) => {
  sgMail.setApiKey(sendGridConfig.apiKey);

  const msg = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.message
  };

  var sgMailFail = false;
  sgMail.send(msg).then(() => {
      //Success -> send back host
      res.send({ host: 'SendGrid' });
    }).catch(error => {
      if (error) {
        sgMailFail = true;
      }
      res.send(404, error);
    });

    //if first mail server fails, try fail-safe
    if (sgMailFail) {
      //if an error with SendGrid, send through Amazon SES
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
      };

      ses.sendEmail(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log(data);
      });

      //send back that SES as host
      res.send({ host: 'SES' });
      console.log('failed sg');
    }


});

//PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
