export interface ISecondaryHeroTypes {
    title: string,
    logo?: string,
    isSearch?: boolean,
    saveSearchText? : (text: string) => void,
    searchText?: string
};