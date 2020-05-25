import * as React from "react";
import { connect } from "react-redux";

import { CountryItem } from "./CountryItem";
import { countryToGetDetailFetched } from "./actions/index";
import { DataToDrawGraphs } from "./DataToDrawGraphs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class CountryList extends React.Component {
    state = {
        hasCountry: false,
        open: false,
    };

    closeModal = () => {
        this.setState({ open: false });
        this.setState({ hasCountry: false });
    };

    openModal = () => {
        this.setState({ open: true });
    };

    handleDropdownChange = (e) => {
        var countryDetails = {
            name: e.target.value,
        };
        this.props.countryToGetDetailFetched(countryDetails);
        this.setState({ hasCountry: true });
        this.openModal();
    };

    countryToItem = (value) => {
        return <CountryItem name={value} />;
    };

    render() {
        let nameArray = [];
        for (let key in this.props.countryInformation[0]) {
            nameArray.push(key);
        }
        if (this.state.hasCountry)
            return (
                <div>
                    <div>
                        <select
                            id="dropdown"
                            onChange={this.handleDropdownChange}
                        >
                            {nameArray.map(this.countryToItem)}
                        </select>
                    </div>
                    <div>
                        <Modal
                            show={this.state.open}
                            onHide={this.closeModal}
                            animation={true}
                            size="xl"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Increase since day one
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <DataToDrawGraphs countries={this.props} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={this.closeModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            );
        else {
            return (
                <div>
                    <select id="dropdown" onChange={this.handleDropdownChange}>
                        {nameArray.map(this.countryToItem)}
                    </select>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        countryDetail: state.countryDetail,
    };
};
const mapDispatchToProps = { countryToGetDetailFetched };

export const NewCountryList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryList);
