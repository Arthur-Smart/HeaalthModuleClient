import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    income: 4000,
    expenses: 2400,
    debts: 2400,
  },
  {
    name: 'Teusday',
     income: 3000,
   expenses: 1398,
       debts: 2210,
  },
  {
    name: 'Wednesday',
     income: 2000,
   expenses: 9800,
       debts: 2290,
  },
  {
    name: 'Thursday',
     income: 2780,
   expenses: 3908,
       debts: 2000,
  },
  {
    name: 'Friday',
     income: 1890,
   expenses: 4800,
       debts: 2181,
  },
  {
    name: 'Saturday',
     income: 2390,
   expenses: 3800,
       debts: 2500,
  },
  {
    name: 'Sunday',
     income: 3490,
   expenses: 4300,
       debts: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.08} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="income" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="expenses" stackId="1" stroke="#82ca9d" fill="#e2726e" />
          <Area type="monotone" dataKey="debts" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
