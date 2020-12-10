import { ReactElement } from 'react';

export type searchBar = {
  // eslint-disable-next-line
  searchBarCallback: (value:string) => void;
  searchBarPlaceholder: string;
}

export interface LayoutProps {
  children: any;
  className?: string;
  searchBar?: searchBar;
  header?: ReactElement;
  description?: string;
  type?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
}
