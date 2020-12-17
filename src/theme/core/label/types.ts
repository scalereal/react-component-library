export type LabelSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface LabelTheme {
    sizes:{
        [key in LabelSizes]:{
            fontSize:string;
        };
    },
    defaults: {
        hoverColor: string;
        labelColor: string;
    };
}
