import React, { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import axios from '../../api/axios';
import Welcome from '../../components/welcome';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setLogin] = useState(false);

    const onSignupHandler = async () => {
        const res = await axios.post('/signup', {
            email,
            password
        });

        console.log(res.data);
        setEmail(res.data.user.email);
        setLogin(true);
    }


    return (
        <>
            {isLogin ? <Welcome email={email} /> :
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Create a new account V1
              </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    type='password'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />

                                <Button
                                    id="signup"
                                    color='teal'
                                    fluid size='large'
                                    onClick={onSignupHandler}>
                                    Sign Up
                        </Button>
                            </Segment>
                        </Form>
                        <Message>
                            <a href='#'>Sign In</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            }  </>
    )

}

export default LoginForm
