import react from 'react';
import {useEffect,useState} from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import './style.scss';
import axios from 'axios';

function Updatepost()
{
    // console.log(window.location?.pathname?.split('/'))
    // let details = window.location?.pathname?.split('/')
    // let user_id = details[details?.length - 1]
    // console.log(user_id)
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
  
    const [checked, setChecked] = useState('false');
    const [id, setId] = useState('');
    const handleChange = (event) => 
    {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
    }
    useEffect( () =>{
        async function fetchData() {
            let details = window.location?.pathname?.split('/')
            console.log(details)
            let user_id = details[details?.length - 1]
            const res = await axios.get("https://660fa0a3356b87a55c51d8db.mockapi.io/user/"+user_id)
            setName(res.data.name);
          }
          fetchData();
          console.log(name)
      },[])

    return(
        <>
        <h3>Update</h3>
        <Form>
            <Form.Field>
                <label>Name</label>
                <input type='text' value={name}  onChange={event => setName(event.target.value)} placeholder='Name'/>
            </Form.Field>
            <Form.Field>
                <label>Mail</label>
                <input type='text' onChange={event => setMail(event.target.value)} value={mail} placeholder='Mail'/>
            </Form.Field>
            <Form.Field>
            <Checkbox name="checked"  onChange={handleChange} checked={checked} label="Agree to the Terms and Conditions"/>
            </Form.Field>
            <button>Submit</button>
        </Form>
        </>
    )
}

export default Updatepost;