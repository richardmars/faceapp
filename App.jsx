import React from 'react';
import { Image, Container, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Sound from 'react-sound';
import 'whatwg-fetch'
import AppNavbar from './AppNavbar.jsx'

const host='http://119.23.213.100:5000';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            faces: [],
            musicJson: {},
            musicJsonUrl: host + '/music/music.json',
            imageUrl: host + '/face.jpg',
            audioUrl: host + '/xiangxinziji.mp3',
            resultUrl: host + '/result.json'
        };

        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler(face) {
        this.setState({faces:face})
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
        var fetchResult = fetch(this.state.resultUrl).then(function(response) {
            return response.json()
        }.bind(this)).then(function(json) {
            console.log('parsed json', json)
            this.setState({faces:json})
            console.log('set faces finished');
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        })

        fetch(this.state.musicJsonUrl).then(function(response) {
            return response.json()
        }.bind(this)).then(function(json) {
            console.log('parsed json', json)
            this.setState({musicJson:json})
            console.log('set musicJson finished');
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        })

        setInterval(function() {
            console.log('timer tick');
            var fetchResult = fetch(this.state.resultUrl).then(function(response) {
                return response.json()
            }.bind(this)).then(function(json) {
                console.log('parsed json', json)
                this.setState({faces:json})
                this.setState({imageUrl: host + '/face.jpg?' + new Date().getTime()})
                console.log('set faces finished');
            }.bind(this)).catch(function(ex) {
                console.log('parsing failed', ex)
            })
        }.bind(this), 3000);
    }

    render() {
        return (
            <div>
                <AppNavbar />
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image src={this.state.imageUrl} responsive />
                        </Col>
                        <Col xs={12} md={6}>
                            <BootstrapTable data={this.state.faces}>
                                <TableHeaderColumn dataField='gender' width='20%' isKey>性别</TableHeaderColumn>
                                <TableHeaderColumn dataField='age' width='15%'>年龄</TableHeaderColumn>
                                <TableHeaderColumn dataField='smile' width='15%'>微笑指数</TableHeaderColumn>
                                <TableHeaderColumn dataField='emotion'>表情</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                    </Row>
                </Grid>
                <Sound
                    url={this.state.audioUrl}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
            </div>
        );
    }
}

export default App;
/*

*/
