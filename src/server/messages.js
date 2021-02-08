import Axios from 'axios';

const URL = "http://localhost:3030/";

export const postMessage = async (title, body) => {
    try {
        const res = await Axios.post(URL + "new-message", { title, body });
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getMessages = async () => {
    try {
        const res = await Axios.get(URL + "messages");
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

