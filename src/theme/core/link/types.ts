export type LinkSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface LinkTheme {
    sizes:{
        [key in LinkSizes]:{
            fontSize:string;
        };
    },
    defaults:{
        linkColor: string;
        hoverColor: string;
        activeColor: string;
    }
}
