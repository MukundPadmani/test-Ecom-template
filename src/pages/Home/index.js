import React from 'react'
import SimpleSlider from '../../component/Slider';
import SliderMenu from './sliderMenu';
// import Header from '../../component/Header';

import HomeProduct from './HomeProduct';
import {  sliderproducts } from '../../utils';
import Layout from '../../layout';

const Home = () => {
    return (
        <>
            {/* <div className="flex min-h-screen flex-col"> */}
                {/* <div className="bg-white border-b top-0 border-slate-100 z-10"> */}
                    {/* header */}
                        {/* <Header /> */}
                    <Layout>

                    {/* <Slider /> */}
                        <SimpleSlider />
                    
                    {/* slid menus */}
                        <SliderMenu />

                    {/* products */}
                        <HomeProduct products={sliderproducts} />
                    </Layout>
                {/* </div> */}
            {/* // </div> */}
        </>
    )
}

export default Home;