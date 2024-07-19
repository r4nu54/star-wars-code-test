import { useContext } from 'react';
import { PeopleContext } from '../core/providers/people.provider';

export const HomePageComponent = () => {
  const { data } = useContext(PeopleContext);

  console.log(data?.results);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
