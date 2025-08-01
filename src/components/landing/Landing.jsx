import GridBox from "../../gridComponents/GridBox.jsx";
import GridButton from "../../gridComponents/GridButton.jsx";
import Heading from "./components/Heading.jsx";
import LandingLogo from "./components/LandingLogo.jsx";
import SupportPoints from "./components/SupportPoints.jsx";

export default function Landing() {
  return (
    <>
      <GridBox size={{x: 12, y: 3}} position={{x: 1, y: 1}} border="none">
        <Heading />
      </GridBox>

      <GridBox size={{x: 6, y: 4}} position={{x: 1, y: 4}}>
        <SupportPoints />
      </GridBox>

      <GridBox size={{x: 3, y: 3}} position={{x: 11, y: 3}}>
        <LandingLogo />
      </GridBox>

      <GridButton
        size={{x: 5, y: 2}}
        position={{x: 9, y: 6}}
        backgroundColour="#dc3c22"
        border="none"
        text="Let's Move"
        fontSize="28px"
      ></GridButton>
    </>
  );
}
