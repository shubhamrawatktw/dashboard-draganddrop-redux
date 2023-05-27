import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-[7%_93%]  ">
      <Sidebar />
      <section>
        <Navbar />

        {children}
      </section>
    </main>
  );
};

export default Layout;
