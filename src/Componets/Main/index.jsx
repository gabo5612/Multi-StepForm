/* eslint-disable react/prop-types */

import "./styles.css";


const Main = (props) => {

  return (
    <div className="bg-LightBlue w-screen h-screen flex justify-center items-center  ">
      <div className="bg-White w-4/6 h-5/6 rounded-lg shadow-lg flex">
        <div className="w-1/4 backgroundPic m-4 rounded-lg">
          <div className="flex  w-1-5 h-1-5 gap-4 p-5 ">
            <div className="p-8">
              <div className="flex gap-4 mb-8">
                <span className="border rounded-full py-2 px-4 text-White">1</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 1
                  </span>
                  <span className="text-White font-semibold">YOUR INFO</span>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <span className="border rounded-full py-2 px-4 text-White">2</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 2
                  </span>
                  <span className="text-White font-semibold">SELECT PLAN</span>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <span className="border rounded-full py-2 px-4 text-White">3</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 3
                  </span>
                  <span className="text-White font-semibold">ADD-ONS</span>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <span className="border rounded-full py-2 px-4 text-White">4</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 4
                  </span>
                  <span className="text-White font-semibold">SUMMARY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-24 my-14 w-3/5">{props.children}</div>
      </div>
    </div>
  );
};

export default Main;
