export type TextSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export type TextWeights = 'light' | 'regular' | 'medium' | 'strong' | 'extraStrong';
export type TextAlignments = 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent' | 'inherit'  | 'initial' | 'unset';
export interface TextFaceItem {
    primarySrc: string;
    secondarySrc: string;
    fontStyle: string;
}
export interface TextTheme {
    sizes:{
        [key in TextSizes]:{
            fontSize:string;
        };
    },
    weights:{
       [key in TextWeights]:{
           weight:string;
       }
    },
    fontFamily: string;
    defaults: {
        textColor: string;
        lineHeight:string;
        hoverColor:string;
        activeColor:string;
        textAlign:string;
        textWeight:string;
        size:string;
    };
}
