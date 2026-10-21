
export const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_FW8m072ZH",
  client_id: "241nr5msig5v7b1vsrc8ckrkc3",
  redirect_uri: `${window.location.origin}/`,
  response_type: "code",
  scope: "openid email profile",
  post_logout_redirect_uri: `${window.location.origin}/`,
};
