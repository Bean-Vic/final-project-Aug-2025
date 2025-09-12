import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './child-pages/Home';
import About from './child-pages/About';
import NotFound from './child-pages/NotFound';
import User from './child-pages/Users';
import Cart from './child-pages/Cart';
import Dashboard, { Settings, Status } from './child-pages/Dashboard';

export function RouterExample() {
    return (
        <div className="router-example-container">
            <BrowserRouter>
                <nav style={{ marginBottom: '1rem' }}>
                    <Link to="/" style={{ marginRight: '1rem' }}>
                        Home
                    </Link>
                    <Link to="/about" style={{ marginRight: '1rem' }}>
                        About
                    </Link>
                    <Link to="/dashboard" style={{ marginRight: '1rem' }}>
                        Dashboard
                    </Link>
                    <Link to="/cart">Cart</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user/:username" element={<User />} />{' '}
                    {/* dynamic user name handling */}
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="settings" element={<Settings />} />  {/* /dashboard/settings */}
                        <Route path="status" element={<Status />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

//https://www.google.com/search?q=react+document&rlz=1C1ONGR_enUS1164US1164&oq=react&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgkIARBFGDkYgAQyCAgCEEUYJxg7MgYIAxBFGDsyBggEEEUYPDIGCAUQRRhBMgYIBhBFGEEyBggHEEUYPNIBCDEwOTRqMGo3qAIIsAIB8QUE-Xe6u_5zcw&sourceid=chrome&ie=UTF-8
