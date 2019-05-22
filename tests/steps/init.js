const { promisify } = require('util')
const awscred = require('awscred')

let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api      = "https://vf9e6n64u3.execute-api.us-east-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table    = "restaurants-hao"
  process.env.AWS_REGION           = "us-east-1"
  process.env.cognito_user_pool_id = "us-east-1_30GkBtuZW"
  process.env.cognito_client_id    = "54eecv61sm1grtsk7u4outguuf"
  process.env.cognito_server_client_id = "1jgi5je4a0gfbif8ck2g9a5nj3"
  
  const { credentials } = await promisify(awscred.load)()
  
  process.env.AWS_ACCESS_KEY_ID     = credentials.accessKeyId
  process.env.AWS_SECRET_ACCESS_KEY = credentials.secretAccessKey
  process.env.TEST_ROOT = "https://vf9e6n64u3.execute-api.us-east-1.amazonaws.com/dev"
  console.log('AWS credential loaded')

  initialized = true
}

module.exports = {
  init
}