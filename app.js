const express= require('express');
const path= require ('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

// Public Folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(cors());

const port=3000;

app.listen(port,()=>console.log(`server started on port ${port}`));