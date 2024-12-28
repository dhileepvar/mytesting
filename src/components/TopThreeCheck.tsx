import React, { useEffect, useState } from 'react';
import Wheel from './Wheel';

interface TopThreeCheckProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

interface finalResult { 
  Combination: string;
  Style: string;
  Missing: string; 
}

const TopThreeCheck: React.FC<TopThreeCheckProps> = ({ data }) => {
  const [ThreeCheckArray, set3CheckArray] = useState<finalResult[]>([]);
  const [FiveCheckArray, set5CheckArray] = useState<finalResult[]>([]);
  const [ThreeBINArray, set3BINArray] = useState<finalResult[]>([]);
  const [FiveBINArray, set5BINArray] = useState<finalResult[]>([]);
  const [ThreeStyleArray, set3StyleArray] = useState<finalResult[]>([]);
  const [FiveStyleArray, set5StyleArray] = useState<finalResult[]>([]);
  const [SevenCheckArray, set7CheckArray] = useState<finalResult[]>([]);
  const neigArray = [
    { numlimit: '3', num: '0', neigsStr: ',32,0,26,' },
    { numlimit: '5', num: '0', neigsStr: ',15,32,0,26,3,' },
    { numlimit: '7', num: '0', neigsStr: ',19,15,32,0,26,3,35,' },
    { numlimit: '3', num: '1', neigsStr: ',20,1,33,' },
    { numlimit: '5', num: '1', neigsStr: ',14,20,1,33,16,' },
    { numlimit: '7', num: '1', neigsStr: ',31,14,20,1,33,16,24,' },
    { numlimit: '3', num: '2', neigsStr: ',25,2,21,' },
    { numlimit: '5', num: '2', neigsStr: ',17,25,2,21,4,' },
    { numlimit: '7', num: '2', neigsStr: ',34,17,25,2,21,4,19,' },
    { numlimit: '3', num: '3', neigsStr: ',26,3,35,' },
    { numlimit: '5', num: '3', neigsStr: ',0,26,3,35,12,' },
    { numlimit: '7', num: '3', neigsStr: ',32,0,26,3,35,12,28,' },
    { numlimit: '3', num: '4', neigsStr: ',21,4,19,' },
    { numlimit: '5', num: '4', neigsStr: ',2,21,4,19,15,' },
    { numlimit: '7', num: '4', neigsStr: ',25,2,21,4,19,15,32,' },
    { numlimit: '3', num: '5', neigsStr: ',24,5,10,' },
    { numlimit: '5', num: '5', neigsStr: ',16,24,5,10,23,' },
    { numlimit: '7', num: '5', neigsStr: ',33,16,24,5,10,23,8,' },
    { numlimit: '3', num: '6', neigsStr: ',27,6,34,' },
    { numlimit: '5', num: '6', neigsStr: ',13,27,6,34,17,' },
    { numlimit: '7', num: '6', neigsStr: ',36,13,27,6,34,17,25,' },
    { numlimit: '3', num: '7', neigsStr: ',28,7,29,' },
    { numlimit: '5', num: '7', neigsStr: ',12,28,7,29,18,' },
    { numlimit: '7', num: '7', neigsStr: ',35,12,28,7,29,18,22,' },
    { numlimit: '3', num: '8', neigsStr: ',23,8,30,' },
    { numlimit: '5', num: '8', neigsStr: ',10,23,8,30,11,' },
    { numlimit: '7', num: '8', neigsStr: ',5,10,23,8,30,11,36,' },
    { numlimit: '3', num: '9', neigsStr: ',22,9,31,' },
    { numlimit: '5', num: '9', neigsStr: ',18,22,9,31,14,' },
    { numlimit: '7', num: '9', neigsStr: ',29,18,22,9,31,14,31,' },
    { numlimit: '3', num: '10', neigsStr: ',5,10,23,' },
    { numlimit: '5', num: '10', neigsStr: ',24,5,10,23,8,' },
    { numlimit: '7', num: '10', neigsStr: ',16,24,5,10,23,8,30,' },
    { numlimit: '3', num: '11', neigsStr: ',30,11,36,' },
    { numlimit: '5', num: '11', neigsStr: ',8,30,11,36,13,' },
    { numlimit: '7', num: '11', neigsStr: ',23,8,30,11,36,13,27,' },
    { numlimit: '3', num: '12', neigsStr: ',35,12,28,' },
    { numlimit: '5', num: '12', neigsStr: ',3,35,12,28,7,' },
    { numlimit: '7', num: '12', neigsStr: ',26,3,35,12,28,7,29,' },
    { numlimit: '3', num: '13', neigsStr: ',36,13,27,' },
    { numlimit: '5', num: '13', neigsStr: ',11,36,13,27,6,' },
    { numlimit: '7', num: '13', neigsStr: ',30,11,36,13,27,6,34,' },
    { numlimit: '3', num: '14', neigsStr: ',31,14,20,' },
    { numlimit: '5', num: '14', neigsStr: ',9,31,14,20,1,' },
    { numlimit: '7', num: '14', neigsStr: ',22,9,31,14,20,1,33,' },
    { numlimit: '3', num: '15', neigsStr: ',19,15,32,' },
    { numlimit: '5', num: '15', neigsStr: ',4,19,15,32,0,' },
    { numlimit: '7', num: '15', neigsStr: ',21,4,19,15,32,0,26,' },
    { numlimit: '3', num: '16', neigsStr: ',33,16,24,' },
    { numlimit: '5', num: '16', neigsStr: ',1,33,16,24,5,' },
    { numlimit: '7', num: '16', neigsStr: ',20,1,33,16,24,5,10,' },
    { numlimit: '3', num: '17', neigsStr: ',34,17,25,' },
    { numlimit: '5', num: '17', neigsStr: ',6,34,17,25,2,' },
    { numlimit: '7', num: '17', neigsStr: ',27,6,34,17,25,2,21,' },
    { numlimit: '3', num: '18', neigsStr: ',29,18,22,' },
    { numlimit: '5', num: '18', neigsStr: ',7,29,18,22,9,' },
    { numlimit: '7', num: '18', neigsStr: ',28,7,29,18,22,9,31,' },
    { numlimit: '3', num: '19', neigsStr: ',4,19,15,' },
    { numlimit: '5', num: '19', neigsStr: ',21,4,19,15,32,' },
    { numlimit: '7', num: '19', neigsStr: ',2,21,4,19,15,32,0,' },
    { numlimit: '3', num: '20', neigsStr: ',14,20,1,' },
    { numlimit: '5', num: '20', neigsStr: ',31,14,20,1,33,' },
    { numlimit: '7', num: '20', neigsStr: ',9,31,14,20,1,33,24,' },
    { numlimit: '3', num: '21', neigsStr: ',2,21,4,' },
    { numlimit: '5', num: '21', neigsStr: ',25,2,21,4,19,' },
    { numlimit: '7', num: '21', neigsStr: ',17,25,2,21,4,19,15,' },
    { numlimit: '3', num: '22', neigsStr: ',18,22,9,' },
    { numlimit: '5', num: '22', neigsStr: ',29,18,22,9,31,' },
    { numlimit: '7', num: '22', neigsStr: ',7,29,18,22,9,31,14,' },
    { numlimit: '3', num: '23', neigsStr: ',10,23,8,' },
    { numlimit: '5', num: '23', neigsStr: ',5,10,23,8,30,' },
    { numlimit: '7', num: '23', neigsStr: ',24,5,10,23,8,30,11,' },
    { numlimit: '3', num: '24', neigsStr: ',16,24,5,' },
    { numlimit: '5', num: '24', neigsStr: ',33,16,24,5,10,' },
    { numlimit: '7', num: '24', neigsStr: ',1,33,16,24,5,10,5,' },
    { numlimit: '3', num: '25', neigsStr: ',17,25,2,' },
    { numlimit: '5', num: '25', neigsStr: ',34,17,25,2,21,' },
    { numlimit: '7', num: '25', neigsStr: ',6,34,17,25,2,21,4,' },
    { numlimit: '3', num: '26', neigsStr: ',0,26,3,' },
    { numlimit: '5', num: '26', neigsStr: ',32,0,26,3,35,' },
    { numlimit: '7', num: '26', neigsStr: ',15,32,0,26,3,35,12,' },
    { numlimit: '3', num: '27', neigsStr: ',13,27,6,' },
    { numlimit: '5', num: '27', neigsStr: ',36,13,27,6,34,' },
    { numlimit: '7', num: '27', neigsStr: ',11,36,13,27,6,34,17,' },
    { numlimit: '3', num: '28', neigsStr: ',12,28,7,' },
    { numlimit: '5', num: '28', neigsStr: ',35,12,28,7,29,' },
    { numlimit: '7', num: '28', neigsStr: ',3,35,12,28,7,29,18,' },
    { numlimit: '3', num: '29', neigsStr: ',7,29,18,' },
    { numlimit: '5', num: '29', neigsStr: ',28,7,29,18,22,' },
    { numlimit: '7', num: '29', neigsStr: ',12,28,7,29,18,22,9,' },
    { numlimit: '3', num: '30', neigsStr: ',8,30,11,' },
    { numlimit: '5', num: '30', neigsStr: ',23,8,30,11,36,' },
    { numlimit: '7', num: '30', neigsStr: ',10,23,8,30,11,36,13,' },
    { numlimit: '3', num: '31', neigsStr: ',9,31,14,' },
    { numlimit: '5', num: '31', neigsStr: ',22,9,31,14,20,' },
    { numlimit: '7', num: '31', neigsStr: ',18,22,9,31,14,20,1,' },
    { numlimit: '3', num: '32', neigsStr: ',15,32,0,' },
    { numlimit: '5', num: '32', neigsStr: ',19,15,32,0,26,' },
    { numlimit: '7', num: '32', neigsStr: ',4,19,15,32,0,26,3,' },
    { numlimit: '3', num: '33', neigsStr: ',1,33,16,' },
    { numlimit: '5', num: '33', neigsStr: ',20,1,33,16,24,' },
    { numlimit: '7', num: '33', neigsStr: ',14,20,1,33,16,24,5,' },
    { numlimit: '3', num: '34', neigsStr: ',6,34,17,' },
    { numlimit: '5', num: '34', neigsStr: ',27,6,34,17,25,' },
    { numlimit: '7', num: '34', neigsStr: ',13,27,6,34,17,25,2,' },
    { numlimit: '3', num: '35', neigsStr: ',3,35,12,' },
    { numlimit: '5', num: '35', neigsStr: ',26,3,35,12,28,' },
    { numlimit: '7', num: '35', neigsStr: ',0,26,3,35,12,28,7,' },
    { numlimit: '3', num: '36', neigsStr: ',11,36,13,' },
    { numlimit: '5', num: '36', neigsStr: ',30,11,36,13,27,' },
    { numlimit: '7', num: '36', neigsStr: ',8,30,11,36,13,27,6,' }
  ];

  const combinations = [
    {Comb:[1,2,3,4,5,6], style: '=', quad: '1'},
    {Comb:[4,5,6,7,8,9], style: '=', quad: '1'},
    {Comb:[7,8,9,10,11,12], style: '=', quad: '1'},
    {Comb:[10,11,12,13,14,15], style: '=', quad: '1'},
    {Comb:[13,14,15,16,17,18], style: '=', quad: '1'},
    {Comb:[16,17,18,19,20,21], style: '=', quad: '1'},
    {Comb:[19,20,21,22,23,24], style: '=', quad: '1'},
    {Comb:[22,23,24,25,26,27], style: '=', quad: '1'},
    {Comb:[25,26,27,28,29,30], style: '=', quad: '1'},
    {Comb:[28,29,30,31,32,33], style: '=', quad: '1'},
    {Comb:[31,32,33,34,35,36], style: '=', quad: '1'},
    {Comb:[1,3,5,7,9,12], style: '1R', quad: '1'},
    {Comb:[2,4,6,8,10,11], style: '1B', quad: '1'},
    {Comb:[14,16,18,19,21,23], style: '2R', quad: '1'},
    {Comb:[13,15,17,20,22,24], style: '2B', quad: '1'},
    {Comb:[25,27,30,32,34,36], style: '3R', quad: '1'},
    {Comb:[26,28,29,31,33,35], style: '3B', quad: '1'},
    {Comb:[1,3,5,7,9], style: 'x', quad: '1'},
    {Comb:[4,6,8,10,12], style: 'x', quad: '1'},
    {Comb:[7,9,11,13,15], style: 'x', quad: '1'},
    {Comb:[10,12,14,16,18], style: 'x', quad: '1'},
    {Comb:[13,15,17,19,21], style: 'x', quad: '1'},
    {Comb:[16,18,20,22,24], style: 'x', quad: '1'},
    {Comb:[19,21,23,25,27], style: 'x', quad: '1'},
    {Comb:[22,24,26,28,30], style: 'x', quad: '1'},
    {Comb:[25,27,29,31,33], style: 'x', quad: '1'},
    {Comb:[28,30,32,34,36], style: 'x', quad: '1'},
    {Comb:[0,1,2,3,5], style: '✜', quad: '1'},
    {Comb:[2,4,5,6,8], style: '✜', quad: '1'},
    {Comb:[5,7,8,9,11], style: '✜', quad: '1'},
    {Comb:[8,10,11,12,14], style: '✜', quad: '1'},
    {Comb:[11,13,14,15,17], style: '✜', quad: '1'},
    {Comb:[14,16,17,18,20], style: '✜', quad: '1'},
    {Comb:[17,19,20,21,23], style: '✜', quad: '1'},
    {Comb:[20,22,23,24,26], style: '✜', quad: '1'},
    {Comb:[23,25,26,27,29], style: '✜', quad: '1'},
    {Comb:[26,28,29,30,32], style: '✜', quad: '1'},
    {Comb:[29,31,32,33,35], style: '✜', quad: '1'},
    {Comb:[1,4,7,10], style: '┊', quad: '1'},
    {Comb:[2,5,8,11], style: '┊', quad: '1'},
    {Comb:[3,6,9,12], style: '┊', quad: '1'},
    {Comb:[0,1,4,7,10], style: '┊', quad: '1'},
    {Comb:[0,2,5,8,11], style: '┊', quad: '1'},
    {Comb:[0,3,6,9,12], style: '┊', quad: '1'},
    {Comb:[13,16,19,22], style: '┊', quad: '1'},
    {Comb:[14,17,20,23], style: '┊', quad: '1'},
    {Comb:[15,18,21,24], style: '┊', quad: '1'},
    {Comb:[25,28,31,34], style: '┊', quad: '1'},
    {Comb:[26,29,32,35], style: '┊', quad: '1'},
    {Comb:[27,30,33,36], style: '┊', quad: '1'},
    {Comb:[1,2,4,5], style: '⊞|', quad: '1'},
    {Comb:[2,3,5,6], style: '|⊞', quad: '1'},
    {Comb:[4,5,7,8], style: '⊞|', quad: '1'},
    {Comb:[5,6,8,9], style: '|⊞', quad: '1'},
    {Comb:[7,8,10,11], style: '⊞|', quad: '1'},
    {Comb:[8,9,11,12], style: '|⊞', quad: '1'},
    {Comb:[10,11,13,14], style: '⊞|', quad: '1'},
    {Comb:[11,12,14,15], style: '|⊞', quad: '1'},
    {Comb:[13,14,16,17], style: '⊞|', quad: '1'},
    {Comb:[14,15,17,18], style: '|⊞', quad: '1'},
    {Comb:[16,17,19,20], style: '⊞|', quad: '1'},
    {Comb:[17,18,20,21], style: '|⊞', quad: '1'},
    {Comb:[19,20,22,23], style: '⊞|', quad: '1'},
    {Comb:[20,21,23,24], style: '|⊞', quad: '1'},
    {Comb:[22,23,25,26], style: '⊞|', quad: '1'},
    {Comb:[23,24,26,27], style: '|⊞', quad: '1'},
    {Comb:[25,26,28,29], style: '⊞|', quad: '1'},
    {Comb:[26,27,29,30], style: '|⊞', quad: '1'},
    {Comb:[28,29,31,32], style: '⊞|', quad: '1'},
    {Comb:[29,30,32,33], style: '|⊞', quad: '1'},
    {Comb:[31,32,34,35], style: '⊞|', quad: '1'},
    {Comb:[32,33,35,36], style: '|⊞', quad: '1'},
    {Comb:[0,10,20,30], style: '0s', quad: '1'},
    {Comb:[1,11,21,31], style: '1s', quad: '1'},
    {Comb:[2,12,22,32], style: '2s', quad: '1'},
    {Comb:[3,13,23,33], style: '3s', quad: '1'},
    {Comb:[4,14,24,34], style: '4s', quad: '1'},
    {Comb:[5,15,25,35], style: '5s', quad: '1'},
    {Comb:[6,16,26,36], style: '6s', quad: '1'},
    {Comb:[7,17,27], style: '7s', quad: '1'},
    {Comb:[8,18,28], style: '8s', quad: '1'},
    {Comb:[9,19,29], style: '9s', quad: '1'},
    {Comb:[1,2,3], style: 'BIN', quad: '2'},
    {Comb:[2,3,4], style: 'BIN', quad: '2'},
    {Comb:[3,4,5], style: 'BIN', quad: '2'},
    {Comb:[4,5,6], style: 'BIN', quad: '2'},
    {Comb:[5,6,7], style: 'BIN', quad: '2'},
    {Comb:[6,7,8], style: 'BIN', quad: '2'},
    {Comb:[7,8,9], style: 'BIN', quad: '2'},
    {Comb:[8,9,10], style: 'BIN', quad: '2'},
    {Comb:[9,10,11], style: 'BIN', quad: '2'},
    {Comb:[10,11,12], style: 'BIN', quad: '2'},
    {Comb:[11,12,13], style: 'BIN', quad: '2'},
    {Comb:[12,13,14], style: 'BIN', quad: '2'},
    {Comb:[14,15,16], style: 'BIN', quad: '2'},
    {Comb:[15,16,17], style: 'BIN', quad: '2'},
    {Comb:[17,18,19], style: 'BIN', quad: '2'},
    {Comb:[18,19,20], style: 'BIN', quad: '2'},
    {Comb:[19,20,21], style: 'BIN', quad: '2'},
    {Comb:[20,21,22], style: 'BIN', quad: '2'},
    {Comb:[21,22,23], style: 'BIN', quad: '2'},
    {Comb:[22,23,24], style: 'BIN', quad: '2'},
    {Comb:[23,24,25], style: 'BIN', quad: '2'},
    {Comb:[24,25,26], style: 'BIN', quad: '2'},
    {Comb:[25,26,27], style: 'BIN', quad: '2'},
    {Comb:[26,27,28], style: 'BIN', quad: '2'},
    {Comb:[27,28,29], style: 'BIN', quad: '2'},
    {Comb:[28,29,30], style: 'BIN', quad: '2'},
    {Comb:[29,30,31], style: 'BIN', quad: '2'},
    {Comb:[30,31,32], style: 'BIN', quad: '2'},
    {Comb:[31,32,33], style: 'BIN', quad: '2'},
    {Comb:[32,33,34], style: 'BIN', quad: '2'},
    {Comb:[33,34,35], style: 'BIN', quad: '2'},
    {Comb:[34,35,36], style: 'BIN', quad: '2'},
    {Comb:[1,4,7,5], style: '┣', quad: '1'},
    {Comb:[4,7,10,8], style: '┣', quad: '1'},
    {Comb:[10,13,16,11], style: '┣', quad: '1'},
    {Comb:[13,16,19,17], style: '┣', quad: '1'},
    {Comb:[16,19,22,20], style: '┣', quad: '1'},
    {Comb:[19,22,25,23], style: '┣', quad: '1'},
    {Comb:[22,25,28,26], style: '┣', quad: '1'},
    {Comb:[25,28,31,29], style: '┣', quad: '1'},
    {Comb:[28,31,34,32], style: '┣', quad: '1'},
    {Comb:[3,6,9,5], style: '┤', quad: '1'},
    {Comb:[6,9,12,8], style: '┤', quad: '1'},
    {Comb:[9,12,15,11], style: '┤', quad: '1'},
    {Comb:[12,15,18,14], style: '┤', quad: '1'},
    {Comb:[15,18,21,17], style: '┤', quad: '1'},
    {Comb:[18,21,24,20], style: '┤', quad: '1'},
    {Comb:[21,24,27,23], style: '┤', quad: '1'},
    {Comb:[24,27,30,26], style: '┤', quad: '1'},
    {Comb:[27,30,33,29], style: '┤', quad: '1'},
    {Comb:[30,33,36,32], style: '┤', quad: '1'},
    {Comb:[0,1,2,3], style: '┷', quad: '1'},
    {Comb:[2,4,5,6], style: '┷', quad: '1'},
    {Comb:[5,7,8,9], style: '┷', quad: '1'},
    {Comb:[8,10,11,12], style: '┷', quad: '1'},
    {Comb:[11,13,14,15], style: '┷', quad: '1'},
    {Comb:[14,16,17,18], style: '┷', quad: '1'},
    {Comb:[17,19,20,21], style: '┷', quad: '1'},
    {Comb:[20,22,23,24], style: '┷', quad: '1'},
    {Comb:[23,25,26,27], style: '┷', quad: '1'},
    {Comb:[26,28,29,30], style: '┷', quad: '1'},
    {Comb:[29,31,32,33], style: '┷', quad: '1'},
    {Comb:[32,34,35,36], style: '┷', quad: '1'},
    {Comb:[1,2,3,5], style: 'T', quad: '1'},
    {Comb:[4,5,6,8], style: 'T', quad: '1'},
    {Comb:[7,8,9,11], style: 'T', quad: '1'},
    {Comb:[10,11,12,14], style: 'T', quad: '1'},
    {Comb:[13,14,15,17], style: 'T', quad: '1'},
    {Comb:[16,17,18,20], style: 'T', quad: '1'},
    {Comb:[19,20,21,23], style: 'T', quad: '1'},
    {Comb:[22,23,24,26], style: 'T', quad: '1'},
    {Comb:[25,26,27,29], style: 'T', quad: '1'},
    {Comb:[28,29,30,32], style: 'T', quad: '1'},
    {Comb:[31,32,33,35], style: 'T', quad: '1'},
    {Comb:[1,5,9], style: '╲', quad: '3'},
    {Comb:[3,5,7], style: '╱', quad: '3'},
    {Comb:[4,8,12], style: '╲', quad: '3'},
    {Comb:[6,8,10], style: '╱', quad: '3'},
    {Comb:[7,11,15], style: '╲', quad: '3'},
    {Comb:[9,11,13], style: '╱', quad: '3'},
    {Comb:[10,14,18], style: '╲', quad: '3'},
    {Comb:[12,14,16], style: '╱', quad: '3'},
    {Comb:[13,17,21], style: '╲', quad: '3'},
    {Comb:[15,17,19], style: '╱', quad: '3'},
    {Comb:[16,20,24], style: '╲', quad: '3'},
    {Comb:[18,20,22], style: '╱', quad: '3'},
    {Comb:[22,26,30], style: '╲', quad: '3'},
    {Comb:[24,26,28], style: '╱', quad: '3'},
    {Comb:[25,29,33], style: '╲', quad: '3'},
    {Comb:[27,29,31], style: '╱', quad: '3'},
    {Comb:[28,32,36], style: '╲', quad: '3'},
    {Comb:[30,32,34], style: '╱', quad: '3'},
    {Comb:[11,22,33], style: 'com', quad: '1'},
    {Comb:[1,18,36], style: 'com', quad: '1'},
    {Comb:[12,21,26,34], style: '12co', quad: '1'},
    {Comb:[2,12,22,32,11,20,22,24,29], style: '2co', quad: '1'},
    {Comb:[5,15,25,35,10,20,30], style: '5co', quad: '1'},
    {Comb:[6,16,26,36,12,15,17,23,24,28,32,33], style: '6co', quad: '1'},
    {Comb:[7,17,27,14,16,18,21,25,28,29,34,35], style: '7co', quad: '1'},
    {Comb:[8,18,28,16,17,18,19,24,26,28,30,32,35,36], style: '8co', quad: '1'},
    {Comb:[9,19,29,18,27,33,36], style: '9co', quad: '1'},
  ];

    useEffect(() => {
      const temp3array: finalResult[] = [];
      const temp3BINarray: finalResult[] = [];
      const temp3Stylearray: finalResult[] = [];
      const temp5array: finalResult[] = [];
      const temp5BINarray: finalResult[] = [];
      const temp5Stylearray: finalResult[] = [];
      const temp7array: finalResult[] = [];

      combinations.forEach(combination => {
        console.log(`Checking data item value: ${combination}`);
        const foundResultThree = CheckforCombination(combination.Comb, 3, data, neigArray);
        const splitResult = foundResultThree.split('--');
        if(foundResultThree != ''){
          if(combination.quad === '1'){
            temp3array.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
          }else if(combination.quad === '2'){
            temp3BINarray.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
          }else{
            temp3Stylearray.push({Combination: splitResult[0], Style: combination.style, Missing: splitResult[1]});
          }
          
        }
        const foundResultFive = CheckforCombination(combination.Comb, 5, data, neigArray);
        const splitResultFive = foundResultFive.split('--');
        let tempValue = {Combination: splitResultFive[0], Style: combination.style, Missing: splitResultFive[1]};
        if(foundResultFive != '' && !temp3array.includes(tempValue) && !temp3BINarray.includes(tempValue) && !temp3Stylearray.includes(tempValue)){
          if(combination.quad === '1'){
            temp5array.push(tempValue);
          }else if(combination.quad === '2'){
            temp5BINarray.push(tempValue);
          }else{
            temp5Stylearray.push(tempValue);
          }
        }
      });
      set3CheckArray(temp3array);
      set3BINArray(temp3BINarray);
      set3StyleArray(temp3Stylearray);
      set5CheckArray(temp5array);
      set5BINArray(temp5BINarray);
      set5StyleArray(temp5Stylearray);
    }, [data]);

  return (
    <div>
      <table>
        <tr>
          <td>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Three</th>
                </tr>
              </thead>
              <tbody>
                {ThreeCheckArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>BIN</th>
                </tr>
              </thead>
              <tbody>
                {ThreeBINArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Style</th>
                </tr>
              </thead>
              <tbody>
                {ThreeStyleArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
          <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Five</th>
                </tr>
              </thead>
              <tbody>
                {FiveCheckArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '250px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Style</th>
                </tr>
              </thead>
              <tbody>
                {FiveStyleArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Combination}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Style}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.Missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          {/*<td>
          <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Seven</th>
                </tr>
              </thead>
              <tbody>
                {SevenCheckArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>*/}
        </tr>
      </table>
    </div>
  );
};

export default TopThreeCheck;

function CheckforCombination(combination: number[], numlimit: number, data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string; }[], neigArray: { numlimit: string; num: string; neigsStr: string; }[]) {
  const tempCombColl: number[] = [...combination];
  const foundCombColl: number[] = [];
  let resultStr = '';
  const topValues = data.slice(0, 12);
  let missingCount = 0;
  topValues.forEach(item => {
    if (!resultStr && missingCount < 1) {
      console.log(`Checking data item value: ${item.value}`);
      const foundCombiNum = CheckForCurrentValue(combination, item.value, numlimit, neigArray);
      if(foundCombiNum != ''){
        const num = parseInt(foundCombiNum);
        const indexInTemp = tempCombColl.indexOf(num); 
        if (indexInTemp !== -1) {
          tempCombColl.splice(indexInTemp, 1); 
          foundCombColl.push(num); 
          console.log(`Moved ${num} from tempCombColl to foundCombColl`);
        }else{
          const indexInFoundTemp = foundCombColl.indexOf(num); 
          if (indexInFoundTemp !== -1) {
          }
        }
      }else{
        if(tempCombColl.length == 1){
          resultStr = combination.toString() + '--' + tempCombColl[0].toString();
        }
        missingCount++;
      }
    }
  });
  return resultStr;
}

function CheckForCurrentValue(combination: number[], value: string, numlimit: number, neigArray: { numlimit: string; num: string; neigsStr: string; }[]) {
  let resultStr = '';
  combination.forEach(num => {
    if (!resultStr) {
      console.log(`Checking data combination num value: ${num}`);
      const filteredNeigsStr = filterNeigArray(neigArray, numlimit.toString(), num.toString());
      const tempStr = ',' + value + ',';
      const result = containsSubstring(filteredNeigsStr, tempStr);
      console.log(result);
      resultStr = result ? num.toString() : '';
    }
  });
  return resultStr;
}

function filterNeigArray(neigArray: { numlimit: string; num: string; neigsStr: string; }[], numlimitFilterVal: string, num: string): string { 
  const result = neigArray .filter(neig => neig.numlimit === numlimitFilterVal && neig.num === num) .map(neig => neig.neigsStr); 
  return result.length > 0 ? result[0] : '';
}

function containsSubstring(filteredNeigsStr: string, tempStr: string) {
  return filteredNeigsStr.includes(tempStr);
}

