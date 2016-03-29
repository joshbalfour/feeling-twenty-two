module.exports = function(thing){

	var thingsThatFeel22 = [
		22, 
		"22", 
		"twenty two", 
		"twenty-two", 
		"https://www.youtube.com/watch?v=AgFeZr5ptV8", 
		"https://en.wikipedia.org/wiki/22_(Taylor_Swift_song)",
		"https://itun.es/gb/abOeI?i=571637873"
	];

	return thingsThatFeel22.indexOf(thing) > -1;
};