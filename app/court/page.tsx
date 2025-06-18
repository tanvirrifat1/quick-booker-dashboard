"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courts = [
  {
    id: 1,
    name: "Greenwood Tennis Center",
    price: 59,
    availability: "10:00pm",
    image:
      "https://img.freepik.com/free-photo/couple-with-tennis-rackets-outdoor-court_496169-1738.jpg?uid=R83218281&ga=GA1.1.1331766550.1746269247&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Maple Leaf Tennis Club",
    price: 75,
    availability: "9:00pm",
    image:
      "https://img.freepik.com/free-photo/pretty-young-female-tennis-player-serious-court_496169-1774.jpg?uid=R83218281&ga=GA1.1.1331766550.1746269247&semt=ais_hybrid&w=740", // replace with your own image if needed
  },
  {
    id: 3,
    name: "Sunset Tennis Arena",
    price: 65,
    availability: "8:30pm",
    image:
      "https://img.freepik.com/premium-photo/man-blue-shirt-with-letter-w-it_1037615-29611.jpg?uid=R83218281&ga=GA1.1.1331766550.1746269247&semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    name: "Sunset Tennis Arena",
    price: 65,
    availability: "8:30pm",
    image:
      "https://img.freepik.com/premium-photo/man-blue-shirt-with-letter-w-it_1037615-29611.jpg?uid=R83218281&ga=GA1.1.1331766550.1746269247&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    name: "Sunset Tennis Arena",
    price: 65,
    availability: "8:30pm",
    image:
      "https://img.freepik.com/premium-photo/man-blue-shirt-with-letter-w-it_1037615-29611.jpg?uid=R83218281&ga=GA1.1.1331766550.1746269247&semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    name: "Sunset Tennis Arena",
    price: 65,
    availability: "8:30pm",
    image:
      "https://img.freepik.com/premium-photo/man-blue-shirt-with-letter-w-it_1037615-29611.jpg?uid=R83218281&ga=GA1.1.1331766550.1746269247&semt=ais_hybrid&w=740",
  },
];

export default function CourtPage() {
  return (
    <div>
      <div className="flex justify-end items-center space-x-4 mb-8 mr-5">
        <Link href="/createCourt">
          <button
            type="button"
            className="px-8 py-2 font-semibold rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-700 hover:via-blue-600 hover:to-teal-500 transition-all duration-300"
          >
            create
          </button>
        </Link>
      </div>
      <div>
        <div className="w-full max-w-8xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courts.map((court) => (
              <div
                key={court.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48">
                  <Image
                    src={court.image}
                    alt={`Image of ${court.name}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {court.name}
                      </h3>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        ${court.price}
                      </p>
                      <p className="text-sm text-gray-600">
                        available ({court.availability})
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1 h-auto font-medium"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1 h-auto font-medium"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
