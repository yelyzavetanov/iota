export type ChatsFolderMenuProps = {
    folders: string[];
    selectedFolder: string;
    setSelectedFolder: (selectedFolder: string) => void;
}