export type TextSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface TextTheme {
    sizes:{
        [key in TextSizes]:{
            fontSize:string;
        };
    },
    defaults: {
        textColor: string;
        lineHeight:string;
    };
}
