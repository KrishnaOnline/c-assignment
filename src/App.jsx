import { useState } from "react";
import "./App.css";
import "@vetixy/circular-std";

function App() {
    const menuItems = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
    const [activeTab, setActiveTab] = useState(menuItems[1]);

	return (
		<div className="mx-auto pt-[60px] pl-[60px] w-[1000px] h-[789px] top-[2px] left-[6px]">
            <div className="amount-area w-[326px] h-[122px]">
                <div className="flex">
                    <p className="amount w-[269px] h-[89px]">63,179.71</p>
                    <p className="currency mt-[17px] ml-[8px]">USD</p>
                </div>
                <p className="gain mt-[3px]">+ 2,161.42 (3.54%)</p>
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
            <div>

            </div>
        </div>
	);
}

export default App;
