import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import axios from 'axios';

interface LoginPageProps {
    logoName: string;
    setLoggedInUser: (user: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ logoName, setLoggedInUser }) => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Reset errors
        setIdentifierError('');
        setPasswordError('');
    
        const requestData = {
            identifier,
            password,
        };
    
        try {
            const response = await axiosInstance.post('/users/login', {
                identifier,
                password,
            });
            if (response.status === 200) {
                if (response.data.user) {
                    localStorage.setItem('authToken', response.data.token);
                    localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
                    setLoggedInUser(response.data.user); // Update the logged-in user
                    navigate('/MyAccount');
                } else {
                    setPasswordError("An error occurred while processing the user data.");
                }
            } else {
                setPasswordError("Incorrect username or password.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Axios error response:", error.response);
                if (error.response.status === 400 || error.response.status === 401 || error.response.status === 404) {
                    setPasswordError("Incorrect username or password.");
                } else if (error.response.data.message) {
                    setPasswordError(error.response.data.message);
                } else {
                    setPasswordError("An error occurred while logging in.");
                }
            } else {
                setPasswordError("An error occurred while logging in.2");
            }
        }
    };
    

    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            <img
                                src={logoName}
                                alt="Logo"
                                className="mx-auto d-block mt-3"
                                style={{ width: '150px', height: 'auto' }}
                            />
                            <h4 className="text-center mt-3">Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="identifier"
                                        placeholder="Enter your username or email"
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                    />
                                    {identifierError && <small className="text-danger">{identifierError}</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordError && <small className="text-danger">{passwordError}</small>}
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary btn-block mt-2">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="text-center">
                                Don't have an account?{' '}
                                <button
                                    className="btn btn-link"
                                    onClick={() => navigate('/CreateAccount')}
                                >
                                    Create one
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
