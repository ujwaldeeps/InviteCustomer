const { readFileContents } =  require('./app/FileReader');
const { getEligibleCustomers } =  require('./app/Customer');

const inviteCustomers = async () => {
    const eligibleDistance = 100;
    const contents = await readFileContents('./data/Customers.txt');
    const eligibleCustomers = getEligibleCustomers(contents);
    return eligibleCustomers;
}

module.exports = {
    inviteCustomers
}