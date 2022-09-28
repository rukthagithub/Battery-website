import React from "react";
import Heading from "../common/Heading";

const Model = () => {
  const data = [
    // {
    //   id: 1,
    //   model: "ATS-100",
    //   capacity: "100 Ah",
    //   gross: "50 - 51 Kgs",
    //   l: "505",
    //   w: "190",
    //   h: "410",
    // },
    // {
    //   id: 2,
    //   model: "ATS-150",
    //   capacity: "150 Ah",
    //   gross: "56 - 57 Kgs",
    //   l: "505",
    //   w: "190",
    //   h: "410",
    // },
    // {
    //   id: 3,
    //   model: "ATS-200",
    //   capacity: "200 Ah",
    //   gross: "64 - 65 Kgs",
    //   l: "505",
    //   w: "190",
    //   h: "410",
    // },
    // {
    //   id: 4,
    //   model: "ATS-240",
    //   capacity: "240 Ah",
    //   gross: "70 - 71 Kgs",
    //   l: "505",
    //   w: "190",
    //   h: "410",
    // },
    // {
    //   id: 5,
    //   model: "ATS-270",
    //   capacity: "270 Ah",
    //   gross: "75 - 76 Kgs",
    //   l: "505",
    //   w: "190",
    //   h: "410",
    // },
  ];
  return (
    <div className="space-y-8 py-8">
      {/* <div className="px-4">
        <Heading
          title="OUR MODELS @C20"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s"
        />
      </div>
      <div className="container-ats">
        <table class=" table-auto w-full">
          <thead>
            <tr>
              <th
                rowSpan="2"
                className="border-r-2 border-white bg-black text-white p-4 rounded"
              >
                S.No.
              </th>
              <th
                rowSpan="2"
                className="border-r-2 border-white bg-black text-white p-4 rounded"
              >
                Model
              </th>
              <th
                rowSpan="2"
                className="border-r-2 border-white bg-black text-white p-4 rounded"
              >
                Capacity Ah @ C20
              </th>
              <th
                rowSpan="2"
                className="border-r-2 border-white bg-black text-white p-4 rounded"
              >
                Gross Weight ( 3+/- )
              </th>

              <th
                colSpan="3"
                className="border-b-2 border-white bg-black text-white p-4 rounded"
              >
                Dimension
              </th>
            </tr>
            <tr>
              <th className=" border-r-2 border-white bg-black text-white p-4 rounded">
                L
              </th>
              <th className="border-r-2 border-white bg-black text-white p-4 rounded">
                W
              </th>
              <th className="border-r-2 border-white bg-black text-white p-4 rounded">
                H
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((e, obj) => (
              <tr className="">
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.id}
                </td>
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.model}
                </td>
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.capacity}
                </td>
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.gross}
                </td>
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.l}
                </td>
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.w}
                </td>
                <td className="p-2 border-r-2 border-white bg-secondary text-center">
                  {e.h}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Model;
