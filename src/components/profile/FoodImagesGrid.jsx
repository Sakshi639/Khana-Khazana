import React from "react";
import { foodItems } from "../../data/mockData";

const FoodImagesGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
    {foodItems.map((item) => (
      <div key={item.id} className="flex flex-col items-center bg-white rounded-lg shadow p-2">
        <img
          src={item.image}
          alt={item.name}
          width={112}
          height={80}
          loading="lazy"
          style={{ width: 112, height: 80, objectFit: 'cover', borderRadius: 8, marginBottom: 8, border: '1px solid #e5e7eb', background: '#f9fafb' }}
        />
        <div className="text-sm font-semibold text-center truncate w-28">{item.name}</div>
      </div>
    ))}
  </div>
);

export default FoodImagesGrid;
