/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";
import FullScreenIcon from "./assets/fullscreen.svg";
import CompareIcon from "./assets/compare.svg";
import "@vetixy/circular-std";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { data } from "./utils/data";

// Register chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const data = data;

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-[#1E293B] text-white p-2 rounded shadow-lg">
				<p className="text-sm font-bold">
					${payload[0].value.toFixed(2)}
				</p>
				<p className="text-xs">{label}</p>
			</div>
		);
	}
	return null;
};

const CustomizedLabel = ({ x, y, value, index }) => {
	if (index === data.length - 1) {
		return (
			<g>
				<rect
					x={x - 40}
					y={y - 25}
					width={80}
					height={24}
					rx={12}
					fill="#4F46E5"
				/>
				<text
					x={x}
					y={y - 8}
					fill="white"
					fontSize={12}
					fontWeight="bold"
					textAnchor="middle"
				>
					${value.toFixed(2)}
				</text>
			</g>
		);
	}
	return null;
};
function App() {
	const menuItems = [
		"Summary",
		"Chart",
		"Statistics",
		"Analysis",
		"Settings",
	];
	const rangeBtns = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
	const [activeTab, setActiveTab] = useState(menuItems[1]);
	const [range, setRange] = useState(rangeBtns[2]);
	const [chartData, setChartData] = useState(null);

	// useEffect(() => {
	//     fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo")
	//         .then(response => response.json())
	//         .then(data => {
	//             const monthlyData = data["Monthly Time Series"];
	//             const labels = [];
	//             const closePrices = [];

	//             // Process data to extract dates and close prices
	//             let count = 0;
	//             for(const date in monthlyData) {
	//                 if(count < 12) {
	//                     labels.push((date.split("-"))[2]);
	//                     closePrices.push(parseFloat(monthlyData[date]["4. close"]));
	//                     count++;
	//                 } else {
	//                     break;
	//                 }
	//             }

	//             // Reverse to have chronological order
	//             labels.reverse();
	//             closePrices.reverse();

	//             setChartData({
	//                 labels: labels,
	//                 datasets: [
	//                     {
	//                         label: "IBM Stock Price (Monthly Close)",
	//                         data: closePrices,
	//                         borderColor: "#4B40EE",
	//                         backgroundColor: "#4B40EE",
	//                         fill: true,
	//                     },
	//                 ],
	//             });
	//         });
	// }, []);

	return (
		<div className="mx-auto pt-[60px] pl-[60px] w-[1000px] h-[789px] top-[2px] left-[6px]">
			<div className="amount-area w-[326px] h-[122px]">
				<div className="flex">
					<p className="amount w-[269px] h-[89px]">63,179.71</p>
					<p className="currency mt-[17px] ml-[8px]">USD</p>
				</div>
				<p className="gain mt-[5px]">+ 2,161.42 (3.54%)</p>
			</div>
			<div className="menu-bar flex h-[1000px] flex-col mt-[30px]">
				<div className="flex">
					{menuItems.map((i) => (
						<button
							onClick={() => setActiveTab(i)}
							key={i}
							className={`menu-items cursor-pointer mr-5`}
						>
							<div
								className={`${
									activeTab === i ? "active-tab" : ""
								} text-center`}
							>
								{i}
							</div>
							<div
								className={`${
									activeTab === i ? "bg-[#4B40EE]" : ""
								} px-10 h-[3px] mt-4`}
							></div>
						</button>
					))}
				</div>
				<div className="h-[3px] bg-[#EFF1F3]"></div>
				{/* <div className="h-[3px] w-full bg-[#EFF1F3] -z-10 -mt-[3px]"></div> */}
			</div>
			{/* <div className="chart-area mt-[20px] flex flex-col">
                <div className="relative">
                    <img src={GraphFill} alt="" className="absolute top-0 left-0" />
                    <img src={GraphLine} alt="" className="absolute top-0 left-0" />
                </div>
                <div className="mt-4">
                    <img src={Volume} alt="" />
                </div>
            </div> */}
			{activeTab === "Chart" ? (
				<div>
					<div className="flex gap-8 mt-[50px]">
						<div className="flex items-center gap-2">
							<img src={FullScreenIcon} alt=""></img>
							<p className="actions">Fullscreen</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={CompareIcon} alt=""></img>
							<p className="actions">Compare</p>
						</div>
						<div>
							<div className="">
								{rangeBtns.map((i) => (
									<button
										onClick={() => setRange(i)}
										key={i}
										className={`range-items cursor-pointer mr-1`}
									>
										<div
											className={`${
												range === i
													? "active-range"
													: ""
											} text-center rounded-md p-1`}
										>
											{i}
										</div>
									</button>
								))}
							</div>
						</div>
					</div>
					{/* <div className="chart-area border-l-[1px] border-b-[1px] border-r-[1px]">
                        <div className="mt-[20px] flex flex-col">
                            <div className="relative">
                                <img src={GraphFill} alt="" className="w-full" />
                                <img src={GraphLine} alt="" className="w-full absolute top-0 left-0" />
                            </div>
                            <div className="-translate-y-14">
                                <img src={Volume} alt="" className="w-full"/>
                            </div>
                        </div>
                    </div> */}
					{/* <div className="mt-[20px]">
                        <img src={Chart} alt=""></img>
                    </div> */}
					{/* <div className="chart-area mt-[20px]">
						{chartData ? (
							<Line
								data={chartData}
								options={{ responsive: true }}
							/>
						) : (
							<p>Loading chart...</p>
						)}
					</div> */}
					<div className="chart-area mt-[20px] w-full h-[400px] bg-white">
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart
								data={data}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}
							>
								<CartesianGrid
									strokeDasharray="3 3"
									vertical={false}
									stroke="#e5e7eb"
								/>
								<XAxis
									dataKey="date"
									axisLine={false}
									tickLine={false}
									tick={{ fontSize: 12, fill: "#6b7280" }}
								/>
								<YAxis
									axisLine={false}
									tickLine={false}
									domain={[
										"dataMin - 1000",
										"dataMax + 1000",
									]}
									tickFormatter={(value) =>
										`$${(value / 1000).toFixed(0)}k`
									}
									tick={{ fontSize: 12, fill: "#6b7280" }}
								/>
								<Tooltip content={<CustomTooltip />} />
								<defs>
									<linearGradient
										id="colorValue"
										x1="0"
										y1="0"
										x2="0"
										y2="1"
									>
										<stop
											offset="5%"
											stopColor="#4F46E5"
											stopOpacity={0.1}
										/>
										<stop
											offset="95%"
											stopColor="#4F46E5"
											stopOpacity={0.01}
										/>
									</linearGradient>
								</defs>
								<Area
									type="linear"
									dataKey="value"
									stroke="#4F46E5"
									fill="url(#colorValue)"
									strokeWidth={2}
									isAnimationActive={false}
									label={<CustomizedLabel />}
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
			) : (
				<div className="text-3xl text-[#6F7177] flex justify-center items-center h-[300px]">
					{"Nothing's Here!"}
				</div>
			)}
		</div>
	);
}

export default App;
