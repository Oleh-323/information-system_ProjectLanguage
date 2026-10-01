interface LanguageSelectProps {
    tags: string[];
    selectedTag: string;
    onTagChange: (tag: string) => void;
}

function LanguageSelect({
    tags,
    selectedTag,
    onTagChange
}: LanguageSelectProps) {
    return (
        <select
            value={selectedTag}
            onChange={(event) => onTagChange(event.target.value)}
        >
            <option value="">All Languages</option>

            {tags.map((tag) => (
                <option key={tag} value={tag}>
                    {tag}
                </option>
            ))}
        </select>
    );
}

export default LanguageSelect;