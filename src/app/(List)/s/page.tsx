"use client"

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

type Post = {
  _id: number;
  con: string;
  brn: string;
  coc: number;
  brc: string;
   OC: number;
   BC: number;
  BCM: number;
  MBC: number;
   SC: number;
  SCA: number;
   ST: number;
};


export default function page() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<keyof Post | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const sortedPosts = [...posts].sort((a, b) => {
    if (!sortKey) return 0;
  
    const valA = a[sortKey];
    const valB = b[sortKey];
  
    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortOrder === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
  
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortOrder === 'asc' ? valA - valB : valB - valA;
    }
  
    return 0;
  });

  const handleSort = (key: keyof Post) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleCheckboxChange = (value: string) => {
    const updated = selectedCategories.includes(value)
      ? selectedCategories.filter((item) => item !== value)
      : [...selectedCategories, value];
    setSelectedCategories(updated);
  };

  const filteredPosts = sortedPosts.filter((post) => {
    const matchesSearch =
      post.con.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.brn.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => Number(post[cat as keyof Post]) > 0);

    return matchesSearch && matchesCategory;
  });
    
  return (
    <div className='grid grid-cols-12 gap-2 font-sans p-4 h-full'>
      {/* filter sidebar */}
      <div className='col-start-1 col-end-3 mt-16'>
      <h2 className="uppercase text-lg text-gray-800 font-bold mb-4">Filters</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 pb-4">Bus Types</h3>
          {["seater","sleeper","ac","nonac"].map((cat) => (
            <div key={cat} className="flex items-center gap-2 pb-4 cursor-pointer">
              <input className="cursor-pointer accent-blue-500"
                type="checkbox"
                id={cat}
                checked={selectedCategories.includes(cat)}onChange={() => handleCheckboxChange(cat)}/>
              <label className="text-gray-800 cursor-pointer uppercase" htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 pb-4">Bus Types</h3>
          {["Before 6 am ","6 am to 12 pm","12 pm to 6 pm","After 6 pm"].map((cat) => (
            <div key={cat} className="flex items-center gap-2 pb-4 cursor-pointer">
              <input className="cursor-pointer accent-blue-500"
                type="checkbox"
                id={cat}
                checked={selectedCategories.includes(cat)}onChange={() => handleCheckboxChange(cat)}/>
              <label className="text-gray-800 cursor-pointer" htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 pb-4">Bus Types</h3>
          {["Before 6 am ","6 am to 12 pm","12 pm to 6 pm","After 6 pm"].map((cat) => (
            <div key={cat} className="flex items-center gap-2 pb-4 cursor-pointer">
              <input className="cursor-pointer accent-blue-500"
                type="checkbox"
                id={cat}
                checked={selectedCategories.includes(cat)}onChange={() => handleCheckboxChange(cat)}/>
              <label className="text-gray-800 cursor-pointer" htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>
      </div>

      {/* list of Buses display section */}

      <div className='col-start-3 col-end-13 mt-16'>
      <div className="flex items-center gap-4 w-full pt-6">
        <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded border border-gray-300 w-96 bg-white/50 placeholder-gray-800"
        />

        </div>
      </div>

        <div className='mx-auto grid grid-cols-12 gap-4 bg-grey-500 px-8 pt-8 pb-4'>

          <div className='col-start-1 col-end-2 items-center'>
            <p className='uppercase font-semibold text-center text-gray-800'>sort by :</p>
          </div>

          <div className='col-start-2 col-end-4 cursor-pointer flex gap-1 items-center justify-items-start'
           onClick={() => handleSort('con')}>
            <p className={`capitalize transition-colors duration-200 
              ${sortKey === 'con' ? 'text-red-600' : 'text-gray-800'}`}>college name</p>

            {sortKey === 'con' && (<span className="text-xs text-white transition-transform duration-200">
              {sortOrder === 'asc' ? <ChevronUp /> : <ChevronDown />}</span>)}
          </div>

          <div className='col-start-4 col-end-6 justify-items-center'onClick={() => handleSort('brn')}>
            <div className='cursor-pointer flex gap-1 items-center'>
            <p className={`capitalize transition-colors duration-200 
              ${sortKey === 'brn' ? 'text-red-600' : 'text-gray-800'}`}>branch name</p>

            {sortKey === 'brn' && (<span className="text-xs text-red-600 transition-transform duration-200">
              {sortOrder === 'asc' ? <ChevronUp /> : <ChevronDown />}</span>)}
            </div>
          </div>

          {(selectedCategories.length === 0 ? ["OC", "BC", "BCM", "MBC", "SC", "SCA", "ST"] : 
            selectedCategories).map((cat) => (
            <div key={cat} className='justify-items-center' onClick={() => handleSort(cat as keyof Post)}>
              <div className='cursor-pointer  flex gap-1 items-center'>
               <p className={`uppercase transition-colors duration-200 
                ${sortKey === cat ? 'text-red-600' : 'text-gray-800'}`}>{cat}</p>

               {sortKey === cat as keyof Post && (<span className="text-xs text-red-600 transition-transform duration-200">
                {sortOrder === 'asc' ? <ChevronUp /> : <ChevronDown />}</span>)}
               </div>
            </div>
          ))}  
        </div>

      <ul>
        {loading && <div className="flex justify-center items-center">
      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>}

        {error && <p className="text-center cursor-pointer text-red-500">Error: {error}</p>}

        {!loading && !error && filteredPosts.map((post) => (
          <li key={post._id} className="border rounded-sm cursor-pointer p-6 mx-auto grid grid-cols-12 gap-4 
          bg-white/50 hover:shadow-lg mb-6 h-40 duration-600">

            <div className='col-start-1 col-end-4 cursor-pointer justify-items-center'>
              <p className="font-semibold mb-6 text-center text-gray-800">{post.con}</p>
              <p className="mb-2 text-gray-400 align-center">{post.coc}</p>
            </div>
            <div className='col-start-4 col-end-6 justify-items-center'>
              <p className="font-semibold mb-6 text-center text-blue-400">{post.brn}</p>
              <p  className="mb-2 text-gray-400">{post.brc}</p>
            </div>
            {(selectedCategories.length === 0 ? ["OC", "BC", "BCM", "MBC", "SC", "SCA", "ST"] : 
            selectedCategories).map((cat) => (
                <div key={cat} className='text-gray-800 justify-items-center'>
                  <p> {Number(post[cat as keyof Post]) ? Math.round(Number(post[cat as keyof Post]) * 100) / 100 : "-"}</p>
                </div>
              ))}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
