const Not_Found = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`)
  res.status(400)
  next(error)
}

const Error_Handler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.MODE_ENV === 'production' ? null : err.stack,
  })
}

export { Not_Found, Error_Handler }
