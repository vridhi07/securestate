import Navbar from "../../Component/Common/Navbar";
import laptopImage from "../../constantData/images/LaptopPic.png";
import {
  DevSecOpsData,
  solutionData,
  ourMissionData,
} from "../../constantData/homedata/homeData";
import buildCode from "../../constantData/images/buildCode.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Hero section */}
      <section className="    px-3 max-w-6xl mx-auto w-[95vw] pt-8 md:pt-10">
        <div className=" grid grid-cols-5  px-3 mr-3">
          <div className=" md:col-span-2 col-span-5">
            <div className="flex flex-col justify-end items-start w-full md:py-[6rem]  md:px-10">
              <header className="md:mt-10 pt-1 ">
                <div className="text-2xl md:text-4xl text-[#3B4754] font-bold text-left">
                  <h4>Product Security,</h4>

                  <h4 className="border border-[#E74021] py-1 mt-0.5 w-[16rem]">
                    Made Simpler
                  </h4>
                </div>
              </header>
              <p className="mt-2 text-[#798da3] md:text-lg text-base ">
                Integrated security at every phase of <br />
                the product development lifecycle
              </p>

              <button className="px-5 py-2 bg-orange-cus-1 text-white mt-2 rounded-sm uppercase tracking-wider text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:col-span-3 col-span-5">
            <img src={laptopImage} alt="laptop_pic" className="w-full  " />
          </div>
        </div>
      </section>
      {/* Hero end */}
      <main>
        <div className="w-full mt-3 px-4 md:px-0 py-3 bg-orange-cus-1 text-white  ">
          <section className="flex flex-col md:flex-row md:justify-center md:items-center">
            <h4 className="text-base font-bold">
              Do you know your security posture?
            </h4>
            <div className="md:ml-5 mt-2 text-xs md:mt-0 bg-white text-orange-cus-1 px-3 py-2 rounded-sm cursor-pointer w-[148px] md:w-auto">
              Get A free Assessment
            </div>
          </section>
        </div>
        <section className="mt-3 mb-5   max-w-6xl mx-auto md:mt-11 w-[95vw]">
          <div className="flex flex-col justify-start items-center">
            <header className="text-center">
              <h2 className="text-left font-bold text-4xl text-black">
                DevSecOps Orchestration
              </h2>
              <p className="text-left text-sm text-black mt-2">
                &lt; Eliminating the chaos within application security &gt;
                <br />
                &lt;Centralize security data from mulitple sources into a single
                dashboard&gt;
                <br />
                &lt; Manage your application security program from a single
                program&gt;
                <br />
                &lt; End to end security management of your product development
                lifecycle&gt;
              </p>
            </header>
            <section className="mt-10 flex flex-col md:flex-row md:justify-around md:items-center w-full">
              {DevSecOpsData.map((item, index) => {
                return (
                  <article
                    className={`${
                      index === 2 ? "py-[1.95rem]" : "py-8"
                    }  px-2   w-full  `}
                    key={item.id}
                  >
                    <div
                      className={`flex justify-center items-center ${
                        index === 2 ? "mb-[0.4rem]" : "mb-3"
                      } `}
                    >
                      {item.icon}
                    </div>
                    <section>
                      <h4 className="text-center text-[#3b4754] text-2xl font-bold">
                        {item.heading}
                      </h4>
                      <p className="text-center text-[#798da3] max-w-[250px] mx-auto  text-base ">
                        {item.content}
                      </p>
                    </section>
                  </article>
                );
              })}
            </section>
          </div>
        </section>
        <section className=" mb-5   max-w-5xl mx-auto md:mt-11 w-[95vw]">
          <div className="w-full ">
            <img
              src={buildCode}
              alt="build code"
              className="w-full object-cover"
            />
          </div>
        </section>
        <section className="mt-3 mb-5   max-w-6xl mx-auto md:mt-11 w-[95vw]">
          <h2 className="text-center text-4xl text-black font-bold">
            Solutions
          </h2>
          <section className="w-full mb-5 mt-10 flex flex-col md:flex-row md:justify-around md:items-center">
            {solutionData.map((item, index) => {
              return (
                <article
                  key={item.id}
                  className={`md:w-[25%] w-full rounded-md border mt-4 md:mt-0 shadow-md shadow-orange-cus-1 border-gray-500  px-2  ${
                    index === 2 ? "py-[3rem]" : "py-[4rem]"
                  }`}
                >
                  <div className="flex items-center justify-center mb-[2.5rem] ">
                    {item.icon}
                  </div>
                  <p className="max-w-[240px] text-lg font-bold text-black text-center mx-auto ">
                    <span>{item.content}</span>
                    {index !== 2 && <br />}
                    <span>({item.bracket})</span>
                  </p>
                </article>
              );
            })}
          </section>
        </section>
        <section className="mt-3 mb-5   max-w-6xl mx-auto md:mt-[9rem] w-[95vw]">
          <header className="mt-3 mb-6">
            <h4 className="text-center mb-3 text-4xl text-black font-bold">
              Our Mission
            </h4>
          </header>
          <div className="grid md:grid-cols-4 gap-x-3  w-ful">
            <article className="md:col-span-2 col-span-4 pt-4 md:pl-[7rem] test">
              <div className="border shadow-lg shadow-orange-cus-1 rounded-md px-3 py-2">
                <p className="text-[1.625rem] font-normal test max-w-[343px] mb-5">
                  Bring security to the table on day one and eliminate
                  vulnerabilities before they ever reach production. A bug
                  discovered in design is a fraction of the cost when discovered
                  in production.
                </p>
                <p className="mb-3 test">
                  <span> Capability Gap:</span> Most security teams can't get
                  past the capability gap of standard testing at the end of the
                  development litecycle, our tools help integrate security
                  earlier in the design and development phases
                </p>
                <p className="test">
                  <span>Actionable Intelligence:</span> Findings reported on the
                  platform come with actionable recommendations that | give
                  developers the tools and guidance to quickly remediate bugs to
                  focus on development
                </p>
              </div>
            </article>
            <article className="md:col-span-2 col-span-4  mt-4 md:mt-0 px-4 test ">
              <header className="mb-3 ">
                <h2 className="text-[#3b4754] text-2xl font-bold text-left">
                  Securing the Software <br /> Development LifeCycle
                </h2>
                <h4 className="text-[#9fafc1] text-xl font-semibold">
                  To protect your SDLC, we become an extension of it
                </h4>
              </header>
              <section className="flex flex-col pl-[2rem]">
                {ourMissionData.map((item) => {
                  return (
                    <div className=" py-8  grid grid-cols-4" key={item.id}>
                      <div className="col-span-1  flex justify-center items-center">
                        {item.icon}
                      </div>
                      <div className="col-span-3 ">
                        <h4 className="text-[#3b4754] text-2xl font-bold">
                          {item.heading}
                        </h4>
                        <p className="text-[#9fafc1] text-base font-normal">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </section>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
