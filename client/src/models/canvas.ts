import {IItem} from "./index";

export interface CanvItemProps{
    item: IItem
    adminVoid: (id: number) => void;
}

export interface CanvasProps{
    items: IItem[];
    isActiveCanvas: boolean;
    handleClose: () => void;
    handleSelectItem: (id:number) => void;
}