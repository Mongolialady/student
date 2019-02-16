import React, {Component} from 'react';
import {Table, Button, Divider} from 'antd';
import {Link} from "react-router-dom";


const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
}, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
}];


function columnFactory(deleteHandler) {
    return [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) =>  {

            return (
            <span>
                <Link to={"/students/" + record.key + "/edit"}>Edit</Link>
                 <Divider type="vertical"/>
                 <a onClick={()=> deleteHandler(record.key)}>Delete</a>
            </span> ) },
    }];
}


class StudentList extends Component {
    constructor(...args) {
        super(...args);
        this.columns = columnFactory(this.deleteHandler.bind(this));
    }

    deleteHandler(key) {
        console.log("key", key);
        console.log("this", this);
    }

    render() {
        return (
            <div>
                <p style={{"textAlign": "right", "marginTop": "20px"}}>
                    <Link className={"ant-btn ant-btn-primary"} to={"/students/create"}>create</Link>
                </p>

                <Table dataSource={dataSource} columns={this.columns}/>
            </div>)
    }
}

export default StudentList;