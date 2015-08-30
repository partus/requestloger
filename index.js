var app = require('express')()
app.use(require('body-parser').json({
  type: "*/*"
}));
app.all("*", function (req, res, next) {
  console.log("new request")
  console.log(req.body, req.body.deliveryreference);
  
  res.send('POST request to the homepage'); // pass control to the next handler
});



var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
