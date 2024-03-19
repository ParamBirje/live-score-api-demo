import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="hero" className="flex justify-between items-center my-10">
      <div className="w-1/2 flex flex-col gap-7">
        <h1 className="rounded-full px-5 py-2 uppercase tracking-wide font-medium text-sm bg-[#48007C] w-fit text-white">
          Fast, Reliable and Live Football API
        </h1>
        <h2 className="text-5xl font-extrabold">
          Build your own football app in minutes!
        </h2>
        <p>
          APIs for realtime football data like scores, teams, events for World
          Cups, UEFA, COPA America, Asian Cup, and many more.{" "}
        </p>

        <div className="flex flex-col gap-10 my-3">
          <div className="flex items-center gap-5">
            <button className=" px-4 py-2 bg-gradient-to-r from-[#6D0EB1] to-[#EA2693] text-white rounded-md hover:brightness-95">
              Get Started For Free
            </button>
            <button className=" px-4 py-2 border border-black text-gray-700 rounded-md hover:bg-black hover:text-white duration-150">
              See LiveScoreAPI in action
            </button>
          </div>
          <div className="border border-gray-700 px-4 py-5 rounded-md">
            <h3 className="text-2xl font-bold">
              2134+ <span className=" font-normal">football apps</span>
            </h3>
            <p>Increased their average session by 90 minutes!</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <img src={hero} alt="Hero Image Demo" />
      </div>
    </section>
  );
}
