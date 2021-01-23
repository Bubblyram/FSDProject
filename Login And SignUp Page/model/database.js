const mysql=require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'bubblyram',
    database:'sakila'
});
module.exports=connect;