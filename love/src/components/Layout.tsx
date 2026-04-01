import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <main className="flex-1 pt-16">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

export default Layout;
