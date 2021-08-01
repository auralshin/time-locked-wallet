import React, { useState } from 'react'
import { Main, Card, TextInput, Button, DateRangePicker } from '@aragon/ui'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const LockCard = () => {
    
    const [address, setAddress] = useState<String>("");
    const [amount, setAmount] = useState<String>("");
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [unixDate, setUnixDate] = useState<number>();
    return (
        <Main style={{display:"flex", justifyContent:"center"}}>
            <Card>
                <label>Enter your Address</label>
            <TextInput
            
      value={address}
      onChange={(
        ev: React.ChangeEvent<HTMLInputElement>,
    ): void => setAddress(ev.target.value)}
    />
     <label>Enter Token Amount (ERC20/Ether)</label>
            <TextInput
            
      value={amount}
      onChange={(
        ev: React.ChangeEvent<HTMLInputElement>,
    ): void => setAmount(ev.target.value)}
    />
    <br/>
    <DatePicker selected={startDate} onChange={(date: Date | null)=> date && setStartDate(date) && setUnixDate(startDate!.getTime())} />
    <br/>
    <Button label="Lock Token" mode="strong"/>
            </Card>
        </Main>
    )
}

export default LockCard;
