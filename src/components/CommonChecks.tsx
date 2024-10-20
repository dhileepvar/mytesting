import React, { useState } from 'react';

interface CommonChecksProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string }[];
}

const CommonChecks: React.FC<CommonChecksProps> = ({ data }) => {
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

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>5 Neigs</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommonChecks;
