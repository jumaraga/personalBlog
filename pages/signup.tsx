import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, InputGroup, FormControl } from "react-bootstrap";;

export default function SignUp() {
    const [change, setChange] = useState<number>()
    const [password, setPassword] = useState<string>('password')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const user = {
        name,
        lastname,
        email,
        password
    }
    const seePassword = () => {
        const pass = document.querySelector('#password')
        pass.type === 'password' ? setPassword('text') : setPassword('password')
    };

    const  handleSubmit = async() => {
        try {
            await fetch('/api/signUp', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
        }catch(e){
            console.log(e)
        }
    }

    return (<>        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }} >
            <div className="border d-flex justify-content-center align-items-center" style={{ height: '70%', width: '60%' }}>

                <Form style={{ width: '50%' }} onSubmit={handleSubmit} >
                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formBasicNanme">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" placeholder="Nombre" onChange={(e)=>setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} className="md-3" controlId="formBasicLastName">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" onChange={(e)=>setLastname(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="md-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="hola@email.com"  onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="md-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text onClick={() => seePassword()}> <svg className="MuiSvgIcon-root-253" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="m0 0h24v24H0z"></path><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg></InputGroup.Text>
                            <FormControl type={password} id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </InputGroup>

                    </Form.Group>

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
               
            </div>
        </div ></>
)
}