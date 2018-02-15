const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(1);
    // console.log(res);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('   ');
    // console.log(res);
    expect(res).toBe(false);
  });

  it('should reject non-string values', () => {
    var res = isRealString('   zzz   ');
    // console.log(res);
    expect(res).toBe(true);
  });
});
