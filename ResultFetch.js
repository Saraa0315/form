import React, { useEffect, useState } from "react";
import results from './results'
import { Link } from "react-router-dom";
import { Spin, Table, Button } from 'antd'


const ResultFetch = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Gmail',
            dataIndex: 'gmail',
            key: 'gmail',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
    ];

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        results.get('/data.json')
            .then(r => {
                setLoading(false);
                const fetchedResults = [];
                for (let key in r.data) {
                    fetchedResults.unshift(
                        {
                            ...r.data[key],
                            id: key
                        }
                    )
                }
                setData({ results: fetchedResults })
            })
    }, [])

    return (
        <div className="App">
            <header className="App-header" >
                <Spin spinning={loading}>
                    <Table dataSource={data.results} columns={columns}></Table>
                </Spin>
                <Link to='/'><Button className='back'>Буцах</Button></Link>


            </header>
        </div>
    )
}

export default ResultFetch;
