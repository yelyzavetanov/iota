export type ChatsFolderProps = {
    folderName: string;
    isSelected: boolean;
    setSelectedFolder: (folderName: string) => void;
}