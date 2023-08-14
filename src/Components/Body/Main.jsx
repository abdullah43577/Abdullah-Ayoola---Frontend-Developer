import { useEffect, useState, createContext } from 'react';
import activeRocket from '../../assets/images/activeCapsule.jpg';
import crashedRocket from '../../assets/images/crashedRocket.jpg';
import rustyRocket from '../../assets/images/rustyRocket.jpg';
import unknownImg from '../../assets/images/unknown.jpg';
import Modal from './Modal';
import Filter from './Filter';

export const modalContext = createContext();

export default function Main() {
  const [capsules, setCapsules] = useState([]);
  const [modalWindow, setModalWindow] = useState(false);
  const [currentData, setCurrentData] = useState({});
  // const openModal = function () {
  //   setModalWindow(true);
  // };

  const sendCurrentData = function (data) {
    setCurrentData(data);
    setModalWindow(true);
  };

  const status = {
    active: activeRocket,
    retired: rustyRocket,
    unknown: unknownImg,
    destroyed: crashedRocket,
  };

  useEffect(() => {
    const fetchCapsules = async function () {
      try {
        const res = await fetch('https://api.spacexdata.com/v3/capsules');
        const data = await res.json();
        setCapsules(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCapsules();
  }, []);

  const truncate = function (str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const capsulesData = capsules.map((obj) => {
    return (
      <div key={obj.capsule_serial} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {obj.status && <img className="rounded-t-lg w-full lg:w-[332.5px] lg:h-[279.792px]" src={status[obj.status]} alt={obj.status} />}

        <div className="p-5">
          <div className="flex items-center gap-2">
            <label htmlFor="name" className="text-2xl">
              Name:{' '}
            </label>

            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white text-2xl">{obj.missions.length ? truncate(obj.missions[0].name, 14) : 'No name for this capsule'}</h5>
          </div>

          <div className="flex items-center gap-2 my-3">
            <label htmlFor="flight" className="text-2xl">
              Flight:{' '}
            </label>
            <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{obj.missions.length ? obj.missions[0].flight : 'No flights for this capsule'}</p>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{obj.details || 'No detail for this capsule'}</p>
          <div
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            onClick={() => sendCurrentData(obj)}
          >
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </div>
        </div>
      </div>
    );
  });

  return (
    <modalContext.Provider value={{ modalWindow, setModalWindow, truncate, currentData }}>
      <main>
        <Filter />
        <section className="capsules gap-[2rem] px-8">{capsulesData}</section>
        <Modal />
        <div className={`overlay absolute top-0 left-0 bottom-0 z-[1000] h-full w-full ${modalWindow && 'visible'}`} onClick={() => setModalWindow(false)}></div>
      </main>
    </modalContext.Provider>
  );
}
