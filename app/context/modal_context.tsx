"use client";
import React, { useContext, useReducer, createContext } from "react";

const initalState = {
  toggle_modal: false,
  store_project: [],
};

const ModalContext = createContext();

const modal_reducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    const { id, title } = action.payload;
    return {
      ...state,
      store_project: { id, title },
      toggle_modal: !state.toggle_modal,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      toggle_modal: false,
    };
  }
  return state;
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modal_reducer, initalState);

  const toggleModal = (id, title) => {
    dispatch({ type: "OPEN_MODAL", payload: { id, title } });
  };

  const turnOffModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <ModalContext.Provider value={{ ...state, toggleModal, turnOffModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
