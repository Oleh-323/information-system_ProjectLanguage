import type { Word } from "../../../types/WordTypes";

interface WordListProps {
    words: Word[];
    selectedTag: string;
}

function WordList({ words, selectedTag }: WordListProps) {
    return (
        <div>
            {words.map((word) => (
                <div key={word.id}>
                    <div>ID: {word.id}</div>

                    {Object.entries(word.word)
                        .filter(([tag]) =>
                            selectedTag === "" || tag === selectedTag
                        )
                        .map(([tag, value]) => (
                            <div key={tag}>
                                {tag}: {value}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}

export default WordList;