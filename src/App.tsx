import { Route, Routes, Outlet } from "react-router-dom";
import { GlobalStyles } from "./assets/GlobalStyles";
import { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound/NotFound";

// Lazy-loaded components
const CountryPage = lazy(
  () => import("./features/Home/CountryPage/CountryPage")
);
const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));

const queryClient = new QueryClient();

function Layout({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout isDark={isDark} setIsDark={setIsDark} />}>
              <Route path="/" element={<Home isDark={isDark} />} />
              <Route path="/home" element={<Home isDark={isDark} />} />
              <Route
                path="/:country"
                element={<CountryPage isDark={isDark} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
