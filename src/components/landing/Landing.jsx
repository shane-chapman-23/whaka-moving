import GridBox from "../../gridComponents/GridBox.jsx";
import GridButton from "../../gridComponents/GridButton.jsx";
import Heading from "./components/Heading.jsx";
import LandingLogo from "./components/LandingLogo.jsx";
import SupportPoints from "./components/SupportPoints.jsx";
import Tagline from "./components/Tagline.jsx";

export default function Landing() {
  console.log();
  return (
    <>
      {/* ==========================HEADING========================== */}
      <GridBox size={{x: 24, y: 3}} position={{x: 1, y: 1}} border="none">
        <Heading />
      </GridBox>
      {/* =========================TAGLINE=========================== */}
      <GridBox size={{x: 17, y: 4}} position={{x: 1, y: 5}} border="none">
        <Tagline />
      </GridBox>
      {/* ======================SUPPORT POINTS======================= */}
      <GridBox
        size={{x: 10, y: 6}}
        position={{x: 1, y: 8}}
        backgroundColour={"#fbf5de"}
      >
        <SupportPoints />
      </GridBox>
      {/* ===========================LOGO============================ */}
      <GridBox
        size={{x: 5, y: 5}}
        position={{x: 20, y: 6}}
        backgroundColour={"#fbf5de"}
      >
        <LandingLogo />
      </GridBox>
      {/* ==========================BUTTON=========================== */}
      <GridButton
        size={{x: 10, y: 3}}
        position={{x: 15, y: 11}}
        backgroundColour="#dc3c22"
        border="none"
        text="Let's Move"
        fontSize="28px"
      ></GridButton>
    </>
  );
}
