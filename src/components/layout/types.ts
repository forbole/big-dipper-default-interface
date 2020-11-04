export type searchBar = {
  searchBarCallback: (value: string) => void;
  searchBarPlaceholder: string;
}

export interface LayoutProps {
  children: any;
  className?: string;
  searchBar?: searchBar;
}
