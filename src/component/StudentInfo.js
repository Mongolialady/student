import React, {Component} from 'react';
import {Form, DatePicker, TimePicker, Button, Input} from 'antd';
import './studentForm.css';

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
const config = {
    rules: [{type: 'object', required: true, message: 'Please select time!'}],
};
const rangeConfig = {
    rules: [{type: 'array', required: true, message: 'Please select time!'}],
};

class StudentInfo extends Component {
    render() {
        return (
            <div>
                <Form.Item
                    {...formItemLayout}
                    label="Roll Number"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="First Name"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Last Name"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Rank"
                >
                    <Input/>
                </Form.Item>
            </div>
        )
    }
}

export default StudentInfo;