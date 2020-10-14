const dbConnect = (arg) =>{
   arg.connect('mongodb://localhost:27017/project', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err.message));

   return arg; 
}

module.exports = dbConnect;