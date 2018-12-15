import React from 'react';
import ReactDOM from 'react-dom';
import { findIntervals, preventKeys } from './hanger';



it('prevents scrolling on arrow keys', () => {
  const arrorKeys = [32, 37, 38, 39, 40];

  document.addEventListener('keypress', (event) => {
    preventKeys( event, arrorKeys )
  })


  document.removeEventListener('keydown', (event) => {
    preventKeys( event, arrorKeys )
  })

});

it('finds iternals', () => {
  let { array, interval } = findIntervals(100, 500, 4)
  console.log(findIntervals(100, 500, 4))

  expect(array).toEqual(expect.arrayContaining([ 100, 200, 300, 400, 500 ]))
  expect(interval).toBe(-100)

})
