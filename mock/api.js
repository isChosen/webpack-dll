
const getAbc = (req, res) => {
  res.send({
    code: 1,
    description: '上拉加载更多',
    data: true
  })
}

const postBcd = (req, res) => {
  let result;
  const code = +req.body.code;
  switch(code) {
    case 1:
      result = {
        cd: 3
      }
      break;
    case 2:
      result = {
        cd: 5
      }
      break;
    default:
      result = {
        cd: 8
      }
  }
  res.send(result);
}

module.exports = {
  getAbc,
  postBcd
}