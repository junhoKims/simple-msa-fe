import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { NewPage } from "./pages/new-page";
const AProject = lazy(
  async () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await import("aProject/App")
);

const Loading = () => <div>로딩 중...</div>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "transparent",
                  }}
                >
                  <AProject />
                </div>
              }
            />
            <Route
              path="/new-page"
              element={<NewPage />}
            />
          </Routes>
        </Suspense>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
