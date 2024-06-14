import React, { useEffect, useState } from "react";
import RecentDataCard from "./RecentDataCard";

const initalData = {
  new: {
    Units: 0,
    MSRP: 0,
    AvgMSRP: 0,
  },
  used: {
    AvgMSRP: 0,
    Units: 0,
    MSRP: 0,
  },
  cpo: {
    Units: 0,
    MSRP: 0,
  },
};
export default function RecentData({ data }) {
  const [sortedData, setSortedData] = useState(initalData);

  useEffect(() => {
    if (data.length > 0) {
      handleSortData(data);
    }
  }, [data]);

  const handleSortData = (fetchedData) => {
    const sortedObj = { ...initalData };

    fetchedData.forEach((element) => {
      // console.log(element);
      if (element.condition == "new") {
        sortedObj.new.Units = sortedObj.new.Units + 1;
        sortedObj.new.MSRP =
          sortedObj.new.MSRP + parseInt(element.price.split(" ")[0]);
      } else if (element.condition == "used") {
        sortedObj.used.Units = sortedObj.used.Units + 1;
        sortedObj.used.MSRP =
          sortedObj.used.MSRP + parseInt(element.price.split(" ")[0]);
      } else if (element.condition == "cpo") {
        sortedObj.cpo.Units = sortedObj.cpo.Units + 1;
        sortedObj.cpo.MSRP =
          sortedObj.cpo.MSRP + parseInt(element.price.split(" ")[0]);
      }
    });

    if (sortedObj.new.Units > 0) {
      sortedObj.new.AvgMSRP = (
        sortedObj.new.MSRP / sortedObj.new.Units
      ).toFixed(0);
      console.log(sortedObj.new.AvgMSRP);
    }
    if (sortedObj.used.Units > 0) {
      sortedObj.used.AvgMSRP = (
        sortedObj.used.MSRP / sortedObj.used.Units
      ).toFixed(0);
      console.log(sortedObj.used.AvgMSRP);
    }

    setSortedData(sortedObj);
    console.log(sortedObj);
  };

  return data && data.length > 0 ? (
    <div className="">
      <h1>Recent Gathered Data : Date</h1>
      <h2>{data[0].condition}</h2>

      <div className="flex">
        {/* New */}
        <RecentDataCard name="# New Units" value={sortedData.new.Units} />
        <RecentDataCard name="New MSRP" value={"$" + sortedData.new.MSRP} />
        <RecentDataCard name="New MSRPAvg" value={sortedData.new.AvgMSRP} />

        {/* Used */}
        <RecentDataCard name="# Used Units" value={sortedData.used.Units} />
        <RecentDataCard name="Used MSRP" value={"$" + sortedData.used.MSRP} />
        <RecentDataCard name="Used MSRPAvg" value={sortedData.used.AvgMSRP} />

        {/* CPO */}
        <RecentDataCard name="# cpo Units" value={sortedData.cpo.Units} />
        <RecentDataCard name="cpo MSRP" value={"$" + sortedData.cpo.MSRP} />
      </div>
    </div>
  ) : (
    <div>please check data</div>
  );
}
