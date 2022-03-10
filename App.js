import { Route, Routes } from "react-router-dom";
import ResultFetch from "./ResultFetch";
import FormAdd from "./FormAdd";
import Back from "./back";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<FormAdd />} />
        <Route path="/result" element={<ResultFetch />} />
        <Route path="/back" element={<Back />} />
      </Routes>
    </div>
  );
}
export default App;