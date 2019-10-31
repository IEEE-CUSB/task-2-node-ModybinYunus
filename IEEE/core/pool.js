var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();
var bodyParser = require('body-parser');

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ieee',
    debug    :  false
});

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

 app.post('/', function(request, response) {
	var name = request.body.name;
	var email = request.body.email;
	var phone = request.body.phoneNumber;

	//response.send(`Full name is:${request.body.name}.`);

	if (name && acadYear &&workshops) {
		connection.query('INSERT INTO `ieee-form`(`name`,`mail`,`phone`,) VALUES ("'+name+'","'+email+'","'+phone+'")', function(error, results, fields) {		
		if(error){
			throw error
		}
		else{
			response.send('Your submit is succefully sent. Thank you! :)');
		}	
		});
	} else
	{
		response.send('Please enter the required fields!');
		response.end();
	} 
}); 

function handle_database(req,res) {
       // connection will be acquired automatically
       pool.query("select * from user",function(err,rows){
        if(err) {
            return res.json({'error': true, 'message': 'Error occurred'+err});
        }
                //connection will be released as well.
                res.json(rows);
       });
}

app.get("/",function(req,res){-s
        handle_database(req,res);
});

app.listen(3000);
