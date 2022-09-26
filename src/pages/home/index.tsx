import banner from "./images/Banner.png";
import bannerSM from "./images/BannerSm.png";
import vidaNoturna from "./images/Cocktail.png";
import praia from "./images/Surf.png";
import moderno from "./images/Building.png";
import classico from "./images/Museum.png";
import more from "./images/Earth.png";
import london from "./images/London.png";
import logo from "./images/logo.png";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper";

import { useMediaQuery } from "@chakra-ui/media-query";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import {
  Box,
  Image,
  Text,
  TextProps,
  ImgProps,
  BoxProps,
  Circle,
  LinkBox,
  LinkOverlay,
  ImageProps,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { CircleIcon } from "../../components/circle";

export function Home() {
  const [isSmallScreen] = useMediaQuery("(max-width: 80em)");

  const ThemeHeader: BoxProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: { md: "375px", xl: "1440px" },
    height: { md: "50", xl: "100" },
  };

  const themelogo: ImageProps={
    width: { md: "80px", xl: "185px" },
    height: { md: "20px", xl: "46px" },
  };

  const themeImg: ImgProps = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  const themeBoxImgs: BoxProps = {
    display: { md: "grid", xl: "flex" },
    marginTop: { md: "12px", xl: "80px" },
    width: { md: "275px", xl: "1160px" },
    height: { md: "144px" },
    gridTemplateAreas: {md: '". ."  ". ."  "MyArea MyArea"'},
    flexDirection: { md: "column", xl: "row" },
    justifyContent: "space-between",
    alignItems: "center",
  };

  const themeLink = "#61dafb";

  const themeTextImgs: TextProps = {
    fontWeight: "semibold",
    fontSize: { md: "large", xl: "2xl" },
    lineHeight: { md: "6", xl: "9" },
    textAlign: "center",
    color: "gray.300",
  };

  const themeNormal: BoxProps = {
    paddingTop: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: { md: "row", xl: "column" },
    width: { xl: "232px" },
    
  };

  const themeSelected: BoxProps = {
    paddingTop: { md: "36px", xl: "36px" },
    width: { md: "60px", xl: "90px" },
    borderBottom: "2px solid #47585B",
  };

  const themeContent: TextProps = {
    fontFamily: "",
    fontWeight: "medium",
    fontSize: { md: "x-large", xl: "4xl" },
    lineHeight: { md: "7.5", xl: "13" },
    textAlign: "center",
    color: "gray.300",
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        margin="auto"
        width={{ md: "375px", xl: "1440px" }}
        flexDirection="column"
      >
        <Box {...ThemeHeader}>
          <Image {...themelogo} src={logo}></Image>
        </Box>
        <Box display="flex" alignItems="center" margin="auto">
          <Image {...themeImg} src={isSmallScreen ? bannerSM : banner}></Image>
        </Box>
        <Box {...themeBoxImgs}>
          <Box {...themeNormal} justifyContent={"left"}>
            {!isSmallScreen && <Image {...themeImg} src={vidaNoturna}></Image>}
            {isSmallScreen && <CircleIcon boxSize={6}></CircleIcon>}
            <Text {...themeTextImgs}>vida noturna</Text>
          </Box>
          <Box {...themeNormal} justifyContent={"right"}>
            {!isSmallScreen && <Image {...themeImg} src={praia}></Image>}
            {isSmallScreen && <CircleIcon boxSize={6}></CircleIcon>}
            <Text {...themeTextImgs}>praia</Text>
          </Box>
          <Box {...themeNormal} justifyContent={"left"}>
            {!isSmallScreen && <Image {...themeImg} src={moderno}></Image>}
            {isSmallScreen && <CircleIcon boxSize={6}></CircleIcon>}
            <Text {...themeTextImgs}>moderno</Text>
          </Box>
          <Box {...themeNormal} justifyContent={"right"}>
            {!isSmallScreen && <Image {...themeImg} src={classico}></Image>}
            {isSmallScreen && <CircleIcon boxSize={6}></CircleIcon>}
            <Text {...themeTextImgs}>clássico</Text>
          </Box>
          <Box {...themeNormal} gridArea= { {md: 'MyArea'} }>
            {!isSmallScreen && <Image {...themeImg} src={more}></Image>}
            {isSmallScreen && <CircleIcon boxSize={6}></CircleIcon>}
            <Text {...themeTextImgs}>e mais...</Text>
          </Box>
        </Box>
        <Box>
          <Box sx={themeSelected}></Box>{" "}
        </Box>

        <Box>
          <Text {...themeContent} paddingTop={{ md: "1.5rem", xl: "3.125rem" }}>
            Vamos nessa?
          </Text>
          <Text {...themeContent}>Então escolha seu continente</Text>
        </Box>

        <>
          <Swiper
            margin-top={isSmallScreen ? "20px" : "50px"}
            margin-bottom={isSmallScreen ? "24px" : "40px"}
            slidesPerView={1}
            zoom={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Zoom, Navigation, Pagination]}
            //className="mySwiper"
          >
            <SwiperSlide>
              <Image as={Link} to="/europa" height={"100%"} >
              <Image src={london}/>
              </Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image as={Link} to="/europa" height={"100%"} >
              <Image src={london}/>
              </Image>
            </SwiperSlide>
          </Swiper>
        </>
      </Box>
    </>
  );
}
