
const error_handler = (err, res) => {
  console.log(err)
  res.send({
    status: "Error",
    code: err.code,
    message: err.message
  })
}

module.exports = {
  error_handler
}