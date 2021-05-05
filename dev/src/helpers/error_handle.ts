import { Response } from 'express';

const error_handler = (err: any, res: Response) => {
  res.send({
    status: "Error",
    code: err.code,
    message: err.message
  })
}

module.exports = {
  error_handler
}