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
export declare type ContactUsCreateFormInputValues = {
    Name?: string;
    EmailId?: string;
    Message?: string;
};
export declare type ContactUsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    EmailId?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsCreateFormOverridesProps = {
    ContactUsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    EmailId?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactUsCreateFormInputValues) => ContactUsCreateFormInputValues;
    onSuccess?: (fields: ContactUsCreateFormInputValues) => void;
    onError?: (fields: ContactUsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsCreateFormInputValues) => ContactUsCreateFormInputValues;
    onValidate?: ContactUsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsCreateForm(props: ContactUsCreateFormProps): React.ReactElement;
