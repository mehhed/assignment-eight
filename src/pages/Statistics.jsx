import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

export default function Statistics() {
  let getLocalStore = localStorage.getItem("Donaited");
  let localString = JSON.parse(getLocalStore);
  let janinakiKortasi = localString ? localString : [];

  const [myDon, setMydon] = useState();
  const [totalDon, setTotaldon] = useState();
  useEffect(() => {
    let deafultdonait = 12;
    let myDonait = (janinakiKortasi.length / deafultdonait) * 1000;
    setMydon(myDonait);
    console.log(myDonait);

    let totalDonait = 1000 - myDonait;
    setTotaldon(totalDonait);

    console.log(totalDonait);
  }, [janinakiKortasi.length]);

  const data = [
    { name: "total donation", value: totalDon },
    { name: "Your donation", value: myDon },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="text-center flex justify-center items-center">
      <div className="inline-block">
        <PieChart width={300} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
