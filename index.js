var Command = function() {
	return this;
}

Command.prototype.preview = function preview() {
	var v = this.GUI.activeView();
	if (v){
		var view = this.GUI.activeView().model; 
		var file = view.activeRowData();  
		if (file){
			var path = require("path"); 
			var fn =  path.join(view.path, file.name) + file.ext;   
			window.open(fn);
		} else {
			this.GUI.app.msg("please select a file.");
		}
	} else {
		this.GUI.app.msg("please select a file system view.");
	}
	return false; 
};

var Plugin = function  (client) {
	this.command = new Command();
	client.app.registerHotKey("ctrl+p", this.command.preview);
};

module.exports = Plugin;