/*const express = require('express');
const app = express();
const helmet = require('helmet');
const asoiafDeaths = require('./asoiaf-deaths');
const PORT = 3000;

app.use(helmet());

app.get('/', (req, res) => {
    res.status(201)
    .send('Listen');
});

app.get('/asoiaf-deaths', (req, res) => {
    res.status(200)
    .send(asoiafDeaths());
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});*/

const express = require('express');
const app = express();
const helmet = require('helmet');
const PORT = 3000;

app.use(helmet());
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const Datastore = require('nedb');
const database = new Datastore('database.db');

database.loadDatabase();
/**database.insert(
    [{"name":"Weimar","house":"Royce","book":"A game of thrones"},{"name":"Vardis","house":"Egen","book":"A game of thrones"},{"name":"Viserys","house":"Targaryen","book":"A game of thrones"},{"name":"Robert","house":"Baratheon","book":"A game of thrones"},{"name":"Raymun","house":"Darry","book":"A game of thrones"},{"name":"Jaremy","house":"Rikker","book":"A game of thrones"},{"name":"Torrhen","house":"Karstark","book":"A game of thrones"},{"name":"Eddard","house":"Karstark","book":"A game of thrones"},{"name":"Eddard","house":"Stark","book":"A game of thrones"},{"name":"Burton","house":"Crakehall","book":"A clash of kings"},{"name":"Stafford","house":"Lannister","book":"A clash of kings"},{"name":"Renly","house":"Baratheon","book":"A clash of kings"},{"name":"Rodrik","house":"Cassell","book":"A clash of kings"},{"name":"Willem","house":"Lannister","book":"A storm of swords"},{"name":"Rickard","house":"Karstark","book":"A storm of swords"},{"name":"Monford","house":"Velaryon","book":"A storm of swords"},{"name":"Jeor","house":"Mormont","book":"A storm of swords"},{"name":"Hoster","house":"Tully","book":"A storm of swords"},{"name":"Balon","house":"Greyjoy","book":"A storm of swords"},{"name":"Wendel","house":"Manderly","book":"A storm of swords"},{"name":"Dacey","house":"Mormont","book":"A storm of swords"},{"name":"Smalljon","house":"Umber","book":"A storm of swords"},{"name":"Robb","house":"Stark","book":"A storm of swords"},{"name":"Catelyn","house":"Stark","book":"A storm of swords"},{"name":"Oberyn","house":"Martell","book":"A storm of swords"}]
);*/

//route api
app.get('/api', (req, res) => 
{
    database.find({}, (err, data) => {
        if(err)
        {
            res.end();
            console.log('Error DB');
        }
        
        res.json(data);
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});