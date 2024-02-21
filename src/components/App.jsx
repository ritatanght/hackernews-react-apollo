import "../styles/App.css";
import CreateLink from "./CreateLink";
import LinkList from "./LinkList";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="/create" element={<CreateLink />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
