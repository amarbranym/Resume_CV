"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

interface ISubItem {
  name: string;
  path: string;
}

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
    className={`flex items-center p-3 rounded-lg hover:bg-dark-400 cursor-pointer  justify-between
    ${isActive && "bg-dark-400"}
   `}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default SubMenuItem;
