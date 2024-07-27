const os = require('node:os');
console.log(os);

function getOSInfo() {
    const name = os.platform();
    const type = os.type();
    const version = os.version();
    const architecture = os.arch();
    const cpus = os.cpus().length;
    const totalMemMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const freeMemMB = (os.freemem() / (1024 * 1024)).toFixed(2);
  
    return {
      Name: name,
      Type: type,
      Version: version,
      Architecture: architecture,
      CPUs: cpus,
      TotalMemory: `${totalMemMB} MB`,
      FreeMemory: `${freeMemMB} MB`
    };
  }
  
console.log(getOSInfo());

  module.exports = getOSInfo;