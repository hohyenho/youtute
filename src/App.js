import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/page/Home';
import Today from './assets/page/Today';
import Developer from './assets/page/Developer';
import Web from './assets/page/Web';
import Not from './assets/page/Not';
import Website from './assets/page/Website';
import Gsap from './assets/page/Gsap';
import Port from './assets/page/Port';
import Youtube from './assets/page/Youtube';
import Channel from './assets/page/Channel';

import Search from './assets/page/Search';
import Video from './assets/page/Video';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/today' element={<Today />} />
                <Route path='/developer' element={<Developer />} />
                <Route path='/web' element={<Web />} />
                <Route path='/website' element={<Website />} />
                <Route path='/gsap' element={<Gsap />} />
                <Route path='/port' element={<Port />} />
                <Route path='/youtube' element={<Youtube />} />
                <Route path='/channel/:channelId' element={<Channel />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='*' element={<Not />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
