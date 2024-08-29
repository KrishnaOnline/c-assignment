import { useState } from "react";
import "./App.css";
import FullScreenIcon from "./assets/fullscreen.svg";
import CompareIcon from "./assets/compare.svg";
import GraphFill from "./assets/fill.svg";
import GraphLine from "./assets/line.svg";
import Volume from "./assets/volume.svg";
import Chart from "./assets/chart.svg";
import "@vetixy/circular-std";

function App() {
    const menuItems = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
    const rangeBtns = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
    const [activeTab, setActiveTab] = useState(menuItems[1]);
    const [range, setRange] = useState(rangeBtns[2]);

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
                    {
                        menuItems.map((i) => (
                            <button onClick={() => setActiveTab(i)} key={i} className={`menu-items cursor-pointer mr-5`}>
                                <div className={`${activeTab===i ? "active-tab" : ""} text-center`}>{i}</div>
                                <div className={`${activeTab===i ? "bg-[#4B40EE]" : ""} px-10 h-[3px] mt-4`}></div>
                            </button>
                        ))
                    }
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
            {   
                activeTab==="Chart" 
                ?
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
                                {
                                    rangeBtns.map((i) => (
                                        <button onClick={() => setRange(i)} key={i} className={`range-items cursor-pointer mr-1`}>
                                            <div className={`${range===i ? "active-range" : ""} text-center rounded-md p-1`}>{i}</div>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <img src={Chart} alt=""></img>
                    </div>
                </div>
                :
                <div className="text-3xl text-[#6F7177] flex justify-center items-center h-[300px]">No Data Available!</div>
            }
        </div>
	);
}

export default App;
