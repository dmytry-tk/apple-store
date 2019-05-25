import axios from 'axios';

export default class Service {

    _apiBase = 'http://localhost:3012';

    getResource = async (url = "") => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    };

    postResource = async (url = "", body) => {
        const { username, email, phone, password } = body;
        const res  = await fetch("http://localhost:3012/register", {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `username=${username}&email=${email}&phone=${phone}&password=${password}`

        });
        const result = await res.json();
        if (!res.ok) {
            throw new Error(`${result.error}`)
        }
        return result;
    };

    getDevices = async (deviceClass) => {
        const devices = await this.getResource(`/${deviceClass}`);
        return devices;
    };


    getDevice = async (deviceClass, deviceId) => {
        const device = await this.getResource(`/${deviceClass}/${deviceId}`);
        return device;
    };

    getUser = async (email, password) => {
        const res = await fetch(`${this._apiBase}/user/${email}/${password}`);
        console.log(res)
        const result = await res.json();
        if (!res.ok) {
            throw new Error(`${result.error}`)
        }
        return await result;
    };

    postRegisterNewUser = async (body) => {
        const res = await this.postResource(`/register`, body);
        return res;
    };

    postOrder = async(body) => {
        const result = axios.post(`${this._apiBase}/order`, {
            body: body
        });
        return result;
    };

}