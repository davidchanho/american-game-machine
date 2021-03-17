import React from "react";
import { Table } from "react-bootstrap";
import { IOverview } from "../../context/products";

function Overview({ numberOfPlayers }: IOverview) {
  return (
    <Table>
      <tbody>
        <tr>
          <th>Number of Players</th>
          <td>{numberOfPlayers}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Overview;
