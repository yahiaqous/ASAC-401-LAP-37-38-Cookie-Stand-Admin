export default function ReportTable(props) {
  return (
    <table className="w-1/2 mx-auto my-4">
      <thead>
        <tr>
          <th className="border border-gray-70">location</th>
          {props.hours.map((i) => (
            <th className="border border-gray-70">{i}</th>
          ))}
          <th className="border border-gray-70">Totals</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((i) => (
          <tr>
            <td className="pl-2 border border-gray-700 h-1/2">{i.location}</td>
            {i.hourly_sales.map((j) => (
              <td className="pl-2 border border-gray-700 h-1/2">{j}</td>
            ))}
            <td className="pl-2 border border-gray-700 h-1/2">{i.totals}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Totals</th>
          {props.totals.map((i) => (
            <td>{i}</td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
