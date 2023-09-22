/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SubscribeNow } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SubscribeNowUpdateForm(props) {
  const {
    id: idProp,
    subscribeNow: subscribeNowModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SubscriptionEmailId: "",
  };
  const [SubscriptionEmailId, setSubscriptionEmailId] = React.useState(
    initialValues.SubscriptionEmailId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = subscribeNowRecord
      ? { ...initialValues, ...subscribeNowRecord }
      : initialValues;
    setSubscriptionEmailId(cleanValues.SubscriptionEmailId);
    setErrors({});
  };
  const [subscribeNowRecord, setSubscribeNowRecord] = React.useState(
    subscribeNowModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SubscribeNow, idProp)
        : subscribeNowModelProp;
      setSubscribeNowRecord(record);
    };
    queryData();
  }, [idProp, subscribeNowModelProp]);
  React.useEffect(resetStateValues, [subscribeNowRecord]);
  const validations = {
    SubscriptionEmailId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          SubscriptionEmailId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            SubscribeNow.copyOf(subscribeNowRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SubscribeNowUpdateForm")}
      {...rest}
    >
      <TextField
        label="Subscription email id"
        isRequired={false}
        isReadOnly={false}
        value={SubscriptionEmailId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SubscriptionEmailId: value,
            };
            const result = onChange(modelFields);
            value = result?.SubscriptionEmailId ?? value;
          }
          if (errors.SubscriptionEmailId?.hasError) {
            runValidationTasks("SubscriptionEmailId", value);
          }
          setSubscriptionEmailId(value);
        }}
        onBlur={() =>
          runValidationTasks("SubscriptionEmailId", SubscriptionEmailId)
        }
        errorMessage={errors.SubscriptionEmailId?.errorMessage}
        hasError={errors.SubscriptionEmailId?.hasError}
        {...getOverrideProps(overrides, "SubscriptionEmailId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || subscribeNowModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || subscribeNowModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
