import React from 'react'
import { Table, TableHeader, TableRow, TableCell, Text, Main, Button } from '@aragon/ui'

function claimList() {
    return (
        <Main>
            <Table
    header={
      <TableRow>
        <TableHeader title="Activity" />
      </TableRow>
    }
  >
    <TableRow>
      <TableCell>
        <Text>Address</Text>
      </TableCell>
      <TableCell>
        <Text>Duration</Text>
      </TableCell>
      <TableCell>
        <Text>Claim</Text>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Text>Adress</Text>
      </TableCell>
      <TableCell>
        <Text>32 commits</Text>
      </TableCell>
      <TableCell>
        <Button mode="strong">Claim</Button>
      </TableCell>
    </TableRow>
  </Table>
        </Main>
    )
}

export default claimList
