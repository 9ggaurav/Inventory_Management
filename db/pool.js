const { Pool } = require("pg");


module.exports = new Pool({
  connectionString: "postgresql://gaurav:_Raut09-@localhost:5432/inventory"
});
