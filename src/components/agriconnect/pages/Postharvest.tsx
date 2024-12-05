import React from "react";
import { postHarvestData } from "../../../mockData";
const PostHarvestModule = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Post-Harvest Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postHarvestData.map((facility, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold">{facility.facility}</h2>
            <p>Distance: {facility.distance}</p>
            <p>Capacity: {facility.capacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostHarvestModule;
