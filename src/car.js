function Car(make, model, year, state, color, previous_owners, current_owner){
	this.make = make;
	this.model = model;
	this.year = year;
	this.state = state = "off";
	this.color = color;
	this.previous_owners = previous_owners = [];
	this.current_owner = current_owner = "Manufacturer";
	this.passengers = [];
}



Car.prototype.sale = function(newOwner){

	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};



Car.prototype.paint = function(newColor){
	
	this.color = newColor;
};


Car.prototype.start = function(){
	this.state = "on";
};

Car.prototype.off = function(){
	this.state = "off";
};






Car.prototype.destination = ["Berlin", "Paris", "Oakland"];

Car.prototype.carDriveTo = function() {
	if (this.state === "on");
	console.log("You are driving to pick up " + destination);
};

Car.prototype.carPark = function() {
	if (this.state === "off") {
		console.log("parked!");
	}
};





Car.prototype.pick_up = function(name){
	if (this.state === "on") {
		console.log("driving to 'pick_up" + name +"'");
		this.passengers.push(name); 

	} 
};

Car.prototype.dropOff = function(name) {
	if (this.state === "on") {
	var nomen = this.passengers.indexOf(name);
	if (nomen !== -1) {
		this.passengers.splice(nomen,1);
	}
  }


};








	
module.exports=Car;