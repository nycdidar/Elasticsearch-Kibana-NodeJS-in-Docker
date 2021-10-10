/**
 * Display response
 * @param express response object
 * @param result result data
 */
 const displayData = (
  res,
  data = {},
  msg = '',
  code = 200,
  status = '',
) => {
  res.status(code).send({
    data,
    message: msg,
    status: status.length > 0 ? status : code === 200 ? 'ok' : 'error',
  });
};

export {
  displayData
}