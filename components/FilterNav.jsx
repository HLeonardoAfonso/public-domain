"use client"
import { useState } from "react";

const FilterNav = () => {

  const [searchTerm, setSearchTerm] = useState([]);

  return (
    <div className="flex justify-center">
      <input
      className="bg-gray-700 text-white h-7 w-1/3 rounded-full p-5 focus:outline-none"
      type="text"
      placeholder="Search"
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
      />
    </div>
  )
}

export default FilterNav