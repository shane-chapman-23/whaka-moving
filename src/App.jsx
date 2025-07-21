import MovingTruck from "./components/MovingTruck.jsx";

import styles from "./App.module.css";
import Logo from "./components/Logo.jsx";
import GridContainer from "./GridContainer.jsx";

function App() {
  return (
    <div className={styles.container}>
      <Logo />
      <MovingTruck />
      <GridContainer />
    </div>
  );
}

export default App;
