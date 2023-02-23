import React from 'react';
import AddCar from '../forms/AddCar';
import AddPerson from '../forms/AddPerson';
import Title from '../layout/Title';
import People from '../lists/People';

const Home = () => {
  return (
    <div>
      <Title />
      <AddPerson />
      <AddCar />
      <People />
    </div>
  );
};

export default Home;
