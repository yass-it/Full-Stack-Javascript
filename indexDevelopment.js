require('./envs/dev');

var app = require('./app');

app.listen(process.env.port, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log('running ', process.env.mode, ' code on  port ', process.env.port);
	};
});