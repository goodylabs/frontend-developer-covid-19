import * as React from "react";

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export class DataToDrawGraphs extends React.Component {
    state = {
        list: false,
        search: false,
    };

    /*Parsing information to make possible to show it on the graph.
    It's because some countries have one record per day, and
    other countries have more. Function return array of objects,
    where is date and total data for this date.*/
    collectDataForCountry = () => {
        let country = this.props.countries.countryDetail[0].name;
        let record = this.props.countries.countryInformation[0][country];
        let i = 0;

        /*ArrayForEveryDay is Associative Array where key=day,
        value=array of records for this thay.*/
        let arrayForEveryDay = {};
        i = 0;
        for (i = 0; i < record.length; i++) {
            let date = this.formatDate(record[i].date);
            if (date in arrayForEveryDay) {
                let table = arrayForEveryDay[date];
                table.push(record[i]);
                arrayForEveryDay[date] = table;
            } else {
                let table = [];
                table.push(record[i]);
                arrayForEveryDay[date] = table;
            }
        }

        let summaryData = [];
        i = 0;
        let j = 0;
        for (var key in arrayForEveryDay) {
            let recordsPerDay = arrayForEveryDay[key].length;
            let sumOfDataForDay = [key, 0, 0, 0];

            for (j = 0; j < recordsPerDay; j++) {
                sumOfDataForDay[1] += arrayForEveryDay[key][j].recovered;
                sumOfDataForDay[2] += arrayForEveryDay[key][j].deaths;
                sumOfDataForDay[3] += arrayForEveryDay[key][j].confirmed;
            }
            let point = {
                name: key,
                recovered: sumOfDataForDay[1],
                deaths: sumOfDataForDay[2],
                confirmed: sumOfDataForDay[3],
            };
            summaryData.push(point);
        }

        return summaryData;
    };

    formatDate(date) {
        let sliced = date.slice(5, 10);
        let month = sliced.slice(0, 2);
        let day = sliced.slice(3, 5);
        return day + "/" + month;
    }

    render() {
        const data = this.collectDataForCountry();

        return (
            <div>
                <ResponsiveContainer width={1100} height={380}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <Line
                            type="monotone"
                            dataKey="recovered"
                            stroke="#44ff44"
                            yAxisId={0}
                        />
                        <Line
                            type="monotone"
                            dataKey="confirmed"
                            stroke="#ff4444"
                            yAxisId={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="deaths"
                            stroke="#000000"
                            yAxisId={3}
                        />
                        <CartesianGrid stroke="#ccc" />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
