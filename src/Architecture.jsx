import React from 'react';
import Xarrow from 'react-xarrows';

function Archi({register, arithe, execute, Addressing, isFetching, isDecodeing}) {
    return (
        <div className="relative h-screen w-screen">
    
    <div className='border-separate border-2 border-red-500 absolute top-0 left-24 w-48 h-80'>
    <label className="text-end block absolute bottom-0">Fetch Unit</label>
        <Box id="box1" name="Instruction Fetch Unit" className={`absolute top-0 left-0 ${isFetching ? 'bg-red-500' : 'bg-blue-500'}`} />
        <Box id="box2" name="Instruction Decode Unit" className={`absolute top-48 left-0 ${isDecodeing ? 'bg-red-500' : 'bg-blue-500'}`} />
    </div>
    
    <Box id="box3" name="Bus Interface unit" className={`absolute top-0 left-96 ${register ? 'bg-red-500' : 'bg-blue-500'}`} />
    <Box id="box4" name="Addressing unit" className={`absolute top-48 left-96 ${Addressing ? 'bg-red-500' : 'bg-blue-500'}`} />
    <div className='border-separate border-2 border-red-500 absolute top-96 left-0 w-3/6 h-48'>
    <Box id="box5" name="Register" className={`absolute top-0 left-0 ${register ? 'bg-red-500' : 'bg-blue-500'}`} />
    <Box id="box6" name="Arithematic Logic Unit" className={`absolute top-0 left-48 ${arithe ? 'bg-red-500' : 'bg-blue-500'}`} />
    <Box id="box7" name="Execution Control Unit" className={`absolute top-0 left-96 ${execute ? 'bg-red-500' : 'bg-blue-500'}`} />
    <label className="text-end block absolute bottom-0">Execution Unit</label>

    </div>

    <Xarrow start="box1" end="box2" />
    <Xarrow start="box1" end="box3" />
    <Xarrow start="box1" end="box4" />
    <Xarrow start="box3" end="box4" />
    <Xarrow start="box6" end="box3" />
    <Xarrow start="box2" end="box7" />
    <Xarrow start="box5" end="box6" />
    <Xarrow start="box6" end="box7" />
    <Xarrow start="box7" end="box4" />


          
        </div>
    );
}

function Box({ id, name, className }) {
    return <div id={id} className={`w-24 h-24 bg-blue-500 text-center line-height[6rem] ${className}`}>{name}</div>;
}

export default Archi;