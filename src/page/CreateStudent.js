import React, {Component} from 'react';
import {Form, Button, Input, Icon, Modal} from 'antd';
import {Link, withRouter} from "react-router-dom";

import axios from 'axios';

//import StudentInfo from '../component/StudentInfo';
import '../component/studentForm.css';

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};


const submitFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class CreateStudent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if(!error) {
                axios.post('/api/students', values).then(
                    ()=>{
                        this.props.history.push("/");
                    }, (error)=> {
                        let body=error.response.data || {};

                        Modal.error({
                            title: body.code,
                            content: body.message,
                        });
                    }
                );
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Form className="studentForm" onSubmit={this.handleSubmit}>
                    <Form.Item
                        {...formItemLayout}
                        label="Roll Number"
                    >
                        {getFieldDecorator('rollNo', {
                            rules: [{ required: true, message: 'Please input your roll number!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Roll Number" />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="First Name"
                    >
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Last Name"
                    >
                        {getFieldDecorator('lastName', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Rank"
                    >
                        {getFieldDecorator('rank', {
                            rules: [{ required: true, message: 'Please input your rank!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Rank" />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...submitFormItemLayout}
                    >
                        <Link to='/' className="ant-btn" style={{"marginRight": "25px"}}>Cancel</Link>
                        <Button type="primary" htmlType={"submit"}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>

        )
    }
}

export default Form.create({})(withRouter(CreateStudent));