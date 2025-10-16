import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();
  
  // List of paths where footer should be hidden
  const noFooterPaths = [
    "/exams/royal-college",
    "/english",
    "/research",
    "/mentors",
    "/about",
    "/products",
    "/labs",
    "/writing",
    "/speaking",
    "/listening",
    "/reading",
    "/exams/plab"
  ];

  const hideFooter = noFooterPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

