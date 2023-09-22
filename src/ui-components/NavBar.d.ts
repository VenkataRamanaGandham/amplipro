/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Product features"?: PrimitiveOverrideProps<TextProps>;
    "Featured in"?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "Sign up"?: PrimitiveOverrideProps<TextProps>;
    "Carbique logo 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector58551?: PrimitiveOverrideProps<IconProps>;
    Vector58552?: PrimitiveOverrideProps<IconProps>;
    Vector58553?: PrimitiveOverrideProps<IconProps>;
    Vector58554?: PrimitiveOverrideProps<IconProps>;
    Vector58555?: PrimitiveOverrideProps<IconProps>;
    Vector58556?: PrimitiveOverrideProps<IconProps>;
    Vector58557?: PrimitiveOverrideProps<IconProps>;
    Vector58558?: PrimitiveOverrideProps<IconProps>;
    Vector58559?: PrimitiveOverrideProps<IconProps>;
    Vector58560?: PrimitiveOverrideProps<IconProps>;
    Vector58561?: PrimitiveOverrideProps<IconProps>;
    Vector58562?: PrimitiveOverrideProps<IconProps>;
    Vector58563?: PrimitiveOverrideProps<IconProps>;
    "icons8_sun 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector58565?: PrimitiveOverrideProps<IconProps>;
    "icons8_waxing_gibbous 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector58567?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    class?: String;
    label?: String;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
