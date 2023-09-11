/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SterlizedComponentOverridesProps = {
    SterlizedComponent?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Base station Carbique - white copy 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Keeps your seltzer cold"?: PrimitiveOverrideProps<TextProps>;
    "The base of Carbique contains the world\u2019s smallest micro-refrigeration technology ever built. Keep your seltzer at a crisp 36\u00BA F for up to 60 hours by charging with the included base station."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SterlizedComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SterlizedComponentOverridesProps | undefined | null;
}>;
export default function SterlizedComponent(props: SterlizedComponentProps): React.ReactElement;
