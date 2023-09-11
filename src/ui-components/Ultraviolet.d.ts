/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UltravioletOverridesProps = {
    Ultraviolet?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Bottle animation 0089 3"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Ultra-lightweight, ultraviolet"?: PrimitiveOverrideProps<TextProps>;
    "Carbique is made from anodized titanium and was specifically designed to preserve the freshness of your seltzer. Built-in ultraviolet light kills germs and keeps your drink clean and pure."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UltravioletProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UltravioletOverridesProps | undefined | null;
}>;
export default function Ultraviolet(props: UltravioletProps): React.ReactElement;
