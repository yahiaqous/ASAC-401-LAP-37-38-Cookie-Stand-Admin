import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  function submitForm(event) {
    event.preventDefault();
    const answeredQuestion = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value,
    };
    setData((answers) => [...answers, answeredQuestion]);
    console.log(data);
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
      </Head>
      <header className="py-5 bg-gray">
        <p1>Cookie Stand Admin</p1>
      </header>
      <main className="w-1000">
        <form
          className="flex-col w-3/4 p-2 mx-auto my-8 bg-gray-200"
          onSubmit={submitForm}
        >
          <fieldset>
            <h1 className="my-3 text-2xl text-center" type="text">
              Cookie Stand Admin
            </h1>
            <div className="flex">
              <label className="mx-1">Location</label>
              <input name="location" className="flex-auto" />
            </div>
            <div className="flex w-3/4 my-5">
              <div className="flex-col w-1/4">
                <label>Minimum Custumer per Hour</label>
                <input type="integer" className="" name="minCustomers" />
              </div>
              <div className="flex-col w-1/4">
                <label>Maximum Custumer per Hour</label>
                <input type="integer" className="" name="maxCustomers" />
              </div>
              <div className="flex-col w-1/4">
                <div className="flex"></div>
                <label>Average Cookies per Sales</label>
                <input type="integer" className="" name="avgCookies" />
              </div>
              <button className="px-20 py-5 bg-gray-500 text-gray-50">
                Create
              </button>
            </div>
          </fieldset>
        </form>

        <table className="w-1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-gray-70">location</th>
              <th className="border border-gray-70">minCustomers</th>
              <th className="border border-gray-70">maxCustomers</th>
              <th className="border border-gray-70">avgCookies</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr>
                <td className="pl-2 border border-gray-700 h-1/2">
                  {i.location}
                </td>
                <td className="pl-2 border border-gray-700 h-1/2">
                  {i.minCustomers}
                </td>
                <td className="pl-2 border border-gray-700 h-1/2">
                  {i.maxCustomers}
                </td>
                <td className="pl-2 border border-gray-700 h-1/2">
                  {i.avgCookies}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="">&copy;2021</footer>
    </div>
  );
}
