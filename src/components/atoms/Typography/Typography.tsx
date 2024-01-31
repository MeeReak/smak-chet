import React, { ReactNode, FC } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "justify" | "right" | "center";
  fontSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "normal" | "semibold" | "bold";
}

const Typography: FC<TypographyProps> = ({
  children,
  className,
  align = "left",
  fontSize = "h4",
  variant = "semibold",
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

  const typographyFontSize = (fontSize: string) => {
    switch (fontSize) {
      case "h1":
        return "text-[48px]";
      case "h2":
        return "text-[40px]";
      case "h3":
        return "text-[32px]";
      case "h4":
        return "text-[24px]";
      case "h5":
        return "text-[20px]";
      case "h6":
        return "text-[16px]";
      default:
        return "text-[20px]";
    }
  };

  const typographyVariant = (variant: string) => {
    switch (variant) {
      case "normal":
        return "font-normal";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      default:
        return "font-semibold";
    }
  };

  const typographyAlignStyles = typographyAlign(align);
  const typographyFontSizeStyles = typographyFontSize(fontSize);
  const typographyVariantStyles = typographyVariant(variant);

  return (
    <div>
      <p
      className={`${typographyVariantStyles}
      ${typographyFontSizeStyles}
      ${typographyAlignStyles}
      ${className}`}
      >
        {children}
      </p>
    </div>
  );
};

export { Typography};

