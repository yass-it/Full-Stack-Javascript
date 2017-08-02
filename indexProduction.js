require('./envs/prod');

var app = require('./app');

app.listen(process.env.PORT, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log('running ', process.env.mode, ' code on  port ', process.env.PORT);
	};
});