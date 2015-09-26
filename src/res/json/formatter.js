var fs = require('fs');

fs.readdir('./data', function(err, files){
	if(!err){
		var output = [];
		for( var i = 0; i < files.length; i++){
			var file = fs.readFileSync('./data/' + files[i], {encoding: 'utf8'});
			console.log(files[i]);
			try{
				var name = JSON.parse(file).Name;
				console.log(JSON.parse(file).Name);
				output.push({name: name, file: files[i], image: files[i].replace('.json', '.png'), gif_dir: files[i].replace('.json', '')});
			} catch(err){
				console.log(err);
			}
		}
		
		var jsonString = JSON.stringify(output);
		
		fs.writeFile('./map.json', jsonString, function(err){
			if(err)
				console.log(err);
		});
	}
	 else{
		console.log(err);
	}
})