// function amennyiben jelenít meg adatot -> pagesben
// class, amennyiben nem jelenít meg adatot, tehát modellről van szó

import MyRow from "../components/MyRow";
import { products } from "../models/products";
import Table from 'react-bootstrap/Table';


export default function Admin(props) {
  const list = products;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Termék</th>
          <th>Ár</th>
        </tr>
      </thead>
      <tbody>
        {list.map((elem, index) => {
          return <MyRow obj={elem} key={index} />;
        })}
      </tbody>
    </Table>
  );
}
