import React, { ReactNode, FC } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "justify" | "right" | "center";
  fontSize?: "h1" | "h2" | "h3" | "h4" | "h5";
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  color?: "black" | "red" | "blue" | "grey";
  screensize?: "xl" | "sm";
}

const Typography: FC<TypographyProps> = ({
  children,
  className,
  align = "",
  fontSize = "",
  fontWeight = "",
  color = "",
  screensize = "",
}) => {
  const typographyAlign = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "text-left";
    }
  };

  const typographyFontSize = (fontSize: string, screensize: string) => {
    switch (fontSize) {
      case "h1":
        return "text-4xl";
      case "h2":
        return "text-2xl";
      case "h3":
        return "text-xl";
      case "h4":
        return "text-base";
      case "h5":
        return "text-sm";
      default:
        return "text-base";
    }
  };

  const typographyfontWeight = (fontWeight: string) => {
    switch (fontWeight) {
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      default:
        return "font-normal";
    }
  };

  const typographyColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-[#FF2020]";
      case "blue":
        return "text-[#207BFF]";
      case "grey":
        return "text-[#00000099]";
      default:
        return "text-[#000000]";
    }
  };

  const typographyColorStyle = typographyColor(color);
  const typographyAlignStyles = typographyAlign(align);
  const typographyFontSizeStyles = typographyFontSize(fontSize, screensize);
  const typographyfontWeightStyles = typographyfontWeight(fontWeight);

  return (
    <div>
      <p
        className={`${typographyfontWeightStyles}
      ${typographyFontSizeStyles}
      ${typographyAlignStyles}
      ${typographyColorStyle}
      ${className}`}
      >
        {children}
      </p>
    </div>
  );
};

export { Typography };
