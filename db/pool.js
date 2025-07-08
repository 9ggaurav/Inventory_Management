const { Pool } = require("pg");
require("dotenv").config();

const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_ROLE = process.env.POSTGRES_ROLE;

module.exports = new Pool({
  connectionString: `postgresql://${POSTGRES_ROLE}:${POSTGRES_PASSWORD}@localhost:5432/inventory`
});
