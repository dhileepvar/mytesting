import React, { useContext } from 'react';
import MissingTab from './MissingTab';

interface TabOneProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string }[];
}

const DetailsTab: React.FC<TabOneProps> = ({ data }) => {
  return <table>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>Missing</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Possible</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Dont miss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid black', padding: '8px' }}>
        <table>
              <tbody>
                <tr>
                  <td><MissingTab data={data} /></td>
                </tr>
              </tbody>
            </table>
      </td>
      <td style={{ border: '1px solid black', padding: '8px' }}>Content 2</td>
      <td style={{ border: '1px solid black', padding: '8px' }}>Content 3</td>
    </tr>
  </tbody>
</table>;
};

export default DetailsTab;
