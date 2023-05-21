"use client";
import React, { useContext, useReducer, createContext } from "react";

const initialState = {
  isSideBarOpen: false,
};

const MenuContext = createContext();

const products_reducer = (state: any, action: any) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSideBarOpen: true };
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSideBarOpen: false };
  }
};

export const MenuProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(products_reducer, initialState);

  // Open menu
  const openSideBar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };
  // Close menu
  const closeSideBar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  const ctx = {
    toggleSide: state.isSideBarOpen,
    openSideBar,
    closeSideBar,
  };

  return <MenuContext.Provider value={ctx}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
