/* eslint-disable jsx-a11y/alt-text */
import {useState} from "react"
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Col, Row, Button, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText } from 'reactstrap';
import DatePicker from "reactstrap-date-picker"
import classnames from 'classnames';


const App = () => {
  const [date, setDate] = useState();
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div>
      <div className="header">
       <p>Time Locked Wallet</p>
       <Nav tabs>
<NavItem>
  <NavLink
    className={classnames({ active: activeTab === '1' })}
    onClick={() => { toggle('1'); }}
  >
    Lock Token
  </NavLink>
</NavItem>
<NavItem>
  <NavLink
    className={classnames({ active: activeTab === '2' })}
    onClick={() => { toggle('2'); }}
  >
    Claim Token
  </NavLink>
</NavItem>
</Nav>
      </div>
      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
      <div class="cards-list">
      <div class="card 1">
        <div className="form">
          <p style={{color:"white",fontSize:"24px",fontWeight:"bold",fontStyle:"italic"}}>Enter the details below to lock ERC20/Ether.</p><br/>
          <InputGroup>
          <InputGroupAddon addonType="prepend">
            
          </InputGroupAddon>
          <Input placeholder="address" />
                </InputGroup>
                <br />
                <InputGroup>
          <Input placeholder="0.00" />
          <InputGroupAddon addonType="append">
            <InputGroupText>Ether</InputGroupText>
          </InputGroupAddon>
                </InputGroup>
                <br/>
                <DatePicker value={date}/>
                <br/>
                
                  
                    <div className="button-submit">
                      <Button className="button-info"  size="lg" color="info" >Lock</Button>
                    </div>
                  
                
        </div>
      
      </div>
      </div>
      </TabPane>
      <TabPane tabId="2">
      <div className="table-ripe">
        <table>
    
          <tr>
            <th>Address</th>
            <th>Time Left</th>
            <th>Claim</th>
          </tr>
        
          
            <tr>
              <td>this is it`</td>
              <td>topwndcv okfi</td>
              <td><Button color="info" style={{width:"75%"}}>Claim</Button></td>
            </tr>
            <tr>
              <td>this is it`</td>
              <td>topwndcv okfi</td>
              <td><Button color="info" style={{width:"75%"}}>Claim</Button></td>
            </tr>
            <tr>
              <td>this is it`</td>
              <td>topwndcv okfi</td>
              <td><Button color="info" style={{width:"75%"}}>Claim</Button></td>
            </tr>
            <tr>
              <td>this is it`</td>
              <td>topwndcv okfi</td>
              <td><Button color="info" style={{width:"75%"}}>Claim</Button></td>
            </tr>
            
     
        </table>
      </div>
     </TabPane>

      </TabContent>
    </div>
  );
}

export default App;
