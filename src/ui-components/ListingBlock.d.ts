/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingBlockOverridesProps = {
    ListingBlock?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Fizz button Carbique - white 2"?: PrimitiveOverrideProps<ImageProps>;
    "Fizz at the press of a button"?: PrimitiveOverrideProps<TextProps>;
    "Good for carbonating up to 21 drinks, the patented Carbonizer magnetically seals to the inside of the lid. Want to refresh your beverage? Simply set your fizz level and press the top button."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListingBlockProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ListingBlockOverridesProps | undefined | null;
}>;
export default function ListingBlock(props: ListingBlockProps): React.ReactElement;
