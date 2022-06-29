import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Space, Table } from "antd";
import { useState } from "react";
const data = [
  {
    Id: "1",
    Name: "Can",
    Surname: "Temiz",
    Age: 25,
    Job: "engineer",
    CreateDate: "02/06/2022"
  },
  {
    Id: "2",
    Name: "Mehmet ",
    Surname: "Demir",
    Age: 27,
    Job: "doctor",
    CreateDate: "01/01/2022"
  },
  {
    Id: "3",
    Name: "Ali",
    Surname: "Koçak",
    Age: 29,
    Job: "teacher",
    CreateDate: "26/06/2022"
  },
  {
    Id: "4",
    Name: "Rıfkı",
    Surname: "Şenyüz",
    Age: 35,
    Job: "chef",
    CreateDate: "05/03/2022"
  }
];

const App = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      filters: [
        {
          text: "Can",
          value: "Can"
        },
        {
          text: "Mehmet",
          value: "Mehmet"
        },
        {
          text: "Ali",
          value: "Ali"
        },
        {
          text: "Rıfkı",
          value: "Rıfkı"
        }
      ],
      filteredValue: filteredInfo.Name || null,
      onFilter: (value, record) => record.Name.includes(value),
      sorter: (a, b) => a.Name.length - b.Name.length,
      sortOrder: sortedInfo.columnKey === "Name" ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: "Surname",
      dataIndex: "Surname",
      key: "Surname",
      filters: [
        {
          text: "Temiz",
          value: "Temiz"
        },
        {
          text: "Koçak",
          value: "Koçak"
        },
        {
          text: "Demir",
          value: "Demir"
        },
        {
          text: "Şenyüz",
          value: "Şennyüz"
        }
      ],
      filteredValue: filteredInfo.Surname || null,
      onFilter: (value, record) => record.Surname.includes(value),
      sorter: (a, b) => a.Surname.length - b.Surname.length,
      sortOrder: sortedInfo.columnKey === "Surname" ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
      sorter: (a, b) => a.Age - b.Age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: "Job",
      dataIndex: "Job",
      key: "Job",
      filters: [
        {
          text: "engineer",
          value: "engineer"
        },
        {
          text: "doctor",
          value: "doctor"
        },
        {
          text: "teacher",
          value: "teacher"
        },
        {
          text: "chef",
          value: "chef"
        }
      ],
      filteredValue: filteredInfo.Job || null,
      onFilter: (value, record) => record.Job.includes(value),
      sorter: (a, b) => a.Job.length - b.Job.length,
      sortOrder: sortedInfo.columnKey === "Job" ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: "CreateDate",
      dataIndex: "CreateDate",
      key: "CreateDate",
      sorter: (a, b) => a.CreateDate - b.CreateDate,
      sortOrder:
        sortedInfo.columnKey === "CreateDate" ? sortedInfo.order : null,
      ellipsis: true
    }
  ];
  return (
    <>
      <Space
        style={{
          marginBottom: 16
        }}
      >
        <Button onClick={clearAll}>Clear filters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};

export default App;
