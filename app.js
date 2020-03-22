const express = require('express');
const app = express();
const path = require('path');
const hsb = require('hbs');

const PORT = process.env.PORT || 3000;
//console.log(__dirname+"/templates/views")
const publicDirPath = path.join(__dirname,"/public");
const viewDirPath = path.join(__dirname,"/templates/views");
const partialsDirPath = path.join(__dirname,"/templates/partials");

//console.log('public==',publicDirPath);


app.set('view engine','hbs');
app.set('views', viewDirPath);
hsb.registerPartials(partialsDirPath);
app.use(express.static(publicDirPath));


app.get('/home', (req,res) => {
    res.render('home', {
        title: 'Home',
        name: 'Raghuvar'

    })
});

app.get('/weather', (req, res)=>{
    res.render('weather',{
        title: 'weather',
        name: 'Raghuvar'
    });
});


app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'about',
        name: 'Raghuvar'
    })

});

app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        name: 'Raghuvar'
    });
});

app.listen(PORT,()=>{
    console.log('running on port', PORT);
})

//https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/