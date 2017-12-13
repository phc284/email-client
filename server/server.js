var app = require('./routers.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
