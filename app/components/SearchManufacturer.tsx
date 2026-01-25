"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filterManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        {/* Button for the combobox. Click on the icon to see the complete dropdown */}
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car-logo"
              className="ml-4"
            />
          </Combobox.Button>
           {/* Input field for searching */}
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
             {filterManufacturer.length === 0 && query !== '' ? (
              <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                   {query} Not found
                </Combobox.Option>
             ) : (
              filterManufacturer.map((item) => (
                <Combobox.Option
                 key={item}
                 className={({active}) => ` relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-900'}`}
                 value={item}
                >
                      {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                </Combobox.Option>
              ))
             )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
