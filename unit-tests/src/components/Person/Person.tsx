import React, { FC } from 'react';
// import { PersonWrapper } from './Person.styled';

export
interface PersonProps { name: string, age: number}
const Person = ( PersonProps: any ) => (
    <>
     <h2>{PersonProps.name}</h2>
     <h2>{PersonProps.age}</h2>
    </>
);
// const Person: FC<PersonProps> = ( PersonProps ) => (
//  <PersonWrapper data-testid="Person">
//     <>
//      <h2>{PersonProps.name}</h2>
//      <h2>{PersonProps.age}</h2>
//     </>
//  </PersonWrapper>
// );

export default Person;
