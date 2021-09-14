import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import { hours } from '../components/data';

export default function CookieStandAdmin() {
  const [data, setData] = useState([]);
  function onCreate(event) {
    event.preventDefault();
    const answeredQuestion = {
      location: event.target.location.value,
      // minCustomers: event.target.minCustomers.value,
      // maxCustomers: event.target.maxCustomers.value,
      // avgCookies: event.target.avgCookies.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      totals: calculateTotal(),
    };
    calculateHourlyTotals();
    setData((answers) => [...answers, answeredQuestion]);
  }

  function calculateTotal() {
    let total = 0;
    for (let j = 0; j < data.length; j++) {
      total = 0;
      data[j].hourly_sales.map((i) => (total += i));
    }
    return total;
  }

  const [totals, setTotals] = useState([]);
  function calculateHourlyTotals() {
    setTotals([]);
    let totalsArray = [];
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      total = 0;
      data.map((object) => {
        total += object.hourly_sales[i];
        console.log('hi');
      });
      console.log(total, 'total');
      totalsArray.push(total);
      setTotals(totalsArray);
    }
    console.log(totals, 'totals');
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="w-1000">
        <CreateForm onCreate={onCreate} />
        {data.length ? (
          <ReportTable data={data} hours={hours} totals={totals} />
        ) : (
          <h2 className="my-3 text-2xl text-center">
            No Cookie Stands Available
          </h2>
        )}
      </main>

      <Footer />
    </div>
  );
}
