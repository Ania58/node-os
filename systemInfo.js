const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

function printSystemInfo() {
  // Retrieve OS information
  const osInfo = getOSInfo();
  console.log('Operating System Information:');
  for (const [key, value] of Object.entries(osInfo)) {
    console.log(`${key}: ${value}`);
  }

  // Retrieve and print network information
  const networkInfo = getNetworkInfo();
  console.log('\nNetwork Interfaces:');
  networkInfo.forEach((info) => {
    console.log(`Interface ${info.Interface}:`);
    console.log(`  Family: ${info.Family}`);
    console.log(`  Address: ${info.Address}`);
    console.log(`  Internal: ${info.Internal}`);
  });
}

// Execute the function to print system information
printSystemInfo();