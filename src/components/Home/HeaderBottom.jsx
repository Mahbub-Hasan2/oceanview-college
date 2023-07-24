import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../layouts/AuthContextProvider';
import serverdomain from '../../utils/serverdomain';

const HeaderBottom = () => {
  const { setFilter } = useContext(AppContext);

//   useEffect(() => {
//     fetch(`${serverdomain}/colleges/tasks?filter=${filter}`)
//       .then((res) => res.json())
//       .then((data) => setServiceData(data))
//       .catch((error) => {
//         console.error('Error fetching college data:', error);
//         setServiceData([]); // Set empty data or handle the error case accordingly
//       });
//   }, [filter, setServiceData]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setFilter(data.search);
  };

  return (
    <div className="h-auto bg-cover flex justify-center items-center bg-center header-Background text-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
      <div className="bg-gray-950 w-full h-full md:py-28 py-14 bg-opacity-60">
        <form className="container mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="lg:text-5xl md:text-3xl text-xl font-extrabold font-inter text-light uppercase">Oceanview College</h1><br />
          <div className="flex justify-center items-center gap-2">
            <input className="outline-none rounded-md md:p-4 p-1.5 md:w-2/4 w-auto font-semibold text-primary" type="text" {...register("search")} placeholder="Search..." />
            <button className="bg-primary md:py-4 py-1.5 md:px-6 px-2 rounded-md md:font-bold font-semibold md:text-xl text-base text-light" type="submit">Find Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderBottom;
