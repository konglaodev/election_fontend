export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.Token.access_token ){
    return { Authorization: 'Bearer ' + user.Token.access_token};
  } else {
    return {};
  }
}