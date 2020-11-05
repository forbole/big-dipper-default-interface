export type searchBar = {
  // eslint-disable-next-line
  searchBarCallback: (value:string) => void;
  searchBarPlaceholder: string;
}

export interface LayoutProps {
  children: any;
  className?: string;
  searchBar?: searchBar;
}
