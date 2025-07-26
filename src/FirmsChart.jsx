import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
 
function FirmsChart({firms}){ 
    const boroughCounts = {}; 

    firms.forEach(firm => {
        boroughCounts[firm.borough] = (boroughCounts[firm.borough] || 0) + 1; 
    }); 

    const chartData = {  
        labels : Object.keys(boroughCounts), 
        datasets: [{  
            label: 'Number of Firms', 
            data: Object.values(boroughCounts), 
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] 

        }]
    }; 
    return (   
        <div>  
            <h2> Firms by borough </h2>  
            <Bar data = {chartData} />  
        </div>
    ); 

} 



export default FirmsChart 
