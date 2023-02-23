import React from 'react';
import AddCar from '../forms/AddCar';
import AddPerson from '../forms/AddPerson';
import Title from '../layout/Title';
import People from '../lists/People';
import { GET_PEOPLE } from '../../queries';
import { useQuery } from '@apollo/client';

const Home = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  const hasPeople =
    !loading && !error && data.people.length > 0;

  return (
    <div>
      <Title />
      <AddPerson />
      {hasPeople && <AddCar />}
      <People />
    </div>
  );
};

export default Home;
