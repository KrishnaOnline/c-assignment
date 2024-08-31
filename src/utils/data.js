// export const data = [
// 	{ date: "2023-01", value: 62000 },
// 	{ date: "2023-02", value: 62500 },
// 	{ date: "2023-03", value: 63000 },
// 	{ date: "2023-04", value: 64000 },
// 	{ date: "2023-05", value: 63500 },
// 	{ date: "2023-06", value: 63200 },
// 	{ date: "2023-07", value: 64500 },
// 	{ date: "2023-08", value: 65500 },
// 	{ date: "2023-09", value: 65000 },
// 	{ date: "2023-10", value: 66000 },
// 	{ date: "2023-11", value: 65500 },
// 	{ date: "2023-12", value: 66500 },
// 	{ date: "2024-01", value: 66000 },
// 	{ date: "2024-02", value: 65500 },
// 	{ date: "2024-03", value: 65000 },
// 	{ date: "2024-04", value: 64500 },
// 	{ date: "2024-05", value: 64000 },
// 	{ date: "2024-06", value: 63500 },
// 	{ date: "2024-07", value: 63000 },
// 	{ date: "2024-08", value: 63500 },
// 	{ date: "2024-09", value: 64000 },
// 	{ date: "2024-10", value: 63500 },
// 	{ date: "2024-12", value: 64850.35 },
// 	{ date: "2024-11", value: 63179.71 },
// ];

export const data = [
    { "date": "2023-08-31", "value": 62145.78 },
    { "date": "2023-09-30", "value": 62578.12 },
    { "date": "2023-10-31", "value": 62789.45 },
    { "date": "2023-11-30", "value": 62845.67 },
    { "date": "2023-12-31", "value": 63456.89 },
    { "date": "2024-01-31", "value": 63978.12 },
    { "date": "2024-02-29", "value": 64789.34 },
    { "date": "2024-03-31", "value": 63545.67 },
    { "date": "2024-04-30", "value": 62845.78 },
    { "date": "2024-05-31", "value": 62245.23 },
    { "date": "2024-06-30", "value": 63012.45 },
    { "date": "2024-07-31", "value": 63250.12 },
    { "date": "2024-07-31", "value": 63245.67 },
    { "date": "2024-08-01", "value": 63012.34 },
    { "date": "2024-08-02", "value": 62825.67 },
    { "date": "2024-08-03", "value": 62540.78 },
    { "date": "2024-08-04", "value": 62980.45 },
    { "date": "2024-08-05", "value": 63120.89 },
    { "date": "2024-08-06", "value": 63360.22 },
    { "date": "2024-08-07", "value": 62810.56 },
    { "date": "2024-08-08", "value": 62500.34 },
    { "date": "2024-08-09", "value": 62895.78 },
    { "date": "2024-08-10", "value": 63045.12 },
    { "date": "2024-08-11", "value": 62955.89 },
    { "date": "2024-08-12", "value": 62800.56 },
    { "date": "2024-08-13", "value": 63112.34 },
    { "date": "2024-08-14", "value": 63250.78 },
    { "date": "2024-08-15", "value": 62890.23 },
    { "date": "2024-08-16", "value": 63045.78 },
    { "date": "2024-08-17", "value": 62860.12 },
    { "date": "2024-08-18", "value": 62750.89 },
    { "date": "2024-08-19", "value": 63120.34 },
    { "date": "2024-08-20", "value": 63345.67 },
    { "date": "2024-08-21", "value": 63078.12 },
    { "date": "2024-08-22", "value": 62890.56 },
    { "date": "2024-08-23", "value": 63210.45 },
    { "date": "2024-08-24", "value": 62590.78 },
    { "date": "2024-08-25", "value": 62045.67 },
    { "date": "2024-08-25", "value": 62845.67 },
    { "date": "2024-08-26", "value": 62635.89 },
    { "date": "2024-08-27", "value": 62845.22 },
    { "date": "2024-08-28", "value": 63255.18 },
    { "date": "2024-08-29", "value": 63525.45 },
    { "date": "2024-08-29", "value": 63525.45 },
    { "date": "2024-08-29", "value": 63485.92 },
    { "date": "2024-08-30", "value": 62678.56 },
    { "date": "2024-08-30", "value": 62678.56 },
    { "date": "2024-08-30", "value": 62715.21 },
    { "date": "2024-08-31", "value": 62874.23 },
    { "date": "2024-08-31", "value": 62915.47 },
    { "date": "2024-08-31", "value": 62821.36 },
    { "date": "2024-08-31", "value": 62790.18 },
    { "date": "2024-08-31", "value": 62905.82 },
    { "date": "2024-08-31", "value": 62874.23 },
    { "date": "2024-08-31", "value": 62874.23 },
    { "date": "2024-08-31", "value": 62845.32 }
];

function filterData(interval) {
	const today = new Date("2024-08-30"); // Assuming today is August 30, 2024
	switch (interval) {
		case "1d":
			return data.filter(
				(d) => new Date(d.date).getTime() === today.getTime()
			);
		case "3d":
			return data.filter(
				(d) => new Date(d.date) >= new Date("2024-08-28")
			);
		case "1w":
			return data.filter(
				(d) => new Date(d.date) >= new Date("2024-08-23")
			);
		case "1m":
			return data.filter(
				(d) => new Date(d.date) >= new Date("2024-07-30")
			);
		case "6m":
			return data.filter(
				(d) => new Date(d.date) >= new Date("2024-03-30")
			);
		case "1y":
			return data.filter(
				(d) => new Date(d.date) >= new Date("2023-08-30")
			);
		case "max":
			return data;
		default:
			return [];
	}
}

console.log(filterData("1w").length);
console.log(data.length);

// export const data = allData.reverse();