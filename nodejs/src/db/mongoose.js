const mongoose = require('mongoose')

//const uri = "mongodb+srv://azureuser:india@123@cluster0.egb4t.azure.mongodb.net/task-manager-api?retryWrites=true&w=majority";


const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


