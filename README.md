
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install invite_customers
```

## How to Run

```bash
// 1.Import inviteCustomers promise.

const { inviteCustomers } = require('invite_customers');

// 2. Call this promise as follows, It will return eligibleCustomers as an array
//    Which are not far more than 100 KM distance 

inviteCustomers().then(eligibleCustomers => {
    console.log(eligibleCustomers);
});
```

