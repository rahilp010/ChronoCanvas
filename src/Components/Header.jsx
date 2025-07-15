import {
   ChevronLeft,
   FastForward,
   Grid3x2,
   SquareMousePointer,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import add from '../assets/add.PNG';
import zoomIn from '../assets/zoomIn.PNG';

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [hover, setHover] = useState(false);
   const [active, setActive] = useState(false);
   const [gridView, setGridView] = useState(false);

   const tools = [
      {
         id: 1,
         name: 'Add',
         icon: add,
         color: 'bg-black',
         textColor: 'text-white',
         hoverColor: 'bg-black/50',
         hoverTextColor: 'text-white',
      },
      {
         id: 2,
         name: 'Zoom',
         icon: zoomIn,
         color: 'bg-black',
         textColor: 'text-white',
         hoverColor: 'bg-black/50',
         hoverTextColor: 'text-white',
      },
   ];

   useEffect(() => {
      setActive(0);
   }, []);

   const handleGridActive = (idx) => {
      idx === 0 ? setGridView(false) : setGridView(true);
      setActive(idx);
   };

   return (
      <div className="flex justify-between w-full m-3 mx-5 rounded-lg select-none overflow-hidden">
         <div
            className={`mt-3 ${
               isOpen ? 'w-1/4' : 'w-12'
            } transition-all duration-300`}>
            {isOpen ? (
               <div>
                  <div
                     className="flex items-center justify-between w-[95%] cursor-pointer"
                     onClick={() => setIsOpen(!isOpen)}>
                     <p className="text-2xl font-bold">ChronoCanvas</p>
                     <ChevronLeft className="mt-2 cursor-pointer" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-[92%] my-10">
                     {tools.map((tool) => {
                        return (
                           <div
                              className="shadow-lg bg-[#C6CFFF] w-full h-full rounded-3xl p-3 relative"
                              onMouseEnter={() => setHover(tool.id)}
                              onMouseLeave={() => setHover(false)}>
                              <img src={tool.icon} />
                              {hover === tool.id && (
                                 <p className="text-center text-lg font-bold transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white/10 flex justify-center items-center rounded-3xl w-full h-full backdrop-blur-sm">
                                    {tool.name}
                                 </p>
                              )}
                           </div>
                        );
                     })}
                  </div>
               </div>
            ) : (
               <div>
                  <CiMenuFries
                     size={25}
                     strokeWidth={0}
                     className="cursor-pointer"
                     onClick={() => setIsOpen(!isOpen)}
                  />
                  <p className="-rotate-90 text-2xl font-bold absolute -left-12 bottom-25 bg-gradient-to-br from-[#55558e] via-[#8cb0ec] to-[#7db8f3] text-transparent bg-clip-text select-none">
                     ChronoCanvas
                  </p>
               </div>
            )}
         </div>
         <div className="border-2 border-gray-300 shadow-lg w-full h-full rounded-4xl transition-all duration-300 relative">
            <div className="flex gap-4 p-2 px-3 m-3 rounded-4xl border border-b-2 border-r-2 shadow-2xs border-violet-300 w-fit text-[#8cb0ec]">
               {[
                  {
                     id: 1,
                     name: 'SquareMousePointer',
                     icon: SquareMousePointer,
                  },
                  {
                     id: 2,
                     name: 'Grid3x2',
                     icon: Grid3x2,
                  },
               ].map((item, idx) => {
                  return (
                     <item.icon
                        size={20}
                        className={`cursor-pointer z-10 ${
                           active === idx ? 'text-[#782aff]' : 'text-[#55558e]'
                        }`}
                        onClick={() => handleGridActive(idx)}
                     />
                  );
               })}
            </div>
            {gridView && (
               <div>
                  <div className="grid grid-cols-12 absolute top-0 w-full">
                     {Array.from({ length: 12 }).map((_, idx) => {
                        return (
                           <div
                              className={`border-r-1 border-dashed h-screen border-gray-300 ${
                                 idx === 11 ? 'border-none' : ''
                              }`}></div>
                        );
                     })}
                  </div>
                  <div className="grid grid-rows-12 absolute top-0 w-full h-full">
                     {Array.from({ length: 12 }).map((_, idx) => {
                        return (
                           <div
                              className={`border-b-1 border-dashed border-gray-300 ${
                                 idx === 11 ? 'border-none' : ''
                              }`}></div>
                        );
                     })}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Header;
