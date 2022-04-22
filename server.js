import express from 'express';
import routes from './src/routes/index';


const app = express();
const port = 3000;


app.use(express.json());
routes(app);


app.use((req, res, next) => {

    res.status(404);

    if(req.accepts('json')){
        res.send({error: true, message: 'Route Not Found'});

        return;
    }
});

//middlewares
app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    next();
});

app.listen(port, () => {
    console.log('app is listening on port 3000');
});
