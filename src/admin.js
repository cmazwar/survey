import React from 'react';
import './admin.css';
import { Redirect } from 'react-router-dom'
import $ from 'jquery';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            website: 'www.tanbits.com',
            id: 1,
            records: [],
            formated_records:[{},{},{},{},{},{},{}],
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.gwsettings={
            "async": true,
            "crossDomain": true,
            "url": "https://survey-2b26.restdb.io/rest/website",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5eba039fce64705c9963f990",
                "cache-control": "no-cache"
            }};
        this.pwsettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://survey-2b26.restdb.io/rest/website/5eba05989236d30400009b83",
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5eba039fce64705c9963f990",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": ''
        };
        this.gssettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://survey-2b26.restdb.io/rest/records",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5eba039fce64705c9963f990",
                "cache-control": "no-cache"
            }
        }
    }



    componentDidMount() {
        $.ajax(this.gwsettings).done( (response)=> {
            console.log(response);
            this.setState({
                website: response[0]["value"]});
        });


        $.ajax(this.gssettings).done( (records) =>{
            console.log(records)
            let formated_records=[{},{},{},{},{}]
            for (let i=0;i<records.length;i++)
            {
                const record=records[i]
                for (var key in record) {
                    if(key!="feedback"&&key!="email"&&key!="_id" &&key!="id" )
                    {
                        const obj = record[key];
                        console.log(obj)
                        console.log(key)
                        console.log(formated_records[(obj*1)-1])
                        formated_records[(obj*1)-1][key] = formated_records[(obj*1)-1].hasOwnProperty(key)?
                            (formated_records[(obj*1)-1][key] + 1):1
                    }
                }}
            console.log(formated_records)

            this.setState({records: records, formated_records: formated_records});
        });



    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({[input.name]: value});
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        var jsondata = {"id": 1,"value": this.state.website};
        this.pwsettings.data=JSON.stringify(jsondata);
        $.ajax(this.pwsettings).done(function (response) {
            console.log(response);
        });
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/survey' />
        }
    }

    render() {
        const {records,formated_records} = this.state;
        let rows= [];
        for (var i=0; i < formated_records.length; i++) {
            rows.push(<tr>
                <td>{i+1}</td>
                <td>{formated_records[i]["wbetter"]||0}</td>
                <td>{formated_records[i]["wcontrol"]||0}</td>
                <td>{formated_records[i]["wlook"]||0}</td>
                <td>{formated_records[i]["whappy"]||0}</td>
                <td>{formated_records[i]["wcurrent"]||0}</td>
                <td>{formated_records[i]["wdiff"]||0}</td>
                <td>{formated_records[i]["wordinary"]||0}</td>
                <td>{formated_records[i]["wapart"]||0}</td>
                <td>{formated_records[i]["wsimple"]||0}</td>
                <td>{formated_records[i]["weasy"]||0}</td>
                <td>{formated_records[i]["wlearn"]||0}</td>
                <td>{formated_records[i]["wdesign"]||0}</td>
                <td>{formated_records[i]["winterface"]||0}</td>
                <td>{formated_records[i]["wfind"]||0}</td>
                <td>{formated_records[i]["wjudge"]||0}</td>
                <td>{formated_records[i]["wcool"]||0}</td>
                <td>{formated_records[i]["wcmind"]||0}</td>
                <td>{formated_records[i]["wcthings"]||0}</td>
                <td>{formated_records[i]["oethings"]||0}</td>
            </tr>)

        }
        let rows2= [];
        for (var i=0; i < records.length; i++) {
            rows2.push(<tr>
                <td>{records[i]["feedback"]||0}</td>
                <td>{records[i]["wbetter"]||0}</td>
                <td>{records[i]["wcontrol"]||0}</td>
                <td>{records[i]["wlook"]||0}</td>
                <td>{records[i]["whappy"]||0}</td>
                <td>{records[i]["wcurrent"]||0}</td>
                <td>{records[i]["wdiff"]||0}</td>
                <td>{records[i]["wordinary"]||0}</td>
                <td>{records[i]["wapart"]||0}</td>
                <td>{records[i]["wsimple"]||0}</td>
                <td>{records[i]["weasy"]||0}</td>
                <td>{records[i]["wlearn"]||0}</td>
                <td>{records[i]["wdesign"]||0}</td>
                <td>{records[i]["winterface"]||0}</td>
                <td>{records[i]["wfind"]||0}</td>
                <td>{records[i]["wjudge"]||0}</td>
                <td>{records[i]["wcool"]||0}</td>
                <td>{records[i]["wcmind"]||0}</td>
                <td>{records[i]["wcthings"]||0}</td>
                <td>{records[i]["oethings"]||0}</td>
            </tr>)

        }
        return (<div className={"container"}>
                {this.renderRedirect()}
                <h1>Admin Panel</h1>
                <form className={"myform"} onSubmit={this.handleFormSubmit}>
                    <label for="website">
                        Website Name
                    </label>
                    <input id={"website"} name="website" type="text" value={this.state.website} onChange={this.handleChange}/>
                    <button type="submit">Save</button>
                </form>
                <h1>Collective responses</h1>
                <table class={"blueTable"}>
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>the above website Can make me better?</th>
                        <th>the above website can make me look in control of things?</th>
                        <th>the above website can make me look good?</th>
                        <th>the above website can make me happy?</th>
                        <th>the above website moves against the current?</th>
                        <th> the above website is different?</th>
                        <th>the above website is outside the ordinary?</th>
                        <th>the above website stands apart from similar websites?</th>
                        <th>the above website is simple to use?</th>
                        <th>the above website is easy to operate?</th>
                        <th>the above website is easy to learn?</th>
                        <th>the above website has clear design?</th>
                        <th>the above website has clean interface?</th>
                        <th>I find the above website?</th>
                        <th>I judge the above website to be?</th>
                        <th>the above website is cool?</th>
                        <th>when i think of cool things the above website come to mind?</th>
                        <th>If i made a list of cool things the above website would be on it?</th>
                        <th>My overall experience of filling the Survey questions like this way is?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
                <h1>individual responses</h1>
                <table class={"blueTable"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>the above website Can make me better?</th>
                        <th>the above website can make me look in control of things?</th>
                        <th>the above website can make me look good?</th>
                        <th>the above website can make me happy?</th>
                        <th>the above website moves against the current?</th>
                        <th> the above website is different?</th>
                        <th>the above website is outside the ordinary?</th>
                        <th>the above website stands apart from similar websites?</th>
                        <th>the above website is simple to use?</th>
                        <th>the above website is easy to operate?</th>
                        <th>the above website is easy to learn?</th>
                        <th>the above website has clear design?</th>
                        <th>the above website has clean interface?</th>
                        <th>I find the above website?</th>
                        <th>I judge the above website to be?</th>
                        <th>the above website is cool?</th>
                        <th>when i think of cool things the above website come to mind?</th>
                        <th>If i made a list of cool things the above website would be on it?</th>
                        <th>My overall experience of filling the Survey questions like this way is?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows2}
                    </tbody>
                </table>
            </div>


        );
    }
}
