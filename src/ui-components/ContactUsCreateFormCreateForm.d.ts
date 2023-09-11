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
export declare type ContactUsCreateFormCreateFormInputValues = {
    Name?: string;
    EmailId?: string;
    Message?: string;
};
export declare type ContactUsCreateFormCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    EmailId?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsCreateFormCreateFormOverridesProps = {
    ContactUsCreateFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    EmailId?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsCreateFormCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsCreateFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactUsCreateFormCreateFormInputValues) => ContactUsCreateFormCreateFormInputValues;
    onSuccess?: (fields: ContactUsCreateFormCreateFormInputValues) => void;
    onError?: (fields: ContactUsCreateFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsCreateFormCreateFormInputValues) => ContactUsCreateFormCreateFormInputValues;
    onValidate?: ContactUsCreateFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsCreateFormCreateForm(props: ContactUsCreateFormCreateFormProps): React.ReactElement;
