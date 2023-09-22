/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomePageImagesCreateFormInputValues = {
    HeroBannerImage?: string;
};
export declare type HomePageImagesCreateFormValidationValues = {
    HeroBannerImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageImagesCreateFormOverridesProps = {
    HomePageImagesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    HeroBannerImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomePageImagesCreateFormProps = React.PropsWithChildren<{
    overrides?: HomePageImagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HomePageImagesCreateFormInputValues) => HomePageImagesCreateFormInputValues;
    onSuccess?: (fields: HomePageImagesCreateFormInputValues) => void;
    onError?: (fields: HomePageImagesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomePageImagesCreateFormInputValues) => HomePageImagesCreateFormInputValues;
    onValidate?: HomePageImagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function HomePageImagesCreateForm(props: HomePageImagesCreateFormProps): React.ReactElement;
