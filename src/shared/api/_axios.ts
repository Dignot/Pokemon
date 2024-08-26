import axios from "axios";

export class Http {
    _instance;
    constructor(private readonly apiUrl = "/") {
        this._instance = axios.create({
            baseURL: this.apiUrl,
        });
    }

    async get(url: string) {
        return await this._instance.get(url);
    }
}
