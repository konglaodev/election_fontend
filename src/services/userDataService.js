// import http from "../http-common";
// class userDataService {
//   getAll() {
//     return http.get("/getalluser/");
//   }
//   get(id) {
//     return http.get(`/${id}`);
//   }
//   create(data) {
//     return http.post("/adduser", data);
//   }
//   update(id, data) {
//     return http.put(`/getuserid/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(id) {
//     return http.get(`/?title=${id}`);
//   }
// }
// export default new userDataService();