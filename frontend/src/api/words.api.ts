import {api} from "./axios.ts";
import type {Word} from "../types/WordTypes.tsx";

export const getWords = async():Promise<Word[]>=>{
    const response = await api.get("/words");
    return response.data;
};

export const getWordByPk = async(id:number):Promise<Word>=>{
    const response = await api.get(`/words/${id}`);
    return response.data;
};