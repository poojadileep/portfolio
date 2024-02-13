import React from "react";


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-yellow-600" : "text-[#E38603]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-yellow-600  ${buttonClasses}`}>
        {children}
      </p>
     
    </button>
  );
};

export default TabButton;