import React, { useState, useEffect } from "react";
import { Table, Button} from 'semantic-ui-react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Readpost() {
  const [apidata, setData] = useState([]);
  const navigate = useNavigate();

  const nav = (data) =>
  {
     navigate('/update/'+data?.id);
  }
 
  const Deluser = async (id) =>
  {
        await axios.delete("https://660fa0a3356b87a55c51d8db.mockapi.io/user/" + id)
        Api();
  }
  const Api = async () =>
  {
    const res = await axios.get("https://660fa0a3356b87a55c51d8db.mockapi.io/user")
    setData(res.data);
  }

  useEffect(() =>{
    Api();
  },[])

  return (
    <>
     <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>checked</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {apidata.map(data => { 
                return(
            <Table.Row key= {data.id}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.mail}</Table.Cell>
                <Table.Cell>{data.checked ? 'Checked' : 'Not-checked'}</Table.Cell>
                <Table.Cell><Button onClick={() => Deluser(data.id)}>Delete</Button></Table.Cell>
                <Table.Cell><Button onClick={() => nav(data)}>Update</Button></Table.Cell>
            </Table.Row>
            )
            })
        }
        </Table.Body>
     </Table>

    </>
  );
}

export default Readpost;
