import PropTypes from "prop-types";

import { Header, Button, GU, useLayout, Link as AragonLink, IdentityBadge } from "@aragon/ui";


export default function Navbar() {
  const { layoutWidth } = useLayout();
 

  return (
    <div style={{ background: "#081937", width: `${layoutWidth} px` }}>
      <Header
        style={{ padding: 2 * GU }}
        primary={
        
            <AragonLink external={false}>
              Time Locked Wallet
            </AragonLink>
      
        }
        // TODO Use AddressField to display the address. (Not implemented as I can't make
        // the address field align properly)
        secondary={
            <>
          <IdentityBadge
      
      entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
      connectedAccount
    />
    </>
        }
      />
    </div>
  );
}