import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Hello World!" />
    </div>
  );
};
