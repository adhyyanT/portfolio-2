"use client";

import { ButtonType } from "@/types";

export const Button = ({
  children,
  buttonType,
  link,
  ...rest
}: {
  children: React.ReactNode;
  buttonType: ButtonType;
  link?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleResumeDownload = () => {
    const pdfUrl = process.env.NEXT_PUBLIC_RESUME;
    const link = document.createElement("a");
    if (!pdfUrl) return;
    link.href = pdfUrl;
    link.download = "Adhyyan_Tripathi.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  if (buttonType === ButtonType.ResumeDownload)
    return (
      <button
        {...rest}
        className="flex items-center gap-2 rounded-xl buttonPrimary"
        onClick={handleResumeDownload}
      >
        {children}
      </button>
    );
  else if (buttonType === ButtonType.Primary) {
    return (
      <button
        {...rest}
        className="flex items-center gap-2 rounded-xl buttonPrimary"
      >
        {children}
      </button>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 rounded-full justify-center w-[40px] h-[40px]"
    >
      {children}
    </a>
  );
};
