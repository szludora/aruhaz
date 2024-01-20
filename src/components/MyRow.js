export default function MyRow(props) {
  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.price}</td>
    </tr>
  );
}
