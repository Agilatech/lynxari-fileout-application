const path = require('path');
const fs = require('fs');

module.exports = class Fileout {
	
	constructor(server, device) {

		this.device = device;
		this.server = server;

		if (this.device.path.slice(-1) != path.sep) {
			this.device.path += path.sep;
		}

		this.filepath = this.device.path + this.device.name + path.sep;

		if (!fs.existsSync(this.filepath)){
    		fs.mkdirSync(this.filepath);
		}

		this.startObservers();
	}

	startObservers() {

		const peersDeviceQuery = this.server.from('*').where({name:this.device.name});
		const localDeviceQuery  = this.server.where({name:this.device.name});

		const self = this;

		this.server.observe([peersDeviceQuery], function(dev) {

			self.device.values.forEach(function(value, index) {

			    dev.streams[value].on('data', function(message) {
			    	self.writeDataToFile(self.filepath + self.device.files[index], message.data);
			    });
  			});
  		});

  		this.server.observe([localDeviceQuery], function(dev) {

			self.device.values.forEach(function(value, index) {

			    dev.streams[value].on('data', function(message) {
			    	self.writeDataToFile(self.filepath + self.device.files[index], message.data);
			    });
  			});
  		});
	}

	writeDataToFile(file, data) {
		fs.writeFile(file, data, (err) => {
    		if (err) {
    			this.server.error("File write error: " + err);
    		}
    	});
	}
}