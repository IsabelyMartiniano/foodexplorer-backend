import axios from "axios";

export const api = axios.create({
    baseUrl: "localhost:5173"
});

api.get("//users/:id")