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
  console.log(homePageImages);
  return (
    <View
      width="1441px"
      height="590px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroBanner")}
      {...rest}
    >
      <Image
        width="97.5%"
        height="93.05%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.54%"
        bottom="4.41%"
        left="0.76%"
        right="1.73%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={homePageImages?.HeroBannerImage}
        {...getOverrideProps(overrides, "harsha-background 1")}
      ></Image>
      <View
        width="1396.48px"
        height="579.02px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1.69%"
        bottom="0.17%"
        left="0%"
        right="3.09%"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(67deg, rgba(250,253,255,1), rgba(250,253,255,0))"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="63.92522048950195px"
        fontWeight="700"
        color="rgba(32,32,32,1)"
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
        color="rgba(32,32,32,1)"
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
