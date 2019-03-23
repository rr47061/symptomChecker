import React, { Component } from 'react';
import './App.css';
//import Title from './components/title';
import Form from './components/form';
// import Weather from './components/weather';

//const API_KEY =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJyNDcwNjFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0ODEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTAzLTE5IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NTMzNzQ3MTksIm5iZiI6MTU1MzM2NzUxOX0.y5rG8wDSzc0xgNTMua5f5bQq1zn_0xWwEnDIp5LxJMg';
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJyNDcwNjFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0ODEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTAzLTE5IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NTMwMjE3ODEsIm5iZiI6MTU1MzAxNDU4MX0.REVKH_Ddo-OrjCkM3ZFjUAC9PjlzvlLa2JiqQemiyR4
const key ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJyNDcwNjFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0ODEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTAzLTE5IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NTMzODY0NTAsIm5iZiI6MTU1MzM3OTI1MH0.E2dpW7CS1bOjQtcyA2f3yeZlNgQZ1-vFbuHGA6JZXhQ';
class App extends React.Component {
    state = {
        isLoading: true,
        users: [],
        error: null,

    };
    getWeather = async (e) => {   // async is used for asynchornous call to api
        e.preventDefault();

        const age = e.target.elements.age.value;
        const  gender = e.target.elements.gender.value;
        //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const api_call = await fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=${gender}&year_of_birth=${age}&token=${key}&format=json&language=en-gb`);
        const data = await api_call.json();
        console.log(data);
        console.log(gender);
        console.log(age);

        this.setState({
                            users: data,
                            isLoading: false,
                        })
        //defining the state
        // this.setState({
        //     // temperature: data.main.temp-273,
        //     // city: data.name,
        //     // country: data.sys.country,
        //     // humidity: data.main.humidity,
        //     // description: data.weather[0].description,
        //     // error: ""
        //     users: data,
        //     isLoading: false,
        // });
    };

    // fetchUsers() {
    //
    //     //const age=this.state.fields.age;
    //     //const gender=this.state.fields.gender;
    //     // Where we're fetching data from
    //     //fetch(`https://jsonplaceholder.typicode.com/users`)
    //      //fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=${gender}&year_of_birth=${age}&token=${API_KEY}&format=json&language=en-gb`)
    //     fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=male&year_of_birth=1997&token=${API_KEY}&format=json&language=en-gb`)
    //
    //     // We get the API response and receive data in JSON format...
    //         .then(response => response.json())
    //         // ...then we update the users state
    //         .then(data =>
    //             this.setState({
    //                 users: data,
    //                 isLoading: false,
    //             })
    //         )
    //         // Catch any errors we hit and update the app
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }
    // componentDidMount() {
    //     this.fetchUsers();
    // }

    render() {
        const { isLoading, users, error } = this.state;
        return (
            <React.Fragment>
                <h1>Random User</h1>
                <Form getWeather={this.getWeather}/>
                // Display a message if we encounter an error
                {error ? <p>{error.message}</p> : null}
                {/*// Here's our data check*/}
                {!isLoading ? (
                    users.map(user => {
                       // const { username, name, email } = user;
                        const { Issue   } = user;
                        return (
                            <div key={Issue.ID}>
                                <p>Name: {Issue.ID}</p>
                                <p>Email Address: {Issue.Name}</p>
                                {/*<p>Email Address: {user.address.street}</p>*/}
                                <hr />
                            </div>
                        );
                    })
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <h3>Loading...</h3>
                )}
            </React.Fragment>
        );
    }
}

export default App;
