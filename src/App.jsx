import { useState } from 'react';
import Hero from './assets/Hero.jpg';
import { MoveRight } from 'lucide-react';

const App = () => {
   const [name, setName] = useState('RAHIL PATEL');
   const date = new Date().toLocaleDateString().split('/');
   const [day, month, year] = date;
   const monthName = new Date().toLocaleDateString('en-US', { month: 'long' });

   return (
      <div className="relative w-full h-[100vh]">
         <img
            src={Hero}
            alt="Hero section"
            className="w-full h-full object-cover"
         />

         {/* Overlay container */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[93%] h-[85%] border-15 border-white">
               <div>
                  <p className="text-white text-3xl text-shadow-lg font-bold m-5">
                     ChronoCanvas
                  </p>
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
         <div className="absolute inset-0 w-[93%] px-5 h-[14%] ml-11 top-[480px]  flex items-center justify-between  bg-white">
            <div className="flex items-center justify-between gap-10 w-3/4">
               <p className="font-serif text-lg text-shadow-lg tracking-wide border-r-2 border-gray-300 w-full">
                  Customize <br />
                  Your Journey
               </p>
               <div className="flex flex-col justify-center w-full border-r-2 border-gray-300">
                  <p className="font-serif text-sm text-gray-500 text-shadow-lg tracking-wide">
                     Name
                  </p>
                  <select className="font-serif text-shadow-lg tracking-wide outline-none -ml-1 mt-1 w-[90%]">
                     <option value="1">RAHIL PATEL</option>
                  </select>
               </div>
               <div className="flex items-center gap-3 w-full border-r-2 border-gray-300 pr-10">
                  <p className='text-xl  font-serif tracking-wider text-shadow-lg '>Today</p>
                  <MoveRight className='w-full'/>
                  <p className="text-4xl font-black font-serif -mt-2">{day}</p>
                  <div className="flex flex-col justify-center text-sm font-medium text-gray-500 tracking-widest">
                     <p>{monthName}</p>
                     <p>{year}</p>
                  </div>
               </div>
            </div>
            <p className="text-sm border py-3 px-8 rounded-lg bg-black text-white font-medium tracking-wider cursor-pointer hover:bg-black/70 transition-all duration-300">
               GET STARTED
            </p>
         </div>
      </div>
   );
};

export default App;
