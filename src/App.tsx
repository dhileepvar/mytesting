import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import InputFields from './components/Input';
import Tabs from './components/Tabs';
const App = () => {
  const [data, setData] = useState<{ value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string }[]>([]);
  const secTier = [27,13,36,11,30,8,23,10,5,24,16,33];
  const secOrp= [1,20,14,31,9,17,34,6];
  const secVoz = [22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25];
  const endingNos = [27,6,33,1,22,9,25,17,19,15,28,12];
  const reNos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const blNos = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
  

  const handleAdd = (value: string) => {
    if (value) {
      const valuesArray = value.split(',').map((val) => val.trim());
      const newData = valuesArray.map((val) => ({
        value: val,
        isVoz: checkVoz(val,secVoz),
        isOrp: checkOrp(val, secOrp),
        isTi: checkTie(val, secTier),
        isEnd: checkIsEnd(val, endingNos),
        col: checkCol(val, reNos, blNos),
        type: checkType(val),
        sec: checkSec(val)
      }));
      setData([...newData, ...data]);
    }
  };

  const handleSubmit = (value: string) => {
    if (value) {
      const valuesArray = value.split(' ').map((val) => val.trim());
      const newData = valuesArray.map((val) => ({
        value: val,
        isVoz: checkVoz(val,secVoz),
        isOrp: checkOrp(val, secOrp),
        isTi: checkTie(val, secTier),
        isEnd: checkIsEnd(val, endingNos),
        col: checkCol(val, reNos, blNos),
        type: checkType(val),
        sec: checkSec(val)
      }));
      setData(newData);
    }
  };

  return (
    <div>
      <InputFields onAdd={handleAdd} onSubmit={handleSubmit} />
      <Tabs data={data} />
    </div>
  );
};

export default App;

function checkTie(val: string, secTier: number[]): string {
  return secTier.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkOrp(val: string, secOrp: number[]): string {
  return secOrp.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkVoz(val: string, secVoz: number[]): string {
  return secVoz.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkCol(val: string, reNos: number[], blNos: number[]): string {
  if(reNos.some(element => element === parseInt(val))){
    return 'REE';
  }else if(blNos.some(element => element === parseInt(val))){
    return 'BLAAAAAA';
  }else{
    return 'GREEEEEEEEEE';
  }
}

function checkIsEnd(val: string, endNos: number[]): string {
  return endNos.some(element => element === parseInt(val)) ? 'Yes' : '';
}

function checkType(val: string): string {
  if(val == '0'){
    return '';
  }else if(val.endsWith('0') || val.endsWith('2') || val.endsWith('4') || val.endsWith('6') || val.endsWith('8')){
    return 'EVV';
  }else{
    return 'OOOOOOOO';
  }
}

function checkSec(val: string): string {
  if(val == '0'){
    return '';
  }else if(parseInt(val) < 13){
    return '1';
  }else if(parseInt(val) > 12 && parseInt(val) < 25){
    return '.........2';
  }else{
    return '........................3';
  }
}


