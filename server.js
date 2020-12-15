const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const userRoute = require('./routes/userRoute');

//DATABASE CONNECTION
mongoose
    .connect(process.env.DB_CONNECTION,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true 
    },
    (error,result) => {
        result ? 
            console.log("Connected To Database") 
            : console.log('error in connecting to database,', error)
    });

const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use('/user',userRoute);

//INDEX ROUTE
app.get('/',(req,res)=>{
    res.send(' AT INDEX ROUTE');
});

app.listen(process.env.PORT || 3002,()=>{
	console.log(`App is running on port ${process.env.PORT}`);
})
