import React, {Component} from 'react';
import {Form, Button} from 'antd';
import {Link} from "react-router-dom";

import StudentInfo from '../component/StudentInfo';
import '../component/studentForm.css';

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

class CreateStudent extends Component{
    render(){
        return(
            <div>
                <Form className="studentForm">
                    <StudentInfo/>
                    <Form.Item
                        {...submitFormItemLayout}
                    >
                    <Link to='/' className="ant-btn" style={{"marginRight" : "25px"}}>Cancel</Link>
                    <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CreateStudent;