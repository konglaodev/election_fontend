import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.Token.access_token) {
          localStorage.setItem('token', JSON.stringify(response.data.Token.access_token));
         
          
        }
        return response.data, console.log(response.Users.status);
      });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('population');
    localStorage.removeItem('verify');
  }
  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.name,
      username: user.username,
      password: user.password
    });
  }
}
export default new AuthService();