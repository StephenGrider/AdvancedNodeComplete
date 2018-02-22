const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('keygrip');
const keys = require('../config/keys');
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = () => {
  const sessionObject = {
    passport: {
      user: id
    }
  };
  const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString(
    'base64'
  );

  const sig = keygrip.sign('session=' + sessionString);

  return { session, sig };
};
