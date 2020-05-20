import React from 'react';
import sidebar from './images/sidebar.png';
import {Conversation, Question, Select, Option} from './questions/index';
import $ from 'jquery';


export default class Survey extends React.Component {
    state = {
        website: "",
        id: 1
    };

    componentDidMount() {
        var settings;
        settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://survey-2b26.restdb.io/rest/website",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5eba039fce64705c9963f990",
                "cache-control": "no-cache"
            }
        }

        $.ajax(settings).done((response)=> {
            this.setState({
                website: response[0]["value"]});

        });
    }
    onsubmit(data){
        window.confirm('Thanks for your time. you can close this tab now.')
        console.log(data);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key]=="Strongly Disagree") {
                    data[key]="1"
                }
                if (data[key]=="Strongly Agree") {
                    data[key]="5"
                }
            }
        }
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://survey-2b26.restdb.io/rest/records",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5eba039fce64705c9963f990",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(data)
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
    render() {
        const intro = 'Hi there. Lets talk about user experience on '+ this.state.website;
        let elems="";
        if (this.state.website!=""){
            elems = <Conversation
                web={this.state.website}
                onSubmit={this.onsubmit}
                chatOptions={{
                    thankTheUser: ['identifier', 'feedback'],
                    introText: intro,
                    submittedResponseText: 'Thanks for giving us your feedback!'
                }}
            >
                <Question id="feedback">
                    Please tell me your name to start with, so we can identify you?
                </Question>
                {/*<Question id="email" validation={text => text.includes('@')}>*/}
                {/*    {'What\'s your email address?'}*/}
                {/*</Question>*/}
                <Select id="wbetter" question={this.state.website+" can make me better?"}>
                    <Option value="0" disabled>Strongly Disagree</Option>
                    <Option value="1">1</Option><Option value="2">2</Option>
                    <Option value="3">3 </Option>
                    <Option value="4">4</Option>
                    <Option value="5">5 </Option>
                    <Option value="6" disabled>Strongly Agree</Option>
                </Select>
                <Select id="wcontrol" question={this.state.website+" can make me look in control of things?"}>
                    <Option value="0">Strongly Disagree</Option>
                    <Option value="1">1</Option><Option value="2">2</Option>
                    <Option value="3">3 </Option>
                    <Option value="4">4</Option>
                    <Option value="5">5 </Option>

                    <Option value="6">Strongly Agree</Option>
                </Select>
                <Select id="wlook" question={this.state.website+" can make me look good?"}>
                    <Option value="0">Strongly Disagree</Option>
                    <Option value="1">1</Option><Option value="2">2</Option>
                    <Option value="3">3 </Option>
                    <Option value="4">4</Option>
                    <Option value="5">5 </Option>

                    <Option value="6">Strongly Agree</Option>
                </Select><Select id="whappy" question={this.state.website+" can make me happy?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wcurrent" question={this.state.website+" moves against the current website?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wdiff" question={this.state.website+" is different?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wordinary" question={this.state.website+" is outside the ordinary?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wapart" question={this.state.website+" stands apart from similar websites?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wsimple" question={this.state.website+" is simple to use?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="weasy" question={this.state.website+" is easy to operate?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wlearn" question={this.state.website+" is easy to learn?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wdesign" question={this.state.website+" has clear design?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="winterface" question={this.state.website+" has clean interface?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select><Select id="wfind" question={"I find " + this.state.website+ "?"}>
                <Option value="0">Plain</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>
                <Option value="6">Interesting</Option>
            </Select><Select id="wjudge" question={"I judge "+this.state.website+" to be?"}>
                <Option value="0">dull</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Captivating</Option>
            </Select><Select id="wcool" question={this.state.website+" is cool?"}>
                <Option value="0">Strongly Disagree</Option>
                <Option value="1">1</Option><Option value="2">2</Option>
                <Option value="3">3 </Option>
                <Option value="4">4</Option>
                <Option value="5">5 </Option>

                <Option value="6">Strongly Agree</Option>
            </Select>
                <Select id="wcmind"
                        question={"when i think of cool things "+this.state.website+" come to mind?"}>
                    <Option value="0">Strongly Disagree</Option>
                    <Option value="1">1</Option><Option value="2">2</Option>
                    <Option value="3">3 </Option>
                    <Option value="4">4</Option>
                    <Option value="5">5 </Option>

                    <Option value="6">Strongly Agree</Option>
                </Select>
                <Select id="wcthings"
                        question={"If i made a list of cool things "+this.state.website+" would be on it?"}>
                    <Option value="0">Strongly Disagree</Option>
                    <Option value="1">1</Option><Option value="2">2</Option>
                    <Option value="3">3 </Option>
                    <Option value="4">4</Option>
                    <Option value="5">5 </Option>
                    <Option value="6">Strongly Agree</Option>
                </Select>
                <Select id="oethings"
                        question="My overall experience of filling the Survey questions like this way is?">
                    <Option value="0">Boring</Option>
                    <Option value="1">1</Option><Option value="2">2</Option>
                    <Option value="3">3 </Option>
                    <Option value="4">4</Option>
                    <Option value="5">5 </Option>
                    <Option value="6">Enjoyable</Option>
                </Select>
            </Conversation>
        }
        else
        {
            elems=""
        }
        return (
            <div className="App">
                <div className="sidebar">
                    <div className="content">
                        <img src={sidebar} alt=""></img>
                        <p>
                            User Experience Survey</p>
                        <p> {this.state.website}</p>
                    </div>
                </div>
                <div className="survey">
                    {elems}
                </div>
            </div>
        );
    }
}

