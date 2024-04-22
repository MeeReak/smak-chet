import { InputDate, Typography } from "@/components/atoms";
import Icon from "@/components/atoms/Icons/Icons";
import React from "react";
import FilterForm from "./FilterForm";

interface PopupProps {
  setModalState: (state: boolean) => void; // Update the type signature to match the actual usage
  Children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ Children, setModalState }) => {
  return (
    <>
      <div className="fixed inset-0 opacity-25 bg-black"></div>
      <div className="fixed inset-0 flex justify-center items-center z-10">
        <div className="bg-white w-[500px] p-5 rounded-xl relative">
          <div>
            <div
              onClick={() => setModalState(false)} // Correctly use the setModalState function to close the modal
              className="cursor-pointer float-end"
            >
              <Icon label={"close"} size="lg"></Icon>
            </div>
            {Children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
