import React, {Component} from 'react';
import {Table, Button, Divider, Modal} from 'antd';
import {Link} from "react-router-dom";
import axios from 'axios';

const confirm = Modal.confirm;

function columnFactory(self, deleteHandler) {
    return [{
        title: 'Roll Number',
        dataIndex: 'rollNo',
        key: 'rollNo',
    }, {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        sorter: (a, b) => a.length - b.length,

    }, {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: (a, b) => a.length - b.length,
    }, {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
        sorter: (a, b) => a - b,
    }, {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {

            return (
                <span>
                <Link to={"/students/" + record.rollNo + "/edit"}>Edit</Link>
                 <Divider type="vertical"/>
                 <a onClick={ deleteHandler.bind(self, record.rollNo)}>Delete</a>
            </span>)
        },
    }];
}


class StudentList extends Component {
    constructor(...args) {
        super(...args);
        this.columns = columnFactory(this,this.deleteHandler);
        this.state = {
            studentList: [],
            sortedInfo: null
        }
    }

    componentDidMount() {
        this.getStudentList();
    }

    getStudentList = (sorter={}) => {
        axios.get("/api?field=" + sorter.field + "&order=" + sorter.order)
            .then(res => {
                const studentList = res.data;
                this.setState({studentList});
            });
    };

    deleteHandler = (rollNo) => {
       var self=this;

        confirm({
            title: 'Confirmation',
            content: 'Do you want to delete this item?',
            onOk() {
                axios.delete('/api/students/' + rollNo).then(() => {
                        self.getStudentList();
                    }, () => {

                    })
            },
            onCancel() {
            },
        });
    };


    tableChangeHandler = (paging,filter,sorter) => {
        this.getStudentList(sorter)
    };

    render() {
        var dataSource = this.state.studentList;
        return (
            <div style={{"marginLeft": "200px", "marginRight": "200px"}}>
                <p style={{"textAlign": "right", "marginTop": "20px"}}>
                    <Link className={"ant-btn ant-btn-primary"} to={"/students/create"}>create</Link>
                </p>

                <Table dataSource={dataSource} columns={this.columns} onChange={this.tableChangeHandler}/>
            </div>)
    }
}

export default StudentList;