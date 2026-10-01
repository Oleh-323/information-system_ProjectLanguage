import { useEffect, useState } from "react";
import type {Word} from "../types/WordTypes.tsx";
import { getWords } from "../api/words.api.ts";

export const useWords = ()=>{
    const [words, setWords]= useState<Word[]>([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        getWords()
            .then((data) => {
                console.log("DATA FROM BACKEND:", data);
                console.log("IS ARRAY:", Array.isArray(data));
                setWords(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(()=>setLoading(false));
            
    }, []);

    return {words, loading};
}