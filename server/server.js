const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.send({hello: 'hello'})
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
