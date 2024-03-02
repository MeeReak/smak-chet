"use client";

import { Button, ButtonIcon, ReqCards, Typography, Card } from "@/components";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import { MyContext } from "@/contexts/CardContext";
import { Map } from "@/components";

const Homepage = () => {
  const { CardInfo } = useContext(MyContext);

  const route = useParams();
  const User = route.eventDetail;

  const DetailEvent = CardInfo.find((data) => data.id === User);
  console.log(DetailEvent);

  return (
    <div className="w-[1024px]  m-auto">
      <header className="py-5 flex">
        <div className="w-[70%] ">
          <Typography
            fontSize="h3"
            variant="semibold"
          >{`${DetailEvent?.title}`}</Typography>
        </div>
        <div className="w-[30%] flex justify-end gap-2">
          <ButtonIcon
            className="w-[50px] h-[50px] rounded-lg border border-gray-400"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.21717 10.9073C6.97504 10.4716 6.59508 10.1286 6.13694 9.93227C5.67881 9.73589 5.16843 9.69719 4.68593 9.82226C4.20342 9.94733 3.77611 10.2291 3.47106 10.6233C3.166 11.0175 3.00049 11.5018 3.00049 12.0003C3.00049 12.4987 3.166 12.9831 3.47106 13.3773C3.77611 13.7715 4.20342 14.0532 4.68593 14.1783C5.16843 14.3034 5.67881 14.2647 6.13694 14.0683C6.59508 13.8719 6.97504 13.529 7.21717 13.0933M7.21717 10.9073C7.39717 11.2313 7.50017 11.6033 7.50017 12.0003C7.50017 12.3973 7.39717 12.7703 7.21717 13.0933M7.21717 10.9073L16.7832 5.59328L7.21717 10.9073ZM7.21717 13.0933L16.7832 18.4073L7.21717 13.0933ZM16.7832 18.4073C16.6396 18.6657 16.5484 18.9498 16.5147 19.2434C16.4809 19.537 16.5054 19.8345 16.5866 20.1186C16.6678 20.4028 16.8042 20.6683 16.9879 20.8997C17.1717 21.1312 17.3993 21.3242 17.6577 21.4678C17.916 21.6113 18.2002 21.7026 18.4938 21.7363C18.7874 21.77 19.0848 21.7456 19.369 21.6644C19.6532 21.5832 19.9186 21.4468 20.1501 21.263C20.3816 21.0792 20.5746 20.8517 20.7182 20.5933C21.0081 20.0715 21.0788 19.4559 20.9148 18.8819C20.7508 18.308 20.3655 17.8227 19.8437 17.5328C19.3219 17.2429 18.7063 17.1722 18.1323 17.3362C17.5584 17.5002 17.0731 17.8855 16.7832 18.4073ZM16.7832 5.59328C16.9234 5.85742 17.1149 6.09095 17.3465 6.28021C17.5781 6.46947 17.845 6.61068 18.1318 6.69556C18.4186 6.78044 18.7194 6.80731 19.0166 6.77458C19.3139 6.74185 19.6017 6.65018 19.8631 6.50494C20.1245 6.3597 20.3544 6.1638 20.5392 5.9287C20.7241 5.69359 20.8602 5.42399 20.9396 5.13567C21.019 4.84734 21.0402 4.54607 21.0018 4.24948C20.9635 3.95288 20.8663 3.66691 20.7162 3.40828C20.4202 2.89862 19.9362 2.52542 19.368 2.3689C18.7998 2.21237 18.1929 2.28503 17.6777 2.57124C17.1625 2.85745 16.7802 3.33437 16.6129 3.89948C16.4457 4.46459 16.5068 5.07277 16.7832 5.59328Z"
                  fill="#207BFF"
                />
                <path
                  d="M7.21717 10.9073C6.97504 10.4716 6.59508 10.1286 6.13694 9.93227C5.67881 9.73589 5.16843 9.69719 4.68593 9.82226C4.20342 9.94733 3.77611 10.2291 3.47106 10.6233C3.166 11.0175 3.00049 11.5018 3.00049 12.0003C3.00049 12.4987 3.166 12.9831 3.47106 13.3773C3.77611 13.7715 4.20342 14.0532 4.68593 14.1783C5.16843 14.3034 5.67881 14.2647 6.13694 14.0683C6.59508 13.8719 6.97504 13.529 7.21717 13.0933M7.21717 10.9073C7.39717 11.2313 7.50017 11.6033 7.50017 12.0003C7.50017 12.3973 7.39717 12.7703 7.21717 13.0933M7.21717 10.9073L16.7832 5.59328M7.21717 13.0933L16.7832 18.4073M16.7832 5.59328C16.9234 5.85742 17.1149 6.09095 17.3465 6.28021C17.5781 6.46947 17.845 6.61068 18.1318 6.69556C18.4186 6.78044 18.7194 6.80731 19.0166 6.77458C19.3139 6.74185 19.6017 6.65018 19.8631 6.50494C20.1245 6.35971 20.3544 6.1638 20.5392 5.9287C20.7241 5.69359 20.8602 5.42399 20.9396 5.13567C21.019 4.84734 21.0402 4.54607 21.0018 4.24948C20.9635 3.95288 20.8663 3.66691 20.7162 3.40828C20.4202 2.89862 19.9362 2.52542 19.368 2.3689C18.7998 2.21237 18.1929 2.28503 17.6777 2.57124C17.1625 2.85745 16.7802 3.33437 16.6129 3.89948C16.4457 4.46459 16.5068 5.07277 16.7832 5.59328ZM16.7832 18.4073C16.6396 18.6657 16.5484 18.9498 16.5147 19.2434C16.4809 19.537 16.5054 19.8345 16.5866 20.1186C16.6678 20.4028 16.8042 20.6683 16.9879 20.8997C17.1717 21.1312 17.3993 21.3242 17.6577 21.4678C17.916 21.6113 18.2002 21.7026 18.4938 21.7363C18.7874 21.77 19.0848 21.7456 19.369 21.6644C19.6532 21.5832 19.9186 21.4468 20.1501 21.263C20.3816 21.0792 20.5746 20.8517 20.7182 20.5933C21.0081 20.0715 21.0788 19.4559 20.9148 18.8819C20.7508 18.308 20.3655 17.8227 19.8437 17.5328C19.3219 17.2429 18.7063 17.1722 18.1323 17.3362C17.5584 17.5002 17.0731 17.8855 16.7832 18.4073Z"
                  stroke="#207BFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          ></ButtonIcon>
          <ButtonIcon
            className="w-[50px] h-[50px] rounded-lg border border-gray-400"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z"
                  fill="white"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          ></ButtonIcon>
          <Button colorScheme="primary" className="rounded-lg">
            Apply Now
          </Button>
        </div>
      </header>
      {/* banner */}
      <div className="mt-3 flex justify-center">
        <div className="w-[885px] h-[325.7px] object-cover flex justify-center">
          <img
            src={`${DetailEvent?.src}`}
            alt={`${DetailEvent?.alt}`}
            className="h-full"
          />
        </div>
      </div>
      <hr className="mt-5 w-full h-[2px] bg-black opacity-30"></hr>
      <div>
        <Typography fontSize="h3" variant="bold" className="my-3">
          Event’s Detail
        </Typography>
        <Typography align="justify" fontSize="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel
          repellendus fugiat eius, quibusdam sapiente esse. At repellat
          perspiciatis iusto hic nobis inventore voluptatibus neque iste, itaque
          corporis nemo doloribus consectetur. Facilis ex debitis provident vel
          animi nam alias asperiores tempore. Quidem odit, corrupti aspernatur
          voluptatibus neque dignissimos placeat quo veritatis? Adipisci fugiat
          quos, perspiciatis dicta ipsa dignissimos corrupti tenetur temporibus.
          Recusandae accusamus maiores velit laudantium adipisci sint non
          corporis explicabo corrupti, veritatis, laboriosam aliquid maxime esse
          inventore aliquam vitae odio nesciunt reiciendis? A officiis, sapiente
          quis odio quisquam, eius laboriosam totam id ipsum, possimus
          consequatur vitae alias velit nemo!
        </Typography>
      </div>
      <hr className="mt-5 w-full h-[2px] bg-black opacity-30"></hr>
      {/* requirement */}
      <div className="flex mt-5 justify-between">
        <div className="w-[49%]">
          <Typography fontSize="h3" variant="bold" className="mb-5">
            Requirement
          </Typography>
          <ReqCards></ReqCards>
        </div>
        <div className="w-[49%]">
          <Typography fontSize="h3" variant="bold" className="mb-5">
            Map
          </Typography>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3126568670227!2d104.92259197489524!3d11.601044088602363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f3148296db%3A0x5b289f3f5cef444!2sSabaiCode!5e0!3m2!1skm!2skh!4v1709280237207!5m2!1skm!2skh" />
        </div>
      </div>
      <hr className="mt-5 w-full h-[2px] bg-black opacity-30"></hr>
      {/* You may like */}
      <div className="mt-5">
        <Typography fontSize="h3" variant="bold" className="mb-5">
        You might also be interested in
        </Typography>
        <div className="grid grid-cols-3 gap-[22px]">
            {CardInfo.filter((item) => item.id !== User)
            .slice(0, 3)
            .map((item, index) => (
                <Card
                key={index}
                id={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                date={item.date}
                location={item.location}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
