/* eslint-disable react/prop-types */
import {useState} from "react";
import "./App.css";
import FullScreenIcon from "./assets/fullscreen.svg";
import CompareIcon from "./assets/compare.svg";
import "@vetixy/circular-std";
import {AreaChart, BarChart, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {filterData, formatCurrency, getGainLoss} from "./utils/helper";

function App() {
	const menuItems = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
	const rangeBtns = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
	const [activeTab, setActiveTab] = useState(menuItems[1]);
	const [range, setRange] = useState(rangeBtns[6]);
	const [chartData, setChartData] = useState(filterData(range));

    const CustomLabel = ({x, y, value, index}) => {
        if(index === chartData.length-1) {
            return (
                <>
                    <rect className="current-label" x={x-70} y={y-20} width={98} height={33} rx={5} fill="#4B40EE" />
                    <text className="current-label-text" x={x-20} y={y+2} fill="white" textAnchor="middle">
                        {value.toFixed(2)}
                    </text>
                </>
            );
        }
        return null;
    };

    const CustomTooltip = ({active, payload}) => {
        if(active && payload && payload.length) {
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
		<div className="mx-auto pt-[30px] pl-[60px] w-[1000px] h-[789px] top-[2px] left-[6px]">
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
						<button className={`menu-items cursor-pointer mr-5`} onClick={() => setActiveTab(i)} key={i}>
							<div className={`${activeTab===i ? "active-tab" : ""} text-center`}>
								{i}
							</div>
							<div className={`${activeTab===i ? "bg-[#4B40EE]" : ""} px-10 h-[3px] mt-4`}></div>
						</button>
					))}
				</div>
				<div className="h-[3px] bg-[#EFF1F3]"></div>
			</div>
			{activeTab === "Chart" ? (
				<div>
					<div className="flex w-[839px] justify-between mt-[50px]">
						<div className="flex gap-9">
                            <button className="flex items-center gap-2">
                                <img src={FullScreenIcon} alt=""></img>
                                <p className="actions">Fullscreen</p>
                            </button>
                            <button className="flex items-center gap-2">
                                <img src={CompareIcon} alt=""></img>
                                <p className="actions">Compare</p>
                            </button>
                        </div>
						<div className="pr-14">
							<div className="">
								{rangeBtns.map((i) => (
									<button className={`range-items cursor-pointer mr-1`} 
                                        onClick={() => {
                                            setRange(i);
                                            setChartData(filterData(i));
                                        }} key={i}
									>
										<div className={`${range === i ? "active-range" : ""} text-center rounded-md p-1`}>
											{i}
										</div>
									</button>
								))}
							</div>
						</div>
					</div>
					<div className="chart-area border border-t-0 border-b-0 border-r-0 mt-[30px] w-full h-[400px] bg-white">
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart data={chartData} width={839} margin={{top:10, right:30, left:0, bottom:0}}>
								<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
								<XAxis hide={true}/>
								<YAxis domain={[61200, 65000]} hide={true}/>
								<Tooltip content={<CustomTooltip/>} />
								<defs>
									<linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#E8E7FF" stopOpacity={0.9}/>
										<stop offset="95%" stopColor="#E8E7FF" stopOpacity={0.1}/>
									</linearGradient>
								</defs>
								<Area type="linear" dataKey="value" stroke="#4B40EE" fill="url(#colorVal)" strokeWidth={2} label={<CustomLabel/>}/>
							</AreaChart>
                            <div className="w-[800px] border border-t-0 border-r-0 h-[31.34px]">
                                <BarChart width={810} height={31.34} data={chartData} margin={{top:0, right:0, left:0, bottom:0}}>
                                    <XAxis hide={true}/>
                                    <YAxis domain={[61200, 65000]} hide={true}/>
                                    <Bar dataKey="value" fill="#E6E8EB" />
                                </BarChart>
                            </div>
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