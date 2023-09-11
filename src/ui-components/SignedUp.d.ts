/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignedUpOverridesProps = {
    SignedUp?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "It\u2019s almost here. Be among the first."?: PrimitiveOverrideProps<TextProps>;
    "By entering your name and email address, we\u2019ll reach out to you the moment our pre-order process opens up. We\u2019ll never sell your information or share it with third-party marketing services."?: PrimitiveOverrideProps<TextProps>;
    Name41072?: PrimitiveOverrideProps<TextProps>;
    "Email Address"?: PrimitiveOverrideProps<TextProps>;
    Name41074?: PrimitiveOverrideProps<ViewProps>;
    "Form Field - Email"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SignedUpProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignedUpOverridesProps | undefined | null;
}>;
export default function SignedUp(props: SignedUpProps): React.ReactElement;
