import React, { memo, Component } from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class MapChart extends Component {
    state = {
        tooltipText: "",
        summaryData: [],
    };

    setTooltipText = (val) => {
        this.setState({ tooltipText: val });
    };

    getDataForTooltip = (value) => {
        if (value == "Russia") value = "Russian Federation";
        if (value == "Vietnam") value = "Viet Nam";
        if (value == "Venezuela") value = "Venezuela (Bolivarian Republic)";
        let i = 0;
        for (i = 0; i < this.props.countryInformation.length; i++) {
            if (this.props.countryInformation[i].name == value) {
                return {
                    exist: true,
                    deaths: this.props.countryInformation[i].deaths,
                    confirmed: this.props.countryInformation[i].confirmed,
                    recovered: this.props.countryInformation[i].recovered,
                };
            }
        }
        return { exist: false };
    };

    render() {
        return (
            <>
                <ComposableMap
                    data-tip=""
                    projectionConfig={{ scale: 100 }}
                    width="800"
                    height="300"
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME } = geo.properties;
                                        const data = this.getDataForTooltip(
                                            NAME
                                        );
                                        if (data.exist == false) {
                                            let text = NAME + " - no data";
                                            this.setTooltipText(text);
                                        } else {
                                            let text =
                                                NAME +
                                                " - recovered: " +
                                                data.recovered +
                                                ", confirmed: " +
                                                data.confirmed +
                                                ", deaths: " +
                                                data.deaths;

                                            this.setTooltipText(text);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        this.setTooltipText("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#3040a8",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#102076",
                                            outline: "none",
                                        },
                                    }}
                                ></Geography>
                            ))
                        }
                    </Geographies>
                </ComposableMap>
                <ReactTooltip>{this.state.tooltipText}</ReactTooltip>
            </>
        );
    }
}

export default memo(MapChart);
