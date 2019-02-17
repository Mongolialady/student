import React, {Component} from 'react';
import {Form, DatePicker, TimePicker, Button, Input, Icon} from 'antd';
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
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form.Item
                    {...formItemLayout}
                    label="Roll Number"
                >
                    {getFieldDecorator('rollNo', {
                        rules: [{ required: true, message: 'Please input your roll number!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="RollNo" />
                    )}
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

export default Form.create(StudentInfo);