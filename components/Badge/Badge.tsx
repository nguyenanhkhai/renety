import React from "react";

type BadgeProps = { badgeContent: number; children: React.ReactNode };

/**
 * Badge component is a custom simple component to show quantities in cart.
 */
const Badge: React.FC<BadgeProps> = ({ badgeContent, children }) => {
  return (
    <div className="badge relative text-[13px]">
      {children}
      {badgeContent > 0 && (
        <span className="badge__content absolute z-10 text-[10px] top-[-10px] right-[-10px] border bg-red rounded-[50%] px-2 py-0 text-white">
          {badgeContent}
        </span>
      )}
    </div>
  );
};

export default Badge;
