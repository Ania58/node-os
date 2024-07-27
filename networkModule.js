const os = require('node:os');

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    const result = [];

    for (const [name, interfaces] of Object.entries(networkInterfaces)) {
        interfaces.forEach((iface) => {
          result.push({
            Interface: name,
            Family: iface.family,
            Address: iface.address,
            Internal: iface.internal
          });
        });
      }
    
      return result;
    }
    
    console.log(getNetworkInfo());
    module.exports = getNetworkInfo;