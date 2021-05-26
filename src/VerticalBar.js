import React from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sell of Biryani',
      data: [12, 19, 33, 45, 23, 73],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: 'red',
      hoverBorderColor: 'darkRed',      
    },
    {
      label: 'Sell of Nihari',
      data: [22, 39, 23, 55, 83, 99],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: 'blue',
      hoverBorderColor: 'darkBlue',

    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <div className='header'>
      <h1 className='title center'>Vertical Bar Chart</h1>
      <Bar data={data} options={options} className='pieClass' />
    </div>
  </>
);

export default VerticalBar;