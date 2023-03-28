import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import axios, { AxiosError } from 'axios';

interface CreateAccountProps {
    logoName: string;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ logoName }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError('');
        setUsernameError('');
        setEmailError('');

        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        try {
            const response = await axiosInstance.post('/users/create', {
                username,
                email,
                password,
            });

            if (response.status === 201) {
                alert("Account created successfully");
                navigate('/Login');
            }
        } catch (error: unknown) {
            console.error("Error creating account:", error);
            if (axios.isAxiosError(error) && (error as AxiosError).response) {
                const axiosError = error as AxiosError<{ error?: string }>;
                if (axiosError.response!.data.error) {
                    const errorMessage = axiosError.response!.data.error;
                    if (errorMessage.includes("Username")) {
                        setUsernameError(errorMessage);
                    } else if (errorMessage.includes("Email")) {
                        setEmailError(errorMessage);
                    }
                } else {
                    alert("Error creating account");
                }
            } else {
                alert("Error creating account");
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
                            <h4 className="text-center mt-3">Create Account</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    {usernameError && <small className="text-danger">{usernameError}</small>}

                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <small className="text-danger">{emailError}</small>}

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
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {passwordError && <small className="text-danger">{passwordError}</small>}
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary btn-block mt-2">
                                        Create Account
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="text-center">
                                Already have an account?{' '}
                                <button
                                    className="btn btn-link"
                                    onClick={() => navigate('/Login')}
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
