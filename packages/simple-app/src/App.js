/**
 * Ensure to remove below react import
 * For optimizing the build package
 * that will be passed to s-o-c app
 */
import React from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, LMT!</h1>
      <MarkupContent />
    </>
  );
}

const defaultTableData = [
  { employeeId: 1, employeeName: 'Gaurav' },
  { employeeId: 2, employeeName: 'Sanjay' },
  { employeeId: 3, employeeName: 'Vijay' },
  { employeeId: 4, employeeName: 'Rajeev' },
  { employeeId: 5, employeeName: 'Nikhil' },
]

function MarkupContent() {
  const [tableData, setTableData] = React.useState(defaultTableData);
  return (
    <table>
    <thead><tr><th>Employee Id</th><th>Employee Name</th></tr></thead>
    <tbody>
    {tableData.map(({employeeId, employeeName}) => (<tr><td>{employeeId}</td><td>{employeeName}</td></tr>))}
    </tbody>
    </table>
  );
}