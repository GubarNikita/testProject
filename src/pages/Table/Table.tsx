import { useState } from "react";

import "./table.scss";
import { Header } from "src/components/Header";

export const Table = () => {
  return (
    <section className="table">
      {/* <ModalRegistration active={modalReg} setActive={setModalReg} /> */}
      <Header />

      <div className="table-container"></div>
    </section>
  );
};
