import { data } from "./data";

export function getMaxData(data) {
    const maxData = [];
    const maxi = Math.max(...data.map(item => item.value));
    console.log(maxi);
    let i = 0;
    while(data[i].value!=maxi) {
        i++;
        maxData.push(data[i]);
    }
    return maxData;
}

export function filterData(interval) {
    const today = new Date("2024-08-30");
    switch(interval) {
        case "1d":
            return data.filter(d => new Date(d.date).getTime() === today.getTime());
        case "3d":
            return data.filter(d => new Date(d.date) >= new Date("2024-08-28"));
        case "1w":
            return data.filter(d => new Date(d.date) >= new Date("2024-08-23"));
        case "1m":
            return data.filter(d => new Date(d.date) >= new Date("2024-07-30"));
        case "6m":
            return data.filter(d => new Date(d.date) >= new Date("2024-03-30"));
        case "1y":
            return data.filter(d => new Date(d.date) >= new Date("2023-08-30"));
        case "max":
            return getMaxData(data);
        default:
            return [];
    }
}

export const getGainLoss = (chartData) => {
    const len = chartData.length;
    const curr = chartData[len-1].value;
    const prev = chartData[len-2].value;
    let diff = curr-prev;
    let percent = (diff/curr)*100;
    let status = 0;
    if(diff < 0) status = 0;
    else status = 1;
    return {
        status, 
        diff: Math.abs(diff), 
        percent: Math.abs(percent),
    };
}

export const formatCurrency = (num) => {
    const formatter = new Intl.NumberFormat();
    return formatter.format(num);
}