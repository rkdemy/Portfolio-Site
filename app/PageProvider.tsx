"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface PageProviderProps {
  children: React.ReactNode;
}

const PageProvider = ({ children }: PageProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default PageProvider;
