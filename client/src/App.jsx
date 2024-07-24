import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {

    return (
        <div className='wrapper'>
            <Header />

            <main className='blog-list'>
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} /> 
                </Routes>


            </main>

        </div>
    );
}

export default App;
