import React from 'react';
import './Statistics.css';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";


const Statistics = () => {
    const data = [
        {
            name: "Assignment 1",
            marks: 60,

        },
        {
            name: "Assignment 2",
            marks: 56,

        },
        {
            name: "Assignment 3",
            marks: 60,

        },
        {
            name: "Assignment 4",
            marks: 55,

        },
        {
            name: "Assignment 5",
            marks: 60,

        },
        {
            name: "Assignmetn 6",
            marks: 49,

        },
        {
            name: "Assignmnet 7",
            marks: 55,

        },
        {
            name: "Assignmnet 8",
            marks: 60,

        }

    ];

    return (
        <div className='p-20   border-l-4 border-indigo-500 ms-3'>
            <AreaChart
                width={1000}
                height={250}
                data={data}
                margin={{
                    top: 20,
                    right: 50,
                    left: 100,
                    bottom: 0,

                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <div>
                <h3 className='mt-10 text-center underline underline-offset- '>The chart is about all assignment mark</h3>
            </div>
        </div>

    );
};

export default Statistics; <h1>This froom Statistic</h1>