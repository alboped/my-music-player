var nwBuilder = require('nw-builder');
var nw = new nwBuilder({
	files: './resources/**/**',
	platforms: ['win32', 'win64'],
	version: '0.17.1'
});

nw.on('log', console.log);

nw.build().then(function(){
	console.log('all done!');
}).catch(function(error){
	console.error(error);
});