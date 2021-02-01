import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:text-white mx-auto" style={{ maxWidth: "900px" }}>
      {children}
    </div>
  );
};

export default Layout;
