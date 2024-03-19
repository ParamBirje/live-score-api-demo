export default function Stats() {
  return (
    <section id="stats" className="flex justify-between items-center">
      <div className="border-r-2 border-opacity-20 w-full flex flex-col items-center">
        <p className="text-xl font-bold">400+</p>
        <p>Competitions Covered</p>
      </div>
      <div className="border-r-2 border-opacity-20 w-full flex flex-col items-center">
        <p className="text-xl font-bold">2000+</p>
        <p>API Requests/Hour</p>
      </div>
      <div className="border-r-2 border-opacity-20 w-full flex flex-col items-center">
        <p className="text-xl font-bold">140+</p>
        <p>Countries</p>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-xl font-bold">681%</p>
        <p>Subscriber Growth</p>
      </div>
    </section>
  );
}
