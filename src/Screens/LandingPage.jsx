import React, { useEffect, useState } from 'react';
import Hero from '../assets/Hero.jpg';
import { MoveRight, Plus, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select/creatable';

const LandingPage = () => {
   const options = [{ value: 'rahil', label: 'RAHIL PATEL' }];

   const navigate = useNavigate();
   const dateObj = new Date();
   const day = dateObj.getDate();
   const year = dateObj.getFullYear();
   const monthName = dateObj.toLocaleString('en-US', { month: 'long' });
   const [showInput, setShowInput] = useState(false);
   const [showDropDown, setShowDropDown] = useState(false);
   const [name, setName] = useState('');
   const [nameData, setNameData] = useState([]);
   const [selectedName, setSelectedName] = useState(0);

   useEffect(() => {
      setShowDropDown(true);
      const savedNames = JSON.parse(localStorage.getItem('nameData')) || [];
      setNameData(savedNames);
   }, []);

   const handleSelectChange = (e) => {
    const value = e.target.value;
    console.log(value);
    
      if (value === 'add-new') {
         setShowInput(true);
         setSelectedName('')
         setShowDropDown(false);
      } else {
         setSelectedName(value);
         setShowInput(false);
      }
   };

   const handleAddName = () => {
      if (name.trim()) {
         const updatedNames = [...nameData, name];
         setNameData(updatedNames);
         localStorage.setItem('nameData', JSON.stringify(updatedNames));
         setSelectedName(name);
         setName('');
         setShowInput(false);
         setShowDropDown(true);
      }
   };

   return (
      <div className="relative w-full h-[100vh] select-none">
         <img
            src={Hero}
            alt="Hero section"
            className="w-full h-full object-cover"
         />

         {/* Overlay container */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[93%] h-[90%] border-15 border-white">
               <div>
                  <p className="text-white text-3xl text-shadow-lg font-bold m-5">
                     ChronoCanvas
                  </p>
               </div>
               <div className="w-full absolute -bottom-3 z-10">
                  <div className="py-4 px-5 flex items-center justify-between bg-white">
                     <div className="flex items-center justify-between gap-10 w-3/4">
                        <p className="font-serif text-lg text-shadow-lg tracking-wide border-r-2 border-gray-300 w-full">
                           Customize <br />
                           Your Journey
                        </p>
                        <div className="flex flex-col justify-center w-full border-r-2 border-gray-300">
                           <p className="font-serif text-sm text-gray-500 text-shadow-lg tracking-wide">
                              Name
                           </p>
                           {showDropDown && (
                              <select
                                 className="border-b p-1 outline-none z-10 -ml-1 w-[90%] font-serif"
                                 placeholder="Select Name"
                                 value={selectedName}
                                 onChange={handleSelectChange}>
                                 <option value="">
                                    Select Name
                                 </option>
                                 {nameData?.map((item, idx) => {
                                    return (
                                       <option key={idx} value={item}>
                                          {item}
                                       </option>
                                    );
                                 })}
                                 <option value="add-new">➕ Add Name</option>
                              </select>
                           )}
                           {showInput && (
                              <div className="flex z-10 -ml-1 w-[90%]">
                                 <input
                                    type="text"
                                    value={name}
                                    onChange={(e) =>
                                       setName(e.target.value.toUpperCase())
                                    }
                                    placeholder="Enter Name"
                                    className="border-b p-1 outline-none w-[80%] font-serif"
                                 />
                                 <button
                                    className="bg-black text-white px-3 rounded-lg text-xs font-semibold hover:bg-black/70 transition-all duration-300 cursor-pointer"
                                    onClick={handleAddName}>
                                    ADD
                                 </button>
                              </div>
                           )}
                        </div>
                        <div className="flex items-center gap-3 w-full border-r-2 border-gray-300 pr-10">
                           <p className="text-xl  font-serif tracking-wider text-shadow-lg ">
                              Today
                           </p>
                           <MoveRight className="w-full" />
                           <p className="text-4xl font-black font-serif -mt-2">
                              {day}
                           </p>
                           <div className="flex flex-col justify-center text-sm font-medium text-gray-500 tracking-widest">
                              <p>{monthName}</p>
                              <p>{year}</p>
                           </div>
                        </div>
                     </div>
                     <p
                        className="text-sm border py-3 px-8 rounded-lg bg-black text-white font-medium tracking-wider cursor-pointer hover:bg-black/70 transition-all duration-300 "
                        onClick={() => navigate('/canvas')}>
                        GET STARTED
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-6xl text-shadow-lg font-light font-serif">
               Unleash Your Imagination
            </p>
            <p className="absolute font-serif mt-30 text-white text-2xl text-shadow-lg font-semibold underline-offset-4 tracking-widest rounded-lg px-5 py-1">
               MAKE YOUR OWN CANVAS
            </p>
         </div>
      </div>
   );
};

export default LandingPage;
