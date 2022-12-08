declare type Project = {
    description: string;
    permalink: string;
};
declare type DenseTableProps = {
    projects: Project[];
};
export declare const DenseTable: ({ projects }: DenseTableProps) => JSX.Element;
export declare const BetterscanFetchPostureComponent: () => JSX.Element;
export {};
