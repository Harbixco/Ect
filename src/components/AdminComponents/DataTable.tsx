const DataTable = ({ columns, data, onRowClick }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl shadow lg:overflow-x-hidden">
      <table className="w-full border-separate border-spacing-y-2 bg-white">
        <thead className="bg-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="border-b border-gray-200 px-[10px] py-2 text-left  text-sm font-bold "
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick(row)}
              className="bg-adminBg "
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className=" cursor-pointer px-6 py-3 text-[12px] font-semibold md:text-sm"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
