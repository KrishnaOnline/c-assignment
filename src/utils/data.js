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

const allData = [
	{ date: '2023-01', value: 62000 },
  { date: '2023-02', value: 62500 },
  { date: '2023-03', value: 63000 },
  { date: '2023-04', value: 64000 },
  { date: '2023-05', value: 63500 },
  { date: '2023-06', value: 63200 },
  { date: '2023-07', value: 64500 },
  { date: '2023-08', value: 65500 },
  { date: '2023-09', value: 65000 },
  { date: '2023-10', value: 66000 },
  { date: '2023-11', value: 65500 },
  { date: '2023-12', value: 66500 },
  { date: '2024-01', value: 66000 },
  { date: '2024-02', value: 65500 },
  { date: '2024-03', value: 65000 },
  { date: '2024-04', value: 64500 },
  { date: '2024-05', value: 64000 },
  { date: '2024-06', value: 63500 },
  { date: '2024-07', value: 63000 },
  { date: '2024-08', value: 63500 },
  { date: '2024-09', value: 64000 },
  { date: '2024-10', value: 63500 },
  { date: '2024-11', value: 63179.71 },
  { date: '2024-12', value: 64850.35 },
];

function filterData(interval) {
	const today = new Date("2024-08-30"); // Assuming today is August 30, 2024
	switch (interval) {
		case "1d":
			return allData.filter(
				(d) => new Date(d.date).getTime() === today.getTime()
			);
		case "3d":
			return allData.filter(
				(d) => new Date(d.date) >= new Date("2024-08-28")
			);
		case "1w":
			return allData.filter(
				(d) => new Date(d.date) >= new Date("2024-08-23")
			);
		case "1m":
			return allData.filter(
				(d) => new Date(d.date) >= new Date("2024-07-30")
			);
		case "6m":
			return allData.filter(
				(d) => new Date(d.date) >= new Date("2024-03-30")
			);
		case "1y":
			return allData.filter(
				(d) => new Date(d.date) >= new Date("2023-08-30")
			);
		case "max":
			return allData;
		default:
			return [];
	}
}

export const data = allData.reverse();
