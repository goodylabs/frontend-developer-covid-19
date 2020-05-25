import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import { countryToGetDetailFetched } from "./actions/index";
import { DataToDrawGraphs } from "./DataToDrawGraphs";

export class CountrySearch extends Component {
    state = {
        countryGivenByUser: "",
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

    setCountryGivenByUser = (event) => {
        this.setState({ countryGivenByUser: event.target.value });
    };

    checkIfCountryExists = (event) => {
        event.preventDefault();
        let countryNamesArray = [];
        for (let key in this.props.countryInformation[0]) {
            countryNamesArray.push(key);
        }
        var searchingResult = countryNamesArray.findIndex(
            (item) =>
                this.state.countryGivenByUser.toLowerCase() ===
                item.toLowerCase()
        );

        if (searchingResult > -1) {
            var countryDetails = {
                name: countryNamesArray[searchingResult],
            };
            this.props.countryToGetDetailFetched(countryDetails);
            this.setState({ hasCountry: true });
            this.openModal();
        } else {
            this.setState({ hasCountry: false });
        }
    };

    render() {
        if (this.state.hasCountry) {
            return (
                <div className="search">
                    <form onSubmit={this.checkIfCountryExists}>
                        <input
                            type="text"
                            onChange={this.setCountryGivenByUser}
                            value={this.state.countryGivenByUser}
                        />
                        <input type="submit" value="Search"></input>

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
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.checkIfCountryExists}>
                        <input
                            type="text"
                            onChange={this.setCountryGivenByUser}
                            value={this.state.countryGivenByUser}
                        />

                        <input type="submit" value="Search"></input>
                    </form>
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

export const NewCountrySearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(CountrySearch);
