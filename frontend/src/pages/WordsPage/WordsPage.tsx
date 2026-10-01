import { useState } from "react";
import { useWords } from "../../hooks/useWords";
import LanguageSelect from "./components/LanguageSelect";
import WordList from "./components/WordList";

function WordsPage() {
    const { words, loading } = useWords();

    const [selectedTag, setSelectedTag] = useState("");

    const tags = Array.from(
        new Set(
            words.flatMap((word) =>
                Object.keys(word.word)
            )
        )
    );

    const filteredWords = words.filter((word) =>
        selectedTag === "" || selectedTag in word.word
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Words</h1>

            <button>+ Add words</button>

            <div>
                <input
                    type="text"
                    placeholder="Search word"
                />

                <LanguageSelect
                    tags={tags}
                    selectedTag={selectedTag}
                    onTagChange={setSelectedTag}
                />

                <WordList 
                    words={filteredWords}
                    selectedTag={selectedTag}
                />
            </div>
        </>
    );
}

export default WordsPage;