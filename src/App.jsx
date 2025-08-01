import GridContainer from "./GridContainer.jsx";
import NavBar from "./components/NavBar.jsx";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <GridContainer />
    </div>
  );
}

export default App;
