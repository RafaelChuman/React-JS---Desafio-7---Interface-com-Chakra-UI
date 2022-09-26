import Banner from "./images/Banner.png";
import Londres from "./images/Londres.png";
import Paris from "./images/Paris.png";
import Roma from "./images/Roma.png";
import Praga from "./images/Praga.png";
import Amsterda from "./images/Amsterda.png";
import LondresFlag from "./images/LondresFlag.png";
import ParisFlag from "./images/ParisFlag.png";
import RomaFlag from "./images/RomaFlag.png";
import PragaFlag from "./images/PragaFlag.png";
import AmsterdaFlag from "./images/AmsterdaFlag.png";
import logo from "./images/logo.png";

import {
  Image,
  Box,
  Text,
  BoxProps,
  TextProps,
  ImageProps,
  Button,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { appTheme } from "../../theme";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Europa() {

  const [isSmallScreen] = useMediaQuery("(max-width: 80em)");

  
  const ThemeHeader: BoxProps = {
    display: "flex",
    flexDirection: "row",
    margin:"auto",
    color: "white",
    width: { md: "345px", xl: "1160px" },
    height: { md: "50", xl: "100" },
  };

  const themelogo: ImageProps={
    width: { md: "80px", xl: "185px" },
    height: { md: "20px", xl: "46px" },
  };

  const themeBanner: ImageProps={
    width: { md: "375px", xl: "1440px" },
    height: { md: "150", xl: "500" },
  };

  const themeBody: BoxProps = {
    paddingTop: {md:"24px",xl:"80px"},
    width: { md: "345px", xl: "1160px" },
    display: "flex",
    left: "auto",
    flexDirection: { md: "column", xl: "row" },
  };

  const themeContent: TextProps = {
    width: {md:"345px",xl:"600px"},
    fontSize: {md:"14px",xl:"24px"},
    fontWeight: "normal",
    lineHeight: {md:"21px",xl:"36px"},
    textAlign: "justify",
    color: "gray.300",
  };

  const themeInfo: BoxProps = {
    width: {md:"345px",xl:"490px"},
    height: {md:"60px",xl:"99px"},
    margin: "auto",
    marginRight: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: {md:"16px"},
  };

  const themeTitle: TextProps = {
    fontStyle: "normal",
    fontWeight: {md:"600",xl:"600"},
    fontSize: {md:"24px",xl:"48px"},
    lineHeight: {md:"36px",xl:"72px"},
    textAlign: "center",
    color: "#FFBA08",
  };

  const themeSubTitle: TextProps = {
    fontStyle: "normal",
    fontWeight: {md:"400",xl:"600"},
    fontSize: {md:"18px",xl:"24px"},
    lineHeight: {md:"27px",xl:"36px"},
    textAlign: "center",
    color: "#47585B",
  };

  const themeCities: BoxProps = {
    width:{md:"345px",xl:"1160px"},
    height: "700px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: {md:"center",xl:"space-between"},
  };

  const themeCitiesTitle: BoxProps = {
    flexBasis: "100%",
    paddingTop: {md:"32px",xl:"80px"},
    display: "flex",
    width: {md:"345px",xl:"1160px"},
    textAlign: "left",
  };

  const themeCitiesParagraph: BoxProps = {
    fontStyle: "normal",
    fontWeight: {md:"500",xl:"500"},
    fontSize: {md:"24px",xl:"36px"},
    lineHeight: {md:"36px",xl:"54px"},
    textAlign: "left",
    color: "#47585B",
  };

  const themeCity: BoxProps = {
    marginTop:{md:"20px",xl:"40px"},
    width: {md:"256px",xl:"256px"},
    height: "279px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flexStart",

    background: "#FFFFFF",
    border: "1px solid rgba(255, 186, 8, 0.5)",
    borderRadius: "4px",
  };
  const themeCityImage: ImageProps = {
    width: "256px",
    height: "173px",
  };

  const themeCityContent: BoxProps = {
    width: "70%",
    height: "106px",
  };
  const themeCityTitle = {
    paddingTop: "18px",
    paddingLeft: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#47585B",
  };

  const themeCitySubTitle = {
    paddingTop: "12px",
    paddingLeft: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "26px",
  };

  const themeCoutryFlag: BoxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    /* Centering y-axis */
    alignItems: "center",

    width: "30%",
    height: "106px",
  };



  return (
    <>
      <Box {...appTheme} >
        <Box {...ThemeHeader}>
          <Box margin={"auto 0"}>
            <Link to={"/"}>
              <ChevronLeftIcon
                height={isSmallScreen ? "16px" : "32px"}
                width={isSmallScreen ? "16px" : "32px"}
                color={"gray.300"}
              ></ChevronLeftIcon>
            </Link>
          </Box>
          <Box margin={"auto"}>
            <Image {...themelogo} src={logo}></Image>
          </Box>
        </Box>
        <Box>
          <Image {...themeBanner} src={Banner}></Image>
        </Box>
        <Box {...themeBody}>
          <Box>
            <Text {...themeContent}>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente Boxide-se da Ásia a leste pela Boxisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Box {...themeInfo}>
            <Box width="fit-content">
              <Text {...themeTitle}>50</Text>
              <Text {...themeSubTitle}>países</Text>
            </Box>
            <Box>
              <Text {...themeTitle}>60</Text>
              <Text {...themeSubTitle}>línguas</Text>
            </Box>
            <Box>
              <Text {...themeTitle}>27</Text>
              <Text {...themeSubTitle}>cidades +100</Text>
            </Box>
          </Box>
        </Box>
        <Box {...themeCitiesTitle}>
          <Text {...themeCitiesParagraph}>Cidades +100</Text>
        </Box>

        <Box {...themeCities}>
          <Box {...themeCity}>
            <Image {...themeCityImage} src={Londres}></Image>
            <Box {...themeCityContent}>
              <Text {...themeCityTitle}>Londres</Text>
              <Text {...themeCitySubTitle}>Reino Unido</Text>
            </Box>
            <Box {...themeCoutryFlag}>
              <Image src={LondresFlag}></Image>
            </Box>
          </Box>
          <Box {...themeCity}>
            <Image {...themeCityImage} src={Paris}></Image>
            <Box {...themeCityContent}>
              <Text {...themeCityTitle}>Paris</Text>
              <Text {...themeCitySubTitle}>França Unido</Text>
            </Box>
            <Box {...themeCoutryFlag}>
              <Image src={ParisFlag}></Image>
            </Box>
          </Box>
          <Box {...themeCity}>
            <Image {...themeCityImage} src={Roma}></Image>
            <Box {...themeCityContent}>
              <Text {...themeCityTitle}>Roma</Text>
              <Text {...themeCitySubTitle}>Itália</Text>
            </Box>
            <Box {...themeCoutryFlag}>
              <Image src={RomaFlag}></Image>
            </Box>
          </Box>
          <Box {...themeCity}>
            <Image {...themeCityImage} src={Praga}></Image>
            <Box {...themeCityContent}>
              <Text {...themeCityTitle}>Praga</Text>
              <Text {...themeCitySubTitle}>Republica Tcheca</Text>
            </Box>
            <Box {...themeCoutryFlag}>
              <Image src={PragaFlag}></Image>
            </Box>
          </Box>
          <Box {...themeCity}>
            <Image {...themeCityImage} src={Amsterda}></Image>
            <Box {...themeCityContent}>
              <Text {...themeCityTitle}>Amsterdã</Text>
              <Text {...themeCitySubTitle}>Holanda</Text>
            </Box>
            <Box {...themeCoutryFlag}>
              <Image src={AmsterdaFlag}></Image>
            </Box>
          </Box>
          <Box width={"100%"} height={"20px"}></Box>
        </Box>
      </Box>
    </>
  );
}
