/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HomePageImages } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomePageImagesUpdateFormInputValues = {
    HeroBannerImage?: string;
};
export declare type HomePageImagesUpdateFormValidationValues = {
    HeroBannerImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageImagesUpdateFormOverridesProps = {
    HomePageImagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    HeroBannerImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomePageImagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: HomePageImagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    homePageImages?: HomePageImages;
    onSubmit?: (fields: HomePageImagesUpdateFormInputValues) => HomePageImagesUpdateFormInputValues;
    onSuccess?: (fields: HomePageImagesUpdateFormInputValues) => void;
    onError?: (fields: HomePageImagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomePageImagesUpdateFormInputValues) => HomePageImagesUpdateFormInputValues;
    onValidate?: HomePageImagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HomePageImagesUpdateForm(props: HomePageImagesUpdateFormProps): React.ReactElement;
