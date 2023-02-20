import React, { ReactNode } from "react";

import D3Page from "../pages/d3/D3Page";
import GridPage from "../pages/grid/GridPage";
import MainPage from "../pages/main/MainPage";

type subMenuProps = {
    title: string;
    href: string;
    component: ReactNode;
};

type MenuProps = {
    title: string;
    href: string;
    component: ReactNode;
    isLeftMenu: boolean;
    children?: subMenuProps[];
};

export const BasicMenu: MenuProps[] = [
    { title: "main", href: "/main", component: <MainPage />, isLeftMenu: true },
    { title: "grid", href: "/grid-layout", component: <GridPage />, isLeftMenu: true },
    { title: "d3-world", href: "/d3-world", component: <D3Page />, isLeftMenu: true },
];
