export interface MenuItemDropdown {
    label: string;
    href: string;
}

export interface MenuItem {
    label: string;
    href?: string;
    dropdown?: MenuItemDropdown[];
}