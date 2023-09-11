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
export declare type SubscribeNowCreateFormInputValues = {
    SubscriptionEmailId?: string;
};
export declare type SubscribeNowCreateFormValidationValues = {
    SubscriptionEmailId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubscribeNowCreateFormOverridesProps = {
    SubscribeNowCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SubscriptionEmailId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubscribeNowCreateFormProps = React.PropsWithChildren<{
    overrides?: SubscribeNowCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubscribeNowCreateFormInputValues) => SubscribeNowCreateFormInputValues;
    onSuccess?: (fields: SubscribeNowCreateFormInputValues) => void;
    onError?: (fields: SubscribeNowCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubscribeNowCreateFormInputValues) => SubscribeNowCreateFormInputValues;
    onValidate?: SubscribeNowCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubscribeNowCreateForm(props: SubscribeNowCreateFormProps): React.ReactElement;
