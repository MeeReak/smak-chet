import React from "react";
import { Button, InputDate, Typography } from "@/components/atoms";

const FilterForm = () => {
  return (
    <>
      <div>
        <Typography fontSize="h4" variant="bold">
          Filter
        </Typography>
      </div>
      <form action="" className="mt-10">
        <div className="mb-5">
          <label htmlFor="date">
            <Typography fontSize="h5" variant="semibold" className="mb-2">
              Date
            </Typography>
          </label>
          <InputDate className="border-[1px] border-black w-[100%] h-[40px] p-5 rounded-lg"></InputDate>
        </div>
        <div>
          <label htmlFor="location">
            <Typography fontSize="h5" variant="semibold" className="mb-2">
              Location
            </Typography>
          </label>
          <select
            name=""
            id="location"
            className="w-[100%] h-[40px] border border-black rounded-lg px-5"
          >
            <option disabled>Select Location</option>
            <option value="">Phnom Penh</option>
            <option value="">Takeo</option>
            <option value="">Siem Reap</option>
          </select>
        </div>
        <div className="w-[100%] mt-5">
          <Button
            colorScheme="primary"
            size="medium"
            className="rounded-lg m-auto"
          >
            Apply
          </Button>
        </div>
      </form>
    </>
  );
};

export default FilterForm;
