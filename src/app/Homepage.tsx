import { Button, Trending } from "@/components";
import React from "react";

export const Hpage = () => {
  return (
    <>
      <Button
        leftIcon={
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_2355_266" transform="scale(0.00666667)" />
              </pattern>
              <image
                id="image0_2355_266"
                width="150"
                height="150"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>
        }
        colorScheme="primary"
      >
        Sign up
      </Button>
      <Trending />
    </>
  );
};
