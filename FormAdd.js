import 'antd/dist/antd.css';
import './App.css'
import { Link } from "react-router-dom";
import { Form, Input, Button, Radio } from 'antd'
import { useState } from 'react';
import axios from 'axios';


const FormAdd = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gmail, setGmail] = useState('');
    const [gender, setGender] = useState('');

    const postDataHandler = () => {
        const Data = {
            name: name,
            age: age,
            gender: gender,
            gmail: gmail,
        }

        axios.post('https://results-c18a3-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', Data).then(response => {
            console.log(response.status);
        })

    }
    return (
        <div className='App'>
            <header className='App-header'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Form.Item name="name" label="Нэр"  >
                        <Input placeholder="Нэрээ бичнэ үү" onChange={(e) => setName(e.target.value)} />
                    </Form.Item>

                    <Form.Item name="age" label="Нас"  >
                        <Input type='number' placeholder="Насаа тоогоор бичнэ үү" onChange={e => setAge(e.target.value)} />
                    </Form.Item>

                    <Form.Item name="gmail" label="Gmail"  >
                        <Input placeholder="Gmail хаягаа бичнэ үү" onChange={e => setGmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item name="gender" label="Хүйс">
                        <Radio.Group onChange={e => setGender(e.target.value)} >
                            < Radio value={'эрэгтэй'}>эрэгтэй</Radio>
                            <Radio value={'эмэгтэй'}>эмэгтэй</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 6, }}>
                        <Link to="/back">
                            <Button type='primary' htmlType='submit' onClick={postDataHandler}>Хадгалах</Button>
                        </Link>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, }}>
                        <Link to="/result">
                            <Button type='primary' htmlType='next' >Үргэлжлүүлэх</Button>
                        </Link>
                    </Form.Item>

                </Form>
            </header>
        </div>
    );
};

export default FormAdd;