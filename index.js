// const express = require("express");

// const dotenv = require("dotenv").config();

// const app = express();

// const PORT = process.env.PORT || 3500;

// app.use(express.json());

// // Static Files
// app.use(express.static('public'));
// // Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// // Set View's
// app.set('views', './views');
// app.set('view engine', 'ejs');

// // Navigation
// app.get('/main', (req, res) => {
//     res.render('main')
// });

// app.get('/qrcode', (req, res) => {
//     res.render('qrcode')
// });

// app.get('/about', (req, res) => {
//    res.sendFile(__dirname + '/views/about.html')
// });

// app.use("/blog", require("./routes/blogRoutes"));

// app.listen(PORT, ()=> { 
//     console.log(`App listening on port ${PORT}`);
// });



// ------------------------------------------------------------------


const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');

// app.use(express.json());

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/files', express.static(__dirname + 'public/files'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.get('/about', (req, res) => {
//     res.render('/views/about');
// });

app.get('/', (req, res) => {
    res.render('main22')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/file1', (req, res) => {
    res.render('file1');
});

app.get('/file2', (req, res) => {
    res.render('file2');
});
  

app.get('/qrcode', (req, res) => {
    res.render('qrcode');
});
app.get('/about', (req, res) => {
    res.render('about');
});

// Route handler to redirect to /qrcode
// app.get('/qrcode', (_req, res) => {
//     res.redirect('/qrcode.ejs');
// });


// const path = require('path');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


// Route handler for /main
// app.get('/main', (req, res) => {
//     res.render('main');
// });

// Route handler for /qrcode
// app.get('/qrcode', (req, res) => {
//     res.render('qrcode');
// });

// Additional middleware and other routes setup
// ...


// Navigation
// app.get('/main', (req, res) => {
//     res.sendFile(__dirname + '/views/main.html'); // Serve the main.html file directly
// });

// app.get('/qrcode', (req, res) => {
//     res.sendFile(__dirname + '/views/qrcode.html')
// });

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
});

app.use("/blog", require("./routes/blogRoutes"));

app.listen(PORT, () => { 
    console.log(`App listening on port ${PORT}`);
});
