export declare type logo = {
    src: string;
    alt: string;
};
export declare type network = {
    network?: string;
    online?: boolean;
    isNetworkOpen?: boolean;
    openNetwork?: () => void;
};
export declare type searchBar = {
    searchBarPlaceholder?: string;
    searchBarCallback: (value: string | number) => void;
};
export declare type menu = {
    isMenuOpen: boolean;
};
declare type hamburgerIcon = {
    isOpen: boolean;
    onClick: () => void;
};
export interface MobileProps {
    logo?: logo;
    searchBar?: searchBar;
    announcement?: string;
    network?: network;
    menu: menu;
    hamburgerIcon: hamburgerIcon;
}
export {};
