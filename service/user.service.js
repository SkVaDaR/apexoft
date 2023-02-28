const { v4: uuidv4 } = require('uuid');
const argon2 = require('argon2');
const crypto = require('crypto');
const db = require('../dataBase/index');

module.exports = {
  findAll: async () => {
    const [dbResponse] = await db.up('SELECT * FROM postgres') || [];

    return dbResponse;
  },

  async createUser(userObject) {
    try {
      const { name, email, password } = userObject;
      const id = uuidv4();

      const hashedPassword = await argon2.hash(password);

      const encryptionKey = crypto.randomBytes(32);
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
      let encrypted = cipher.update(hashedPassword);
      encrypted = Buffer.concat([
        encrypted,
        cipher.final()
      ]);

      await db.up.create({
        id,
        name,
        email,
        password: encrypted.toString('hex'),
        encryptionKey: encryptionKey.toString('hex'),
        iv: iv.toString('hex')
      });

      return 200;
    } catch (error) {
      console.log(error);
    }
  }
};
