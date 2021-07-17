var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'stichpad-db-service',
  description: 'stichpad-db-service',
  script: 'D:\\Technologies\\React\\React-software-apps\\StichPad\\stichpad-server\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();