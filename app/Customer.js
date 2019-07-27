const { calculateDistance } =  require('./Distance');

function getEligibleCustomers(customers) {
   const latDubin = 53.339428;
   const longDubin = -6.257664;
   const eligibleCustomers = [];
   for (const customer of customers) {
       const distance = calculateDistance(latDubin, longDubin, customer.latitude, customer.longitude);
       if (distance >= 100) {
           eligibleCustomers.push(customer);
       }
   }
   return eligibleCustomers;
}

module.exports = {
    getEligibleCustomers
}