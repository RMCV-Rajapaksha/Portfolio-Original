import React from 'react';

function MyVolunteering() {
  return (
    <section className='flex flex-wrap items-center justify-center gap-16 pl-20 pr-20 mx-32 my-24' id='projects'>
      <div className="relative w-64 p-5 overflow-hidden duration-500 cursor-pointer group h-80 bg-zinc-800 text-gray-50">
        <div className="">
          <div className="w-full duration-500 bg-blue-400 group-hover:scale-110 h-60">
          <img src="https://images.pexels.com/photos/19730800/pexels-photo-19730800/free-photo-of-an-empty-ski-lift-on-the-background-of-rocky-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="volunteering" />
          </div>
          <div className="absolute left-0 w-56 p-5 duration-500 -bottom-16 group-hover:-translate-y-12">
            <div className="absolute left-0 w-64 duration-500 opacity-0 -z-10 h-28 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">Hover me!</span>
            <p className="w-56 duration-500 opacity-0 group-hover:opacity-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-64 p-5 overflow-hidden duration-500 cursor-pointer group h-80 bg-navBar text-gray-50">
        <div className="">
          <div className="w-full duration-500 bg-blue-400 group-hover:scale-110 h-60">
            <img src="https://images.pexels.com/photos/19730800/pexels-photo-19730800/free-photo-of-an-empty-ski-lift-on-the-background-of-rocky-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="volunteering" />
          </div>
          <div className="absolute left-0 w-56 p-5 duration-500 -bottom-16 group-hover:-translate-y-12">
            <div className="absolute left-0 w-64 duration-500 opacity-0 -z-10 h-28 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">Hover me!</span>
            <p className="w-56 duration-500 opacity-0 group-hover:opacity-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-64 p-5 overflow-hidden duration-500 cursor-pointer group h-150 bg-navBar text-gray-50">
        <div className="">
          <div className="w-full duration-500 bg-blue-400 group-hover:scale-110 h-60">
          <img src="https://images.pexels.com/photos/19730800/pexels-photo-19730800/free-photo-of-an-empty-ski-lift-on-the-background-of-rocky-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="volunteering" />
          </div>
          <div className="absolute left-0 w-56 p-5 duration-500 -bottom-16 group-hover:-translate-y-12">
            <div className="absolute left-0 w-64 duration-500 opacity-0 -z-10 h-28 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">Hover me!</span>
            <p className="w-56 duration-500 opacity-0 group-hover:opacity-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyVolunteering;
