import React, {Component} from 'react';
import {Table, Button, Divider, Modal} from 'antd';
import {Link} from "react-router-dom";
import axios from 'axios';


/*const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
}, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
}];*/

const confirm = Modal.confirm;

function columnFactory(deleteHandler) {
    return [{
        title: 'Roll Number',
        dataIndex: 'rollNo',
        key: 'rollNo',
    }, {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    }, {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },{
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
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
        this.state={
            studentList: []
        }
    }

    componentDidMount(){
        axios.get("/api")
            .then(res => {
                const studentList = res.data.dataSource;
                this.setState({studentList});
            });
    }

    deleteHandler() {
        confirm({
            title: 'Do you want to delete this item?',
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }

    render() {
        var dataSource = this.state.studentList;
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