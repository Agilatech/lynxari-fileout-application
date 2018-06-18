module.exports = function(server) {
  
  const config = require('./config');
  const fileout = require('./fileout');

  var fileDevice = {};

  config.devices.forEach(function(device) {
  	fileDevice[device.name] = new fileout(server, device);    
  });
  
}
