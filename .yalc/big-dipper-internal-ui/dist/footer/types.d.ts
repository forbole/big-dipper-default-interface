import { ReactElement } from 'react';
declare type Donate = {
    text?: string;
    url?: string;
    title?: string;
};
declare type BigDipperLogo = {
    src?: string;
    alt?: string;
};
declare type Links = {
    components?: ReactElement[];
    decorator?: ReactElement | string;
};
export interface FooterProps {
    /**
     * Breakpoint between mobile and desktop component
     */
    breakpoint?: number | string;
    bigDipperLogo?: BigDipperLogo;
    blockExplorerText: string;
    copyrightText: string;
    donate?: Donate;
    links?: Links;
    socialMediaComponents?: ReactElement[];
    storeBadgesComponents?: ReactElement[];
}
export {};
