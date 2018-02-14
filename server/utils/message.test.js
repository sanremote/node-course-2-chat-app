var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'fromSomeone';
    var text = 'textFromSomeone';
    var message = generateMessage(from, text);
    // console.log(message);
    expect(message).toMatchObject({ from, text });
    expect(typeof message.createdAt).toBe('number');
  });
});
