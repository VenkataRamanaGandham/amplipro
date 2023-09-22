/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroBanner(props) {
  const { homePageImages, overrides, ...rest } = props;
  return (
    <View
      width="1441px"
      height="590px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroBanner")}
      {...rest}
    >
      <Image
        width="94.24%"
        height="93.05%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.54%"
        bottom="4.41%"
        left="1.67%"
        right="4.09%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={homePageImages?.HeroBannerImage}
        {...getOverrideProps(overrides, "harsha-background 1")}
      ></Image>
      <View
        width="1371.48px"
        height="562.02px"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="63.92522048950195px"
        fontWeight="700"
        color="white"
        lineHeight="85.21231842041016px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="611.45px"
        height="84.94px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.33%"
        bottom="62.27%"
        left="7.51%"
        right="50.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Introducing Carbique"
        {...getOverrideProps(overrides, "Introducing Carbique")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="20.333446502685547px"
        fontWeight="400"
        color="white"
        lineHeight="23.828258514404297px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="491.7px"
        height="69.22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54.51%"
        bottom="33.76%"
        left="7.49%"
        right="58.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Carbique is bold. Carbique is beautiful. And unlike other products which contribute negatively to the environment, you only need one of these. In each color.&#xD;"
        {...getOverrideProps(
          overrides,
          "Carbique is bold. Carbique is beautiful. And unlike other products which contribute negatively to the environment, you only need one of these. In each color."
        )}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="20.333446502685547px"
        fontWeight="400"
        color="rgba(32,32,32,1)"
        lineHeight="23.828258514404297px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="239.06px"
        height="23.98px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.81%"
        bottom="77.12%"
        left="7.51%"
        right="75.9%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="It’s seltzer. From the future.&#xD;"
        {...getOverrideProps(overrides, "It\u2019s seltzer. From the future.")}
      ></Text>
    </View>
  );
}
