import Axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        Axios.defaults.headers.common['Authorization'] = token;
        console.log(Axios.defaults.headers.common['Authorization'], 'iiiisuuas')
    } else {
        delete Axios.defaults.headers.common['Authorization'];
    }
};