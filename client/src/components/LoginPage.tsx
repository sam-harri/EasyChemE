import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

interface LoginPageProps {
    logoName: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ logoName }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await axiosInstance.post('/users/login', {
                username,
                password,
            });
    
            if (response.status === 200) {
                localStorage.setItem('authToken', response.data.token);
                alert("Logged in successfully");
                navigate('/'); // Redirect to the home page or any protected route
            } else {
                alert("Error logging in");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Error logging in");
        }
    };

    return (
        <div className="container" style={{paddingTop:'100px'}}>
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
                                        id="username"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
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
