import MovingTruck from "./components/MovingTruck.jsx";

import styles from "./App.module.css";
import Landing from "./components/Landing/Landing.jsx";
import Logo from "./components/Logo.jsx";

function App() {
  return (
    <div className={styles.container}>
      <Logo />
      <MovingTruck />
      <Landing />
    </div>
  );
}

export default App;
