interface TopInfoProps {
  data: { value: string; isVoz: string; isOrp: string; isTi: string; isEnd: string; col: string; type: string; sec: string; rev: string; wicCol: string }[];
}

const TopInfo: React.FC<TopInfoProps> = ({ data }) => {
    const topData = data.slice(0, 12);
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <div style={{ display: 'flex' }}>
                            {topData.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "White",
                                    color: getTextColor(item.col), 
                                    padding: '10px',
                                    border: '1px solid black',
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between'
                                }} >
                                <table>
                                    <tr>
                                        <td>
                                        <div style={{ textAlign: 'center' }}>{item.value}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ flex: 1, paddingLeft: '5px', borderLeft: '1px solid black' }}>{getColumn(item.wicCol)}</div></td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ flex: 1, paddingRight: '5px', borderLeft: '1px solid black'  }}>{item.sec.replace(/\./g,"")}</div></td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ flex: 1, paddingLeft: '5px', borderLeft: '1px solid black' }}>{getSection(item.isTi,item.isOrp,item.isVoz)}</div></td>
                                    </tr>
                                    <tr>
                                        <td><div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid black' }}>
                                            <div style={{ flex: 1, paddingLeft: '5px', borderLeft: '1px solid black' }}>{item.rev}</div>
                                        </div></td>
                                    </tr>
                                </table>                                
                            </div> ))}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
     );
};

const getTextColor = (backgroundColor: string): string => { 
    switch (backgroundColor) { 
        case "REE": 
            return "Red"; 
        case "BLAAAAAA": 
            return "Black"; 
        case "GREEEEEEEEEE": 
            return "Green";
        default: return "black"; 
    }
};

const getSection = (isTi: string, isOrp: string, isVoz: string): string => { 
    if(isTi === "Yes"){
        return "Ti";
    }else if(isOrp === "Yes"){
        return "Or";
    }else if(isVoz === "Yes"){
        return "Vo";
    }else {
        return "";
    }
};

const getColumn = (whiCol: string): string => { 
    if(whiCol === "Ri"){
        return "R";
    }else if(whiCol === "Le"){
        return "L"; 
    }else if(whiCol === "Mi"){
        return "M";
    }else {
        return "";
    }
};

export default TopInfo;
