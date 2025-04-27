export interface MenuInfo {
    id: string;
    menuSections: MenuSection[];
}

export interface MenuSection {
    title: string;
    decorator: string;
    menuItems: MenuItem[];
}

export interface MenuItem {
    title: string;
    description: string;
    price: number;
}
