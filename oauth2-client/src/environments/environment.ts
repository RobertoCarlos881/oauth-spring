export const environment = {
  production: false,
  authorize_uri: 'http://localhost:9000/oauth2/authorize?',
  client_id: 'client',
  redirect_uri: 'http://localhost:4200/authorized',
  scope: 'openid',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  code_challenge: 'Wh3Z2m77VJPRmXMNAvbdusy1KGxVLOOu_nUsKEvFX5c',
  code_verifier: 'LokROMYhjcAca9TeJ5WBIrV7TbBJyZ6x5wtVDoHBQ1n',
  token_url: 'http://localhost:9000/oauth2/token',
  grant_type: 'authorization_code'
}
