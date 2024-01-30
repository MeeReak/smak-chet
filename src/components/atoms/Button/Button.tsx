'use client'
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

interface ButtonProps{
    children : ReactNode;
    Icon ?: string; 
    className ?: string;
    colorScheme ?: "primary" | "secondary"
}
const Button: FC<ButtonProps> = ({
    children,
    Icon,
    className = "",
    colorScheme = "primary",
})=>{
    const getColorSchemeClass = (scheme: string) => {
        switch (scheme) {
          case "primary":
            return "bg-[#207BFF] hover:bg-[#BCD7FF]"; 
          case "secondary":
            return "bg-[#FF2020]";
          default:
            return "bg-[#207BFF] hover:bg-[rgba(32, 123, 255, 0.30)]";
        }
    }
    const colorSchemeClass = getColorSchemeClass(colorScheme);
    const combinedClassName = `text-center ${colorSchemeClass} ${className}`;

    return (
        <button className={combinedClassName}>
            <img src={Icon} alt="" />
          {children}
        </button>
      );
}

export {Button};