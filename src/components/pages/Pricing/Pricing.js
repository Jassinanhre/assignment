import React from 'react';
import { Bar, Line  } from 'react-chartjs-2';
import "./Pricing.css";
function Pricing() {

       
     
    return (
    <>
        <div className="chart_bar">
           
        <Bar 
        
        data = {{
            
             labels: ['jan' , 'feb',
             'mar', 'apr' , 'may',  'june','july', 'aug','sep','oct','nov', 'dec' , 
             'jan' , 'feb','mar', 'apr' , 'may',  'june','july', 
             'aug','sep', 'july', 'aug','sep','oct','nov', 'dec' , 
             'jan' , 'feb','mar', 'apr' , 'may',  'june','july'],
             datasets: [
                 {
                     label: 'spend $ 3,624',
              data: [2,3,5,3,2,5,4,4,2,4,5,6,3,4,3,3,4,2,2,4,2,1 ,5,6,3,4,3,3,4,2,2,4,2,1], 

                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'],
             }
            ]
        }} 
        height={150}
        width={600}
        options={{
            maintainAspectRatio: false
        }}
        />
       </div>
       <div className="line_chart">
       <Line
        data = {{
            
            labels: ['jan' , 'feb',
            'mar', 'apr' , 'may',  'june','july', 'aug','sep','oct','nov', 'dec' , 
            'jan' , 'feb','mar', 'apr' , 'may',  'june','july', 
            'aug','sep', 'july', 'aug','sep','oct','nov', 'dec' , 
            'jan' , 'feb','mar', 'apr' , 'may',  'june','july'],
            datasets: [
                {
                    label: 'leads $ 1,298',
             data: [2,3,5,3,2,5,4,4,2,4,5,6,3,4,3,3,4,2,2,4,2,1 ,5,6,3,4,3,3,4,2,2,4,2,1], 

               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)'],
            }
           ]
       }} 
       height={150}
       width={600}
       options={{
           maintainAspectRatio: false
       }}
       />
       </div>
       <div className="line_chart">
       <Line
        data = {{
            
            labels: ['jan' , 'feb',
            'mar', 'apr' , 'may',  'june','july', 'aug','sep','oct','nov', 'dec' , 
            'jan' , 'feb','mar', 'apr' , 'may',  'june','july', 
            'aug','sep', 'july', 'aug','sep','oct','nov', 'dec' , 
            'jan' , 'feb','mar', 'apr' , 'may',  'june','july'],
            datasets: [
                {
                    label: 'leads $ 3,4',
             data: [2,5,1,6,0,3,5,2,4,3,4,6,1,2,5,1,6,0,3,5,2,4,3,4,6,1,2,5,1,6,0,3,5,2,4,3,4,6,1],

               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)'],
            }
           ]
       }} 
       height={150}
       width={600}
       options={{
           maintainAspectRatio: false
       }}
       />
           </div>  
       
       </>
    )   
    
}

export default Pricing
