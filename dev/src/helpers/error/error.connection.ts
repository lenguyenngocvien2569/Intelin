const CONNECTION_ERROR_CODE = {
  MARIADB_CONNECTION_ERROR: {
    code: 400,
    message: "Connect to MariaDB fail !",
  },
  MONGODB_CONNECTION_ERROR: {
    code: 400,
    message: "Connect to MongoDB fail !",
  }
}
module.exports = CONNECTION_ERROR_CODE;