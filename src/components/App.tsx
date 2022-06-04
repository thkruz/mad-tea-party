import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bar } from './../context/BarContext';
import { ColorMode } from './ColorMode';
import { Home } from './Home/Home';
import NotFound from './NotFound';

export const App = () => {
    return (
        <ColorMode>
            <Bar>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Bar>
        </ColorMode>
    );
};
