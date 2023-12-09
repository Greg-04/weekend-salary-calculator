let express = require('express');

//initializing application
let app = express();
console.log(app);

app.use(express.static('server/public'));

// securing PORT variable
// let PORT = process.env.PORT || 5001;

//running the app
//function param as a callback
app.listen(5001, () => {
    console.log('Application running on PORT 5001')
})

//ctrl+C to exit