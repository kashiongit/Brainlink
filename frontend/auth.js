const jwt = require("jsonwebtoken");
const JWT_SECRET="loloiam";

function auth(req,res,next){
    //get token from request
    const token = req.headers.authorization;
    const response = jwt.verify(token, JWT_SECRET)
     if(response){
        req.userId = response.id;
        next();
        
     }


    }