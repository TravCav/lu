var Entity = require("./Entity.js");
var Work = require("./Work.js");

(function () {
	console.log('begin');

	var user1 = new Entity();
	var user2 = new Entity();

	user1.name = "Employee1";
	user2.name = "Employee2";

	Work.Do(user1,user2);		

	console.log('done');
})();