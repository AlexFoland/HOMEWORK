import React from "react";
import s from "./App.module.css";
import HW4 from "../s2-homeworks/hw04/HW4";

function App() {
  return (
    <div className={s.App}>
      {/*раскомментировать по ходу выполнения*/}
      {/*<HW2/>*/}
      {/*<HW3/>*/}
      <HW4 />
      {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
      {/*<HW5/>*/}
    </div>
  );
}

export default App;
