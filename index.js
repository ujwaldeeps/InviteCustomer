const { readFileContents } =  require('./app/FileReader');
const { getEligibleCustomers } =  require('./app/Customer');

const inviteCustomers = async () => {
    const eligibleDistance = 100;
    const contents = await readFileContents(__dirname + '/data/Customers.txt');
    const eligibleCustomers = getEligibleCustomers(contents);
    return eligibleCustomers;
}


module.exports = {
    inviteCustomers
}