const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, '../public'))); //serve up static files inside public

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

//sending in an id into the server $.get (require('request'))
//Express request params

// app.get('/homes/:homeId/reviews', (req, res)=>{ //
// 	// let callback = (err, data) => {
// 	// 	let imageArr = data.map((obj)=>{
// 	// 		return obj.image
// 	// 	})
// 	// 	res.send(imageArr)
// 	// };
//
// 	db.getReviews(req.params.homeId, callback)
//
// });

//I'm doing a post because I want to be able to use Postman for testing the response


//TODO: function that will take in an id, and a callback
app.listen(3001, () => console.log('listing on port 3001...'))
