import React, { FC } from 'react';
// import { PersonListWrapper } from './PersonList.styled';
import Person from '../Person/Person';
interface PersonListProps { personList:any[]}

const PersonList = (PersonListProps: PersonListProps) => {
//#todo change the array for a api call
//    var personList = [
//       {
//           name : "eduardo bertoli",
//           age: 20,
//       },
//       {
//           name : "eduardo baldin",
//           age: 22,
//       },
//       {
//           name : "murilo",
//           age: 34,
//       }
//   ];
      
         return PersonListProps.personList.map((item: any) => {
            return item.age < 30 ? (<div key={item.age}>
             <Person age={item.age} name={item.name} key={item.age}></Person>
            </div>) : (
               <>
               <h3>I'm old</h3>
               </>
            )
         })
      

      // </div>
   // );
}

export default PersonList;
