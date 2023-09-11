/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function FeaturedIn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="234px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedIn")}
      {...rest}
    >
      <View
        width="1440px"
        height="234px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.06)"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="37px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="49.32099914550781px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="191px"
        height="31.1px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="32.72%"
        bottom="53.99%"
        left="43.61%"
        right="43.13%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Featured in"
        {...getOverrideProps(overrides, "Featured in")}
      ></Text>
      <View
        width="282.84px"
        height="35.84px"
        {...getOverrideProps(overrides, "Bloomberg logo-black")}
      ></View>
      <View
        width="282.84px"
        height="35.84px"
        {...getOverrideProps(overrides, "Gizmodo logo-black")}
      ></View>
      <View
        width="282.84px"
        height="35.84px"
        {...getOverrideProps(overrides, "Realsimple logo-black")}
      ></View>
      <View
        width="282.37px"
        height="35.84px"
        {...getOverrideProps(overrides, "Wired logo-black")}
      ></View>
    </View>
  );
}
