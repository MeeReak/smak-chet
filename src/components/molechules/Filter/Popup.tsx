import { InputDate, Typography } from "@/components/atoms";
import Icon from "@/components/atoms/Icons/Icons";
import React from "react";
import FilterForm from "./FilterForm";

const Popup = (props) => {
  return (
    <>
      <div className="fixed inset-0 opacity-25 bg-black"></div>
      <div className="fixed inset-0 flex justify-center items-center z-10">
        <div className="bg-white w-[500px] p-5 rounded-xl relative">
          <div>
            <div
              onClick={() => props.setModalState(false)}
              className="cursor-pointer float-end"
            >
              <Icon label={"close"} size="lg"></Icon>
            </div>
            <FilterForm></FilterForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
