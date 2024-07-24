import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {

    return (
        <div className='wrapper'>
            <Header />

            <main className='blog-list'>
                <Routes>

                    <Route path='/' element={<Home />} />
                </Routes>


            </main>

        </div>
    );
}

export default App;
