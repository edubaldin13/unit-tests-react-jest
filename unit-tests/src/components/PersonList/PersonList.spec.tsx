/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonList from './PersonList';
const mock = [
  {
      name : "eduardo bertoli",
      age: 20,
  },
  {
      name : "eduardo baldin",
      age: 22,
  },
  {
      name : "murilo",
      age: 34,
  }
];
const mockTest = [
  {
      name : "eduardo bertoli",
      age: 20,
  },
  {
      name : "eduardo baldin",
      age: 22,
  },
  {
      name : "murilo",
      age: 24,
  }
];
describe('PersonList component', () => {
  it('it should show each person with age below 25', () => {
    //render method shows the html on terminal
    render(<PersonList personList={mock} />);
    
    // const PersonList = screen.getByTestId('PersonList');
    expect(screen.queryAllByRole('heading', { level: 2}).length).toBeGreaterThanOrEqual(2)

    // expect.assertions(1);
    // expect(PersonList).toBeInTheDocument();
  });
  it('it should list 3 people', () => {
    //render method shows the html on terminal
    const { debug } = render(<PersonList personList={mockTest} />);
    debug();
    // const PersonList = screen.getByTestId('PersonList');
    expect(screen.queryAllByRole('heading', { level: 2}).length).toBeGreaterThan(2)

    // expect.assertions(1);
    // expect(PersonList).toBeInTheDocument();
  });
});