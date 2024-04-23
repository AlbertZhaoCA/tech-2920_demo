import React, { useState } from 'react';
import Instruction from './Instructions';
import Archi from './Architecture';
import { useMemo,useEffect } from 'react';

  const FetchExecuteCycle = () => {
  const [instructions, setInstructions] = useState('');
  const [input, setInput] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isDecodeing, setisDecodeing] = useState(false);
  const [Addressing, setAddressing] = useState(false);
  const [step, setStep] = useState(0);
  const [ins, setIns] = useState([]);
  const [register,setRegister] = useState(false); 
  const [arithe,setArithe] = useState(false);
  const [execute,setExecute] = useState(false);
  const [opcode, setOpcode] = useState(0);


  //1 add 2 sub 3 str 5 load 6 jmp 7 jz 8 jp 901 input 902 output 000 halt
 
  useEffect(() => {
    if (step === 0) {
      setIsFetching(true);
      setStep(1);
    } else if (step === 1) {
      setTimeout(() => {
        setAddressing(true);
        setStep(2);
      }, 1000);
    } else if (step === 2) {
      setTimeout(() => {
        setIsFetching(false);
        setAddressing(false);
        setStep(3);
      }, 1000);
    } else if (step === 3){
      setTimeout(() => {
        setisDecodeing(true);
        setStep(4);
      }, 1000);
    } else if (step === 4){
      setTimeout(() => {
        setisDecodeing(false);
        setStep(5);
      }, 1000);
    } else if (step === 5){
      setTimeout(() => {
        setIsFetching(true);
        setExecute(true);
        setStep(6);
      }, 1000);
    } else if (step === 6){
      setTimeout(() => {
        setAddressing(true);
        setExecute(false);
        opcode === 1 ? setArithe(true) : setArithe(false)  === 2 ? setRegister(true) : setRegister(false) === 3 ? setArithe(true) : setArithe(false) === 4 ? setRegister(true) : setRegister(false);
        setStep(7);
      }, 1000);
    } else if (step === 7){
      setTimeout(() => {
        if(opcode === 1) {
          setRegister(true);
          setArithe(false);
        } else if(opcode === 2) {
          setRegister(true);
          setArithe(false);
        } else if(opcode === 3) {
          setArithe(true);
          setRegister(false);
        } else if(opcode === 4) {
          setRegister(true);
          setArithe(false);
        } else {
          setRegister(false);
          setArithe(false);
        }
        setIsFetching(false);
        setIsFetching(false);
        setAddressing(false);
        setStep(8);
      }, 1000);
    } else if (step === 8){
      setTimeout(() => {
        if(opcode === 1) {
          setRegister(false);
          setArithe(false);
        } else if(opcode === 2) {
          setRegister(false);
        } else if(opcode === 3) {
          setArithe(false);
        } else if(opcode === 4) {
          setRegister(false);
        }
        setisDecodeing(true);
        setStep(9);
      }, 1000);
    } else if (step === 9){
      setTimeout(() => {
        setisDecodeing(false);
        opcode === 1 ? setArithe(false) : null;
        opcode === 2 ? setRegister(false) : null;
        opcode === 3 ? setArithe(false) : null;
        opcode === 4 ? setRegister(false) : null;
        setStep(10);
      }, 1000);
    } 

    else if (step === 10){
      setTimeout(() => {
        setIsFetching(true);
        setExecute(true);
        setStep(11);
      }, 1000);
    } else if (step === 11){
      setTimeout(() => {
        setAddressing(true);
        setExecute(false);
        opcode === 1 ? setArithe(true) : setArithe(false)  === 2 ? setRegister(true) : setRegister(false) === 3 ? setArithe(true) : setArithe(false) === 4 ? setRegister(true) : setRegister(false);
        setStep(12);
      }, 1000);
    } else if (step === 12){
      setTimeout(() => {
        if(opcode === 1) {
          setRegister(true);
          setArithe(false);
        } else if(opcode === 2) {
          setRegister(true);
          setArithe(false);
        } else if(opcode === 3) {
          setArithe(true);
          setRegister(false);
        } else if(opcode === 4) {
          setRegister(true);
          setArithe(false);
        } else {
          setRegister(false);
          setArithe(false);
        }
        setIsFetching(false);
        setIsFetching(false);
        setAddressing(false);
        setStep(13);
      }, 1000);
    } else if (step === 13){
      setTimeout(() => {
        if(opcode === 1) {
          setRegister(false);
          setArithe(false);
        } else if(opcode === 2) {
          setRegister(false);
        } else if(opcode === 3) {
          setArithe(false);
        } else if(opcode === 4) {
          setRegister(false);
        }
        setisDecodeing(true);
        setStep(14);
      }, 1000);
    } else if (step === 14){
      setTimeout(() => {
        opcode === 1 ? setArithe(false) : null;
        opcode === 2 ? setRegister(false) : null;
        opcode === 3 ? setArithe(false) : null;
        opcode === 4 ? setRegister(false) : null;
        setStep(15);
      }, 1000);
    } 
    if (step === 15){
      setTimeout(() => {
        setIsFetching(false);
        setExecute(false);
        setAddressing(false);
        setisDecodeing(false);
        setArithe(false);
        setRegister(false);
        setStep(16);
      }, 1000);
    } 
    
  }, [step, setIsFetching, setAddressing]);
  
   function fetch(index){
    const instruction = ins[index].slice(0,3);
    const opcode = instruction[index][0];
    const operand = opcode.slice(1,3);
    switch(opcode){
      case '1':
      case '2':
        setOpcode(1);
        break;
      case '3':
      case '5':
        setOpcode(2);
        break;
      case '6':
      case '7':
      case '8':
        setOpcode(3);
        break;
      case '9':
        setOpcode(4);
        break;
    }

    setStep(0);
    return opcode;
  }


  async function fetchUnit(index){
    const opcode = fetch(index);
    console.log(opcode);
  }

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    setInstructions(input);
    setIns(input.split("\n").filter((instruction) => instruction.trim() !== ''))
    ins.map((instruction, index) => {
      fetchUnit(index)});   

     setInput(''); // clear the textarea after submitting
  };
  
  

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <h1>Seperate Fetch-Execute Processing Architecture Demo</h1>
      <textarea value={input} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Submit</button>
      <Instruction instructions={instructions} />
      <Archi register={register} arithe={arithe} execute={execute} Addressing={Addressing} isFetching={isFetching} isDecodeing={isDecodeing}/>
    </div>
  );
};

export default FetchExecuteCycle;
