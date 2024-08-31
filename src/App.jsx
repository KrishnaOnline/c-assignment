/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import FullScreenIcon from "./assets/fullscreen.svg";
import CompareIcon from "./assets/compare.svg";
import "@vetixy/circular-std";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
// import { data } from "./utils/data";
import { filterData, formatCurrency, getGainLoss/*, getMaxData*/ } from "./utils/helper";

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
	const [range, setRange] = useState(rangeBtns[6]);
	const [chartData, setChartData] = useState(filterData(range));

    const CustomizedLabel = ({ x, y, value, index }) => {
        if (index === chartData.length - 1) {
            return (
                <>
                    <rect
                        x={x - 70}
                        y={y - 20}
                        className="/*-translate-x-8*/ current-label"
                        width={98}
                        height={33}
                        rx={5}
                        fill="#4B40EE"
                    />
                    <text
                        x={x - 20}
                        y={y + 2}
                        fill="white"
                        // fontSize={18}
                        // fontWeight="bold"
                        className="current-label-text"
                        textAnchor="middle"
                    >
                        {value.toFixed(2)}
                    </text>
                </>
            );
        }
        return null;
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <rect className="px-4 p-2 hover-label">
                    <text className="hover-label-text">
                        {payload[0].value.toFixed(2)}
                    </text>
                </rect>
            );
        }
        return null;
    };

	return (
		<div className="mx-auto pt-[60px] pl-[60px] w-[1000px] h-[789px] top-[2px] left-[6px]">
			<div className="amount-area w-[326px] h-[122px]">
				<div className="flex gap-10">
					<p className="amount w-[269px] h-[89px]">{formatCurrency(chartData[chartData.length-1].value)}</p>
					<p className="currency mt-[17px] ml-[10px]">USD</p>
				</div>
				<p className={`${getGainLoss(chartData).status ? "text-[#67BF6B]" : "text-[#C70039]"} gain-loss mt-[5px]`}>
                    {getGainLoss(chartData).status ? "+" : "-"} {formatCurrency(getGainLoss(chartData).diff.toFixed(2))} ({formatCurrency(getGainLoss(chartData).percent.toFixed(2))}%)
                </p>
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
			{activeTab === "Chart" ? (
				<div>
					<div className="flex gap-8 mt-[50px]">
						<button className="flex items-center gap-2">
							<img src={FullScreenIcon} alt=""></img>
							<p className="actions">Fullscreen</p>
						</button>
						<button className="flex items-center gap-2">
							<img src={CompareIcon} alt=""></img>
							<p className="actions">Compare</p>
						</button>
						<div>
							<div className="">
								{rangeBtns.map((i) => (
									<button
										onClick={() => {
                                            setRange(i);
                                            setChartData(filterData(i));
                                        }}
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
					<div className="chart-area mt-[20px] w-full h-[400px] bg-white">
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart
								data={chartData}
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
										`${(value / 1000).toFixed(0)}k`
									}
									tick={{ fontSize: 12, fill: "#6b7280" }}
								/>
								<Tooltip content={<CustomTooltip />} />
								<defs>
									<linearGradient
										id="colorVal"
										x1="0"
										y1="0"
										x2="0"
										y2="1"
									>
										<stop
											offset="5%"
											stopColor="#E8E7FF"
											stopOpacity={0.9}
										/>
										<stop
											offset="95%"
											stopColor="#E8E7FF"
											stopOpacity={0.1}
										/>
									</linearGradient>
								</defs>
								<Area
									type="linear"
									dataKey="value"
									stroke="#4F46E5"
									fill="url(#colorVal)"
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
