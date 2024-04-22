"use client";
import React, { useContext, useState } from "react";
import {
  ButtonIcon,
  Buttontaps,
  Card,
  FilterButton,
  InputData,
  InputSearch,
  Typography,
} from "@/components";
import { MyContext } from "@/contexts/CardContext";

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<number>(0);
  const {CardInfo} = useContext(MyContext)

  const handleOnChange = (event:any) => {
    setSearch(event.target.value);
  };
  const findCard = CardInfo.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="mt-[90px] xl:w-[1024px] w-screen m-auto space-y-5 z-10 ">
        <div className="flex justify-center space-x-3">
          <div className="relative max-[640px] flex justify-between">
            <InputData
              className="w-[305px] h-[44px] rounded-[15px] flex justify-between "
              onChange={(event: any) => handleOnChange(event)}
              placeholder={"Search"}
              type={"string"}
            ></InputData>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-gray-500 w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
          <FilterButton className="rounded-[15px] border-black " />
        </div>
        <div>
          <Typography className="mt-[20px]" fontSize="h2" fontWeight="bold">
            Search Result
          </Typography>
        </div>
        <div className="mt-[10px]  ">
          <Buttontaps setFiltered={setFiltered} filtered={filtered} setCate={function (Cate: string): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
        <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {findCard.map((item) => {
            return (
              <Card
                key={item.id} // Assuming `item.id` is unique; otherwise, you can fallback to index
                id={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                date={item.date}
                location={item.location}
                isFavorite={item.isFavorite}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
