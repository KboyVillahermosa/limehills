const path = require('path');
const data = require(path.join(__dirname, '..', 'src', 'chat', 'companyData.json'));
console.log(data.description);
