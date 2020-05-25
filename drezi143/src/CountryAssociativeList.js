import * as React from "react";
import { connect } from "react-redux";

import MapChart from "./MapChart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { NewCountryList } from "./CountryList";
import { NewCountrySearch } from "./CountrySearch";
import { countryInformationFetched } from "./actions/index";

export class CountryAssociativeList extends React.Component {
    state = {
        hasData: true,
        summaryData: [],
    };
    componentDidMount = () => {
        let countryInformation = {};
        let i = 0;
        for (i = 0; i < this.props.countries.length; i++) {
            let countryName = this.props.countries[i].name.toString();
            if (countryName in countryInformation) {
                let table = countryInformation[countryName];
                table.push(this.props.countries[i]);
                countryInformation[countryName] = table;
            } else {
                let table = [];
                table.push(this.props.countries[i]);
                countryInformation[countryName] = table;
            }
        }

        this.props.countryInformationFetched(countryInformation);
        this.setState({ hasData: true });
        let records = countryInformation;
        let summaryData = [];
        i = 0;
        let j = 0;

        for (var key in records) {
            let records_for_day = records[key].length;
            let myPoint = [key, 0, 0, 0];
            for (j = 0; j < records_for_day; j++) {
                myPoint[1] = records[key][j].recovered;
                myPoint[2] = records[key][j].deaths;
                myPoint[3] = records[key][j].confirmed;
            }
            let p = {
                name: key,
                recovered: myPoint[1],
                deaths: myPoint[2],
                confirmed: myPoint[3],
            };
            summaryData.push(p);

            this.setState({ summaryData: summaryData });
        }
    };

    render() {
        if (this.state.hasData) {
            return (
                <Container>
                    <Row className="justify-content-xs-center mt-4">
                        <Col xs={{ offset: 2 }}>
                            <NewCountryList
                                countryInformation={
                                    this.props.countryInformation
                                }
                            />
                        </Col>
                        <Col>
                            {" "}
                            <NewCountrySearch
                                countryInformation={
                                    this.props.countryInformation
                                }
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-xs-center mt-3">
                        <Col xs={12}>
                            <MapChart
                                countryInformation={this.state.summaryData}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return <Container />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        countryInformation: state.countryInformation,
    };
};
const mapDispatchToProps = {
    countryInformationFetched,
};

export const NewCountryAssociativeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryAssociativeList);
