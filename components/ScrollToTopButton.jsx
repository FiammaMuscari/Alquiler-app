import React from "react";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="bg-[#472d0e] hover:bg-[#332009] text-white font-bold py-4 px-4 rounded-full fixed bottom-[7rem] right-[2rem] z-[49] shadow-lg"
      onClick={handleScrollToTop}
      title="Ir arriba"
      style={{ borderRadius: "50%" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
