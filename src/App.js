import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import StudentList from "./page/StudentList";
import StudentEdit from "./page/StudentEdit";
import CreateStudent from "./page/CreateStudent";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/students/:id/edit' component={StudentEdit}/>
                    <Route exact path='/students/create' component={CreateStudent}/>
                    <Route path='/' component={StudentList}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
