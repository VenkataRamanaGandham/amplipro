/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroBannerOverridesProps = {
    HeroBanner?: PrimitiveOverrideProps<ViewProps>;
    "Hero image Carbique 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Introducing Carbique"?: PrimitiveOverrideProps<TextProps>;
    "Carbique is bold. Carbique is beautiful. And unlike other products which contribute negatively to the environment, you only need one of these. In each color."?: PrimitiveOverrideProps<TextProps>;
    "It\u2019s seltzer. From the future."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroBannerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroBannerOverridesProps | undefined | null;
}>;
export default function HeroBanner(props: HeroBannerProps): React.ReactElement;
