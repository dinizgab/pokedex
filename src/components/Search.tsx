import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value = {query}
        type="text"
        placeholder="Search pokemon..."
        className="bg-slate-100 rounded-3xl h-10 w-100 p-1.5 pl-3.5 color-[#989797] flex"
      />
    </div>
  );
}
