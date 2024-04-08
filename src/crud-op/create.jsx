import React, { useState } from 'react';
import { Form, Checkbox,Button } from 'semantic-ui-react';
import axios from 'axios';

function Createpost() {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        checked: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const postData = async () => {
        try{
            await axios.post('https://660fa0a3356b87a55c51d8db.mockapi.io/user', formData);
            console.log("print Successfull");
        }
        catch(error){
            console.error("Error");
        }

    };

    return (
        <>
            <h3>Post Method</h3>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    /><br />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input
                        type="email"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        placeholder="Email"
                    /><br />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        name="checked"
                        checked={formData.checked}
                        onChange={handleChange}
                        label="Agree to the Terms and Conditions"
                    />
                </Form.Field>
                <button onClick={postData}>Submit</button>
            </Form>
        </>
    );
}

export default Createpost;
