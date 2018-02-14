var moment = require('moment');

// moment().format('MMMM Do YYYY, h:mm:ss a');

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
