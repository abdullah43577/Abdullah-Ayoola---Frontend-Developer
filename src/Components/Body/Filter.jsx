import { useContext } from 'react';
import { modalContext } from './Main';

export default function Filter() {
  const { capsules, filterStatus } = useContext(modalContext);
  const uniqueStatus = [...new Set(capsules.map((obj) => obj.status))];
  const uniqueType = [...new Set(capsules.map((obj) => obj.type))];
  const uniqueLaunchDate = [...new Set(capsules.map((obj) => obj.original_launch_unix))];

  const capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = function (date) {
    return new Date(date).toLocaleDateString();
  };

  return (
    <section className="filter flex items-center flex-col gap-3 w-full justify-center my-8">
      <h2 className="text-white text-4xl font-bold">Filter By:</h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="status">
          <label htmlFor="status" className="block mb-2 text-xl">
            Status
          </label>
          <select name="status" className="w-[150px] p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onChange={(e) => filterStatus(e.target.value, null, null)}>
            {uniqueStatus.map((value, i) => (
              <option key={i} value={value}>
                {capitalize(value)}
              </option>
            ))}
          </select>
        </div>

        <div className="launchDate">
          <label htmlFor="status" className="block mb-2 text-xl">
            Launch Date
          </label>
          <select name="launchDate" className="w-[150px] p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onChange={(e) => filterStatus(null, null, e.target.value)}>
            {uniqueLaunchDate.map((value, i) => (
              <option key={i} value={value}>
                {formatDate(value)}
              </option>
            ))}
          </select>
        </div>

        <div className="type lg:ml-4">
          <label htmlFor="status" className="block mb-2 text-xl">
            Type
          </label>
          <select name="type" className="w-[150px] p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onChange={(e) => filterStatus(null, e.target.value, null)}>
            {uniqueType.map((value, i) => (
              <option key={i} value={value}>
                {capitalize(value)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
