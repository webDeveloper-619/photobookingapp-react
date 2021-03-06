import axios from "axios";

export default {
  authorizeUser: function (authToken) {
    return axios.post("/api/users/auth/", {
      params: {
        token: authToken
      }
    });
  },
  cancelEvent: function (id) {
    return axios.post(`/api/appointments/cancel/:${id}`, {
      params: {
        _id: id
      }
    })
  },
  createNewPackage: function (id, newPackage) {
    return axios.post("/api/packages/new", newPackage);
  },
  createNewUser: function (newUser) {
    return axios.post("/api/users", newUser);
  },
  getAddress: function (options) {
    return axios.request(options)
  },
  getAppointments: async function (appointmentData) {
    return await axios.get("/api/appointments", {
      params: {
        date: appointmentData.date
      }
    });
  },
  getDashboardData: function (userId) {
    return axios.get('/api/appointments/dashboard', {
      params: {
        photographerId: userId
      }
    })
  },
  getPackageData: function (userId) {
    // console.log(userId)
    return axios.get('/api/packages/', {
      params: {
        _id: userId
      }
    })
  },
  getUserData: function (userId) {
    return axios.get('/api/users/dashboard', {
      params: {
        _id: userId
      }
    })
  },
  getUserDataByEmail: function (userEmail) {
    return axios.get(`/api/users/${userEmail}`, {
      params: {
        email: userEmail
      }
    })
  },
  loginUser: function (userLoginData) {
    return axios.get("/api/users/", {
      params: {
        email: userLoginData.email,
        password: userLoginData.password
      }
    });
  },
  saveAppointment: function (appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  },
  updateUser: function (id, update) {
    console.log(update)
    return axios.post(`api/users/update/:${id}`, {
      params: {
        _id: id,
        update
      }
    })
  },
}
