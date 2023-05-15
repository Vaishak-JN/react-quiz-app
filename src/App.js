import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import QuizContextProvider from "./store/QuizContextProvider";
import Result from "./components/Result";

function App() {
  return (
    <QuizContextProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </QuizContextProvider>
  );
}

export default App;
