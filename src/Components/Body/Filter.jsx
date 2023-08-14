export default function Filter() {
  return (
    <section className="filter flex items-center gap-3 w-full justify-center my-8">
      <h2 className="text-white text-4xl font-bold">Filter By:</h2>
      <div className="flex items-center">
        <div className="btn relative border border-white w-[150px] h-[50px] mx-2 overflow-hidden cursor-pointer">
          <div className="hover bg-white h-full w-full absolute translate-y-[100%]"></div>
          <button className="font-bold w-full h-full absolute">Status</button>
        </div>

        <button className="border border-white font-bold px-6 py-3 mx-2">Original Launch</button>
        <button className="border border-white font-bold px-6 py-3 mx-2">Type</button>
      </div>
    </section>
  );
}
