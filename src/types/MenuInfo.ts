export interface MenuInfo {
    id: string;
    locationId: string;
    menuSections: MenuSection[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface MenuSection {
    id: string;
    title: string;
    decorator: string;
    menuItems: MenuItem[];
    menuId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface MenuItem {
    id: string;
    title: string;
    description: string;
    price: number;
    menuSectionId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
