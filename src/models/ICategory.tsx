
export interface ICategory {
    name: string;
    id: number;
    children_category: {
        name: string;
        id: number;
    }[],
    parent_category: {
        name: string;
        id: number;
    } | null;
}

export interface INewCategory {
    name: string;
    parent_category_id: number | null
}