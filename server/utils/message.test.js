var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message', () => {
    var from = 'fromSomeone';
    var text = 'textFromSomeone';
    var message = generateMessage(from, text);
    // console.log(message);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location', () => {
    var from = 'fromSomeone';
    var latitude = 11;
    var longitude = 22;
    var url = 'https:/www.google.com/maps?q=11,22';
    var message = generateLocationMessage(from, latitude, longitude);
    // console.log(message);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, url });
  });
});
