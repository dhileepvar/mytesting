import React, { useEffect, useState } from 'react';
import Wheel from './Wheel';

interface TopThreeCheckProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const TopThreeCheck: React.FC<TopThreeCheckProps> = ({ data }) => {
  const [ThreeCheckArray, set3CheckArray] = useState<string[]>([]);
  const [FiveCheckArray, set5CheckArray] = useState<string[]>([]);
  const [SevenCheckArray, set7CheckArray] = useState<string[]>([]);
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
    { numlimit: '7', num: '29', neigsStr: ',3,35,12,28,7,29,18,' },
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
  const combinations: number[][] = [
    [0,1,2,3],
    [1,2,3,4,5,6],
    [4,5,6,7,8,9],
    [7,8,9,10,11,12],
    [10,11,12,13,14,15],
    [13,14,15,16,17,18],
    [16,17,18,19,20,21],
    [19,20,21,22,23,24],
    [22,23,24,25,26,27],
    [25,26,27,28,29,30],
    [28,29,30,31,32,33],
    [31,32,33,34,35,36],
    [1,3,5,7,9],
    [1,3,5,7,9,12],
    [2,4,5,6,8],
    [2,4,6,8,10,11],
    [14,16,18,19,21,23],
    [13,15,17,20,22,24],
    [25,27,30,32,34,36],
    [26,28,29,31,33,35],
    [4,8,12,6,10],
    [7,11,15,9,13],
    [10,14,18,12,16],
    [13,15,17,19,21],
    [16,18,20,22,24],
    [19,23,27,25,21],
    [22,26,30,28,24],
    [25,27,29,31,33],
    [28,32,36,30,34],
    [5,7,8,9,11],
    [8,11,13,14,15,17,20],
    [10,11,13,15,17,14],
    [8,10,11,12,14],
    [11,13,14,15,17],
    [14,16,17,18,20],
    [17,19,20,21,23],
    [20,22,23,24,26],
    [23,25,26,27,29],
    [26,28,29,30,32],
    [29,31,32,33,35],
    [28,30,32,34,36],
    [1,4,7,10],
    [2,5,8,11],
    [3,6,9,12],
    [1,4,7,10],
    [0,2,5,8,11],
    [0,3,6,9,12],
    [13,16,19,22],
    [14,17,20,23],
    [15,18,21,24],
    [25,28,31,34],
    [26,29,32,35],
    [27,30,33,36],
    [1,2,4,5],
    [2,3,5,6],
    [4,5,7,8],
    [5,6,8,9],
    [7,8,10,11],
    [8,9,11,12],
    [10,11,13,14],
    [11,12,14,15],
    [13,14,16,17],
    [14,15,17,18],
    [16,17,19,20],
    [17,18,20,21],
    [19,20,22,23],
    [20,21,23,24],
    [22,23,25,26],
    [23,24,26,27],
    [25,26,28,29],
    [26,27,29,30],
    [28,29,31,32],
    [29,30,32,33],
    [31,32,34,35],
    [32,33,35,36],
    [0,10,20,30],
    [1,11,21,31],
    [2,12,22,32],
    [3,13,23,33],
    [4,14,24,34],
    [5,15,25,35],
    [6,16,26,36],
    [7,17,27],
    [8,18,28],
    [9,19,29],
    [1,2,3],
    [2,3,4],
    [3,4,5],
    [4,5,6],
    [5,6,7],
    [6,7,8],
    [7,8,9],
    [8,9,10],
    [9,10,11],
    [10,11,12],
    [11,12,13],
    [12,13,14],
    [14,15,16],
    [15,16,17],
    [17,18,19],
    [18,19,20],
    [19,20,21],
    [20,21,22],
    [21,22,23],
    [22,23,24],
    [23,24,25],
    [24,25,26],
    [25,26,27],
    [26,27,28],
    [27,28,29],
    [28,29,30],
    [29,30,31],
    [30,31,32],
    [31,32,33],
    [32,33,34],
    [33,34,35],
    [34,35,36],
    [1,5,9],
    [3,5,7],
    [4,8,12],
    [6,8,10],
    [7,11,15],
    [9,11,13],
    [10,14,18],
    [12,14,16],
    [13,17,21],
    [15,17,19],
    [16,20,24],
    [18,20,22],
    [22,26,30],
    [24,26,28],
    [25,29,33],
    [27,29,31],
    [28,32,36],
    [30,32,34],
    [11,22,33],
    [12,21,26,34],
    [2,12,22,32,11,20,22,24,29],
    [5,15,25,35,10,20,30],
    [6,16,26,36,12,15,17,23,24,28,32,33],
    [7,17,27,14,16,18,21,25,28,29,34,35],
    [8,18,28,16,17,18,19,24,26,28,30,32,35,36],
    [9,19,29,18,27,33,36]
  ];

    useEffect(() => {
      const temp3array: string[] = [];
      const temp5array: string[] = [];
      const temp7array: string[] = [];

      combinations.forEach(combination => {
        console.log(`Checking data item value: ${combination}`);
        const foundResultThree = CheckforCombination(combination, 3, data, neigArray);
        if(foundResultThree != ''){
          temp3array.push(foundResultThree);
        }
        const foundResultFive = CheckforCombination(combination, 5, data, neigArray);
        if(foundResultFive != '' && !temp3array.includes(foundResultFive)){
          temp5array.push(foundResultFive);
        }
        const foundResultSeven = CheckforCombination(combination, 7, data, neigArray);
        if(foundResultSeven != ''&& !temp3array.includes(foundResultSeven) && !temp5array.includes(foundResultSeven)){
          temp7array.push(foundResultSeven);
        }
      });
      temp3array.sort((a, b) => a.length - b.length);
      temp5array.sort((a, b) => a.length - b.length);
      temp7array.sort((a, b) => a.length - b.length);
      set3CheckArray(temp3array);
      set5CheckArray(temp5array);
      set7CheckArray(temp7array);
    }, [data]);

  return (
    <div>
      <h3>Applied</h3>
      <table>
        <tr>
          <td>
            <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Three</th>
                </tr>
              </thead>
              <tbody>
                {ThreeCheckArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Five</th>
                </tr>
              </thead>
              <tbody>
                {FiveCheckArray.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
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
          </td>
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
          resultStr = combination.toString() + ' 00000 ' + tempCombColl[0].toString();
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

