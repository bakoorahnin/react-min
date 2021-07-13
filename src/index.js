import { Table } from "antd";
import React,{ useState } from "react"
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // eslint-disable-next-line react/display-name
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const defaultData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '10',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '11',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
]

function App() {
    const [data, setData] = useState(defaultData)
    const [loading, setLoading] = useState(false)

    function onClick() {
        setLoading(true)
        setTimeout(() => {
            setData(data => ([...data, {
                key: '12',
                name: 'Me Black 2',
                age: 33,
                address: 'Sidney No. 1 Lake Parkd'
            }]))
            setLoading(false)
        }, 1000);
    }

    return (
        !loading &&
        <div>
            <button onClick={onClick}>Click</button>
            <Table size="small" columns={columns} dataSource={data} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);