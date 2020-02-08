import React, { useState } from 'react';
import authors from '../data/authors.csv';
import books from '../data/books.csv';
import magazines from '../data/magazines.csv';

const fetchCsv = async file => {
  const res = await fetch(file);
  const fileInUnitArray = await res.body.getReader().read();

  console.log({ t: fileInUnitArray });
};

const Read = () => {
  const [allData, setAllData] = useState([]);
  const dataToRead = [authors, books, magazines];

  Promise.all(dataToRead.map(file => fetchCsv(file))).then(fileResult => {
    setAllData(fileResult);
  });

  return (
    <div>
      <h1>All data list</h1>
      {allData.map(row => (
        row && <div>{row}</div>
      ))}
    </div>
  );
}

export default Read;
