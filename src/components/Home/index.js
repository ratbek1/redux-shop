import React from 'react';

const Home = () => {
    return (
            <div className="bg-black h-[90vh]">
                <div className="container">
                    <h1 className="flex justify-center text-blue-500 text-2xl py-10">MOON<span><h1 className="text-2xl text-amber-300">-SUN</h1></span></h1>
                    <div className="flex justify-center  pt-[80px]">
                        <div className="bg-amber-100 w-96 h-96 rounded-[50%]">
                            <div className="bg-black w-72 h-72 rounded-[50%] z-10">
                                <div className="bg-yellow-400 w-40 h-40 rounded-[50%] z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Home;