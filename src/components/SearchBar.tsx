"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { MdOutlineSearch } from "react-icons/md";

export const SearchBar = () => {
  const inputRef = useRef(null);
  const router = useRouter();
  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      return inputRef?.current?.["value"] !== ""
        ? router.push(`?term=${inputRef?.current?.["value"]}`)
        : router.push("/");
    }
  };
  return (
    <div className="relative w-full md:w-1/3 text-black mt-5">
      <MdOutlineSearch
        className={
          "absolute top-1/2 -translate-y-1/2 text-lg md:text-[25px] left-3"
        }
      />
      <input
        ref={inputRef}
        type="text"
        onKeyDown={(e) => handleClick(e)}
        className={
          "input input-bordered border border-gray-400 md:input-lg h-9 w-full md:h-10 md:min-w-[419px] rounded-full outline-none placeholder:text-sm md:placeholder:text-lg  ps-8 md:ps-11 "
        }
        placeholder="Search"
      />
    </div>
  );
};
