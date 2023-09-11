/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    Address?: PrimitiveOverrideProps<TextProps>;
    Social?: PrimitiveOverrideProps<TextProps>;
    "30201 West 312th Street, 4th Fl. San Junipero, CA, 94103"?: PrimitiveOverrideProps<TextProps>;
    "Twitter Instagram Facebook"?: PrimitiveOverrideProps<TextProps>;
    "Drribbble Uxcel Behance"?: PrimitiveOverrideProps<TextProps>;
    "LinkedIn Tiktok YouTube"?: PrimitiveOverrideProps<TextProps>;
    "Carbique logo 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector41094?: PrimitiveOverrideProps<IconProps>;
    Vector41095?: PrimitiveOverrideProps<IconProps>;
    Vector41096?: PrimitiveOverrideProps<IconProps>;
    Vector41097?: PrimitiveOverrideProps<IconProps>;
    Vector41098?: PrimitiveOverrideProps<IconProps>;
    Vector41099?: PrimitiveOverrideProps<IconProps>;
    Vector410100?: PrimitiveOverrideProps<IconProps>;
    Vector410101?: PrimitiveOverrideProps<IconProps>;
    Vector410102?: PrimitiveOverrideProps<IconProps>;
    Vector410103?: PrimitiveOverrideProps<IconProps>;
    Vector410104?: PrimitiveOverrideProps<IconProps>;
    Vector410105?: PrimitiveOverrideProps<IconProps>;
    Vector410106?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
