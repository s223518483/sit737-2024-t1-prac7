const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');
const winston = require('winston');

app.use(express.static(__dirname + "/"));
let port = process.env.PORT || 3041;

/*
const replace_index = () => {
    fs.readFile("index.html", "utf8", function (err,data) {
    if (err) {
        return console.log(err);
    }

    let result = data.replace(/var port = 3040/g, `var port = ${port}`); 
    fs.writeFile("index.html", result, "utf8", function (err) {
    if (err) return console.log(err);
    }); 
});
}
replace_index();
*/

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }
const add= (n1,n2) => {
    return n1+n2;
}
const subtract= (n1,n2) => {
    return n1-n2;
}
const multiply= (n1,n2) => {
    return n1*n2;
}
const divide= (n1,n2) => {
    return n1/n2;
}
const exponent= (n1,n2) => {
    return n1**n2;
}
const modulo= (n1,n2) => {
    return n1%n2;
}
const squareRoot= (n1) => {
    return Math.sqrt(n1);
}

app.get("/", (req, res) => {

    res.render("index.html");
});

app.get("/add", (req,res)=>{
    try{
    const n1= parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result =0;

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        flag = 1;
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for addition');
    if(flag !=1)
    {
        result = add(n1,n2);;
    }
    
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
      }
});
app.get("/subtract", (req,res)=>{
    try{
    const n1=parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result =0;

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        flag = 1;
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for subtraction');
    if(flag!=1)
    {
        result = subtract(n1,n2);
    }
    
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
      }
});
app.get("/multiply", (req,res)=>{
    try{
    const n1=parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result =0;

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        flag = 1;
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for multiplication');
    if(flag!=1)
    {
        result = multiply(n1,n2);
    }
    
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
      }
});
app.get("/divide", (req,res)=>{
    try{
    const n1=parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result =0;

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        flag = 1;
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    if(n2==0) {
        logger.error("n2 is 0, division by 0 is not allowed");
        throw new Error("n2 is 0, division by 0 is not allowed");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for division');
    
    if(flag!=1)
    {
        result = divide(n1,n2);
    }
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
      }
});
app.get("/exponent", (req,res)=>{
    try{
    const n1=parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result =0;

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        flag = 1;
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for exponent');
    if(flag!=1)
    {
        result = exponent(n1,n2);
    }
    
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
      }
});
app.get("/modulo", (req,res)=>{
    try{
    const n1=parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result =0;

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        flag = 1;
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    if(n2==0) {
        flag = 1;
        logger.error("n2 is 0, division by 0 is not allowed");
        throw new Error("n2 is 0, division by 0 is not allowed");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for modulo');
    if(flag!=1)
    {
        result = modulo(n1,n2);
    }
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
    }
});
app.get("/squareRoot", (req,res)=>{
    try{
    const n1=parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    let flag = 0;
    let result1 =0;
    let result2 =0;
    let result ="";

    if(isNaN(n1)) {
        flag = 1;
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' received for square root');
    if(flag!=1)
    {
        result1 = squareRoot(n1);
        result2 = squareRoot(n2);
        result= result1.toString()+" and "+ result2.toString();
    }
   
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(400).json({statuscocde:400, msg: error.toString() })
      }
});
port = process.env.PORT || 3041;
app.listen(port,()=> {
    console.log("hello i'm listening to port: "+port);
})
