var test = require('ava');
var myModule = require('../dist/build');

test('the log method', t => {
    t.is(myModule.log('hi'), 'Logging the message : hi');
});
