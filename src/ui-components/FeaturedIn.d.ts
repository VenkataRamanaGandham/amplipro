/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedInOverridesProps = {
    FeaturedIn?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Featured in"?: PrimitiveOverrideProps<TextProps>;
    "Bloomberg logo-black"?: PrimitiveOverrideProps<ViewProps>;
    "Gizmodo logo-black"?: PrimitiveOverrideProps<ViewProps>;
    "Realsimple logo-black"?: PrimitiveOverrideProps<ViewProps>;
    "Wired logo-black"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FeaturedInProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturedInOverridesProps | undefined | null;
}>;
export default function FeaturedIn(props: FeaturedInProps): React.ReactElement;
