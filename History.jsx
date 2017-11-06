import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Image, FormGroup, FormControl, ControlLabel, HelpBlock, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {App} from './App.jsx';
import AppNavbar from './AppNavbar.jsx'
import {Line} from 'react-chartjs-2';

const host='http://119.23.213.100:5000';
class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            historyJson: [],
            historyUrl: host + '/history.json',
            data: {
                labels: ["20171104"],
                datasets: [{
                    label: '# of Votes',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        };
        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler(historyJson) {
        var dates = ["20171025", "20171026", "20171027", "20171028", "20171029", "20171030", "20171031", "20171101", "20171102", "20171103", "20171104"]
        var datas = 
             {
                labels: dates.slice(dates.length - historyJson.length, dates.length),
                datasets: [{
                    label: '历史心情',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };
        console.log(historyJson);
        datas.datasets[0].data = historyJson;
        this.setState({data:datas})
        console.log('update data success');
    }


    componentDidMount() {
        console.log('Component DID MOUNT!')
        fetch(this.state.historyUrl).then(function(response) {
            return response.json()
        }.bind(this)).then(function(json) {
            console.log('parsed json', json)
            this.setStateHandler(json)
            console.log('set faces finished');
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <AppNavbar/>
                <Line data={this.state.data} />
            </div>
        );
    }
}

export default History;
