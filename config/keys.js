const mongoose = require('mongoose');



const connectDatabase =()=>{
    mongoose.connect(process.env.URL,{ useNewUrlParser: true ,useUnifiedTopology: true }).then(()=>{
        console.log(`Mongodb connected with server: `);
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connectDatabase;