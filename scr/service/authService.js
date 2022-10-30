require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const compare = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);

const verify = (token) => jwt.verify(token, secretOrPublicKey="TEXNAPOS&SHOMANAYSECRET");

const generateToken = (payload) =>
  jwt.sign(payload, secretOrPublicKey='TEXNAPOS&SHOMANAYSECRET');

module.exports =  {
    encryptPassword,
    compare,
    verify,
    generateToken
  };

