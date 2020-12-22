import axios from "axios";

import settings from "../../settings";

let axiosConfig = {
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
};

export const signUp = user => {
    return axios.post(
        `${process.env.MIX_URL}/api/auth/signup`,
        user,
        axiosConfig
    );
};

export const tokenActivate = token => {
    return axios.get(`${process.env.MIX_URL}/api/auth/signup/activate/${token}`);
};

export const userSignIn = user => {
    return axios.post(`${process.env.MIX_URL}/api/auth/login`, user);
};



export const getUserData = (token) => {
    return axios.get(`${process.env.MIX_URL}/api/auth/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const logout = () => {
    let token = localStorage.getItem("trailshub:all:userToken");
    localStorage.removeItem("trailshub:all:userToken");
    return axios.get(`${process.env.MIX_URL}/api/auth/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
};


export const submitRoute = (trail) => {
    let token = localStorage.getItem("trailshub:all:userToken");
console.log('api submit');
    console.log(trail)
    return axios.post(`${process.env.MIX_URL}/api/auth/trail/submit`,
    trail,
         {
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
};


export const getTrailById = (id) => {
    let token = localStorage.getItem("trailshub:all:userToken");

    return axios.get(`${process.env.MIX_URL}/api/auth/trail/gettrailbyid/${id}`,
         {
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
};

export const getLocationCoords = (location) =>{
    return axios.get(`${process.env.MIX_URL}/api/location/${location}`)
}