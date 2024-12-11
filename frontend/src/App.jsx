import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
