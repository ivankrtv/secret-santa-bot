const dotenv = require('dotenv');

dotenv.config();

const conf = {
    APIToken: process.env.TOKEN,
    db: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
    }
};

module.exports = {
    conf
}