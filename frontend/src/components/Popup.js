import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Popup() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            data-aos="zoom-in-down"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-solid border-blueGray-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-8 flex-auto">
                  <h3
                    className="text-3xl font-bold text-green-700 text-center"
                    data-aos="flip-left"
                  >
                    Don't Miss Out!
                  </h3>
                  <p
                    className="my-5 text-blueGray-500 text-md leading-relaxed text-center"
                    data-aos="flip-left"
                    data-aos-delay="200"
                  >
                    Over 2.5 crore people get married in India every year.
                    <br /> Your perfect match will not wait for you forever!
                  </p>
                  <button
                    className="bg-red-400 text-white ml-2 mx-auto active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    data-aos="flip-left"
                    data-aos-delay="400"
                  >
                    YES, I WOULD LIKE TO FIND MY SPECIAL SOMEONE
                  </button>

                  <p
                    className="my-4 text-center text-blueGray-500 text-md leading-relaxed cursor-pointer"
                    onClick={() => setShowModal(false)}
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    No, I am not seriously looking for a life partner right now.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
