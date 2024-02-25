import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function VoterTable({ voters }: { voters: any[] }) {
  return (
    <div className="px-4">
      <Table>
        <Thead>
          <Tr>
            <Th>Voter Id</Th>
            <Th>Name</Th>
            <Th>Gardian</Th>
            <Th>Area</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {voters.map((data) => (
            <Tr key={data._id}>
              <Td>{data.voterId.toString().padStart(4, "0")}</Td>
              <Td>{data.name}</Td>
              <Td>{data.gardian}</Td>
              <Td>{data.area}</Td>
              <Td>{data.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default VoterTable;
