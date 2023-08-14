import { useContext, useEffect, useState } from 'react';
import { modalContext } from './Main';

export default function Modal() {
  const { modalWindow, truncate, currentData } = useContext(modalContext);
  const [fullDetail, setFullDetail] = useState(null);

  useEffect(() => console.log('currentData', currentData), []);
  useEffect(() => console.log('currentData2', currentData), [modalWindow]);

  const formatDate = function (date) {
    return new Date(date).toLocaleDateString();
  };

  useEffect(() => {
    if (modalWindow && currentData) {
      const fullInfo = currentData ? (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <div className="flex items-center gap-2">
              <label htmlFor="name" className="text-2xl">
                Name:{' '}
              </label>
              <h5 className="font-bold tracking-tight text-gray-900 dark:text-white text-2xl">{currentData.missions.length ? truncate(currentData.missions[0].name, 14) : 'No name for this capsule'}</h5>
            </div>

            <div className="flex items-center gap-2 my-3">
              <label htmlFor="flight" className="text-2xl">
                Flight:{' '}
              </label>
              <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.missions.length ? currentData.missions[0].flight : 'No flights for this capsule'}</p>
            </div>

            <div className="flex items-center gap-2 my-3">
              <label htmlFor="status" className="text-2xl">
                Status:{' '}
              </label>
              <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.status || 'No status for this capsule'}</p>
            </div>

            <div className="flex items-center gap-2 my-3">
              <label htmlFor="type" className="text-2xl">
                Type:{' '}
              </label>
              <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.type || 'No type for this capsule'}</p>
            </div>

            <div className="flex items-center gap-2 my-3">
              <label htmlFor="original_launch" className="text-2xl">
                Original Launch:{' '}
              </label>
              <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{formatDate(currentData.original_launch) || 'No original launch time for this capsule'}</p>
            </div>

            <div className="flex items-center gap-2 my-3">
              <label htmlFor="original_launch_unix" className="text-base">
                Original Launch Unix:{' '}
              </label>
              <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.original_launch_unix || 'No original launch unix for this capsule'}</p>
            </div>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentData.details || 'No detail for this capsule'}</p>
          </div>
        </div>
      ) : null;

      console.log(fullDetail);
      setFullDetail(fullInfo);
    }
  }, [modalWindow]);

  // const fullDetail = currentData && (
  //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //     <div className="p-5">
  //       <div className="flex items-center gap-2">
  //         <label htmlFor="name" className="text-2xl">
  //           Name:{' '}
  //         </label>

  //         <h5 className="font-bold tracking-tight text-gray-900 dark:text-white text-2xl">{currentData.missions.length ? truncate(currentData.missions[0].name, 14) : 'No name for this capsule'}</h5>
  //       </div>

  //       <div className="flex items-center gap-2 my-3">
  //         <label htmlFor="flight" className="text-2xl">
  //           Flight:{' '}
  //         </label>
  //         <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.missions.length ? currentData.missions[0].flight : 'No flights for this capsule'}</p>
  //       </div>

  //       <div className="flex items-center gap-2 my-3">
  //         <label htmlFor="status" className="text-2xl">
  //           Status:{' '}
  //         </label>
  //         <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.status || 'No status for this capsule'}</p>
  //       </div>

  //       <div className="flex items-center gap-2 my-3">
  //         <label htmlFor="type" className="text-2xl">
  //           Type:{' '}
  //         </label>
  //         <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.type || 'No type for this capsule'}</p>
  //       </div>

  //       <div className="flex items-center gap-2 my-3">
  //         <label htmlFor="original_launch" className="text-2xl">
  //           Original Launch:{' '}
  //         </label>
  //         <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{formatDate(currentData.original_launch) || 'No original launch time for this capsule'}</p>
  //       </div>

  //       <div className="flex items-center gap-2 my-3">
  //         <label htmlFor="original_launch_unix" className="text-2xl">
  //           Original Launch Unix:{' '}
  //         </label>
  //         <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">{currentData.original_launch_unix || 'No original launch unix for this capsule'}</p>
  //       </div>

  //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentData.details || 'No detail for this capsule'}</p>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className={`modalWindow w-[480px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] rounded-md bg-white ${
        modalWindow && 'visible'
      } w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      {fullDetail || <p className="text-center">Loading...</p>}
    </div>
  );
}
