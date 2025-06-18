"use client";

import { Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import DetailRow from "@/components/DetailRow";

export default function DashboardContent() {
  return (
    <main className="bg-background2 w-full p-4 md:p-6">
      <section>
        <TransactionTable />
      </section>
    </main>
  );
}

function TransactionTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Cleaned-up bookings array with unique IDs
  const bookings = [
    {
      id: 427,
      courtName: "Central Park Court",
      price: "$75",
      address: "123 Main St, Cityville",
      date: "21 Sep, 2020",
      time: "10:00 AM",
      user: {
        name: "Jane Cooper",
        phone: "+1 (555) 123-0426",
        image: "https://via.placeholder.com/48?text=JC",
      },
    },
    {
      id: 426,
      courtName: "Riverside Court",
      price: "$60",
      address: "456 River Rd, Townsville",
      date: "22 Sep, 2020",
      time: "2:00 PM",
      user: {
        name: "Esther Howard",
        phone: "+1 (555) 123-0922",
        image: "https://via.placeholder.com/48?text=EH",
      },
    },
    {
      id: 425,
      courtName: "Sunny Hills Court",
      price: "$80",
      address: "789 Sunny Rd, Hilltown",
      date: "23 Sep, 2020",
      time: "4:00 PM",
      user: {
        name: "Michael Smith",
        phone: "+1 (555) 123-4567",
        image: "https://via.placeholder.com/48?text=MS",
      },
    },
    {
      id: 424,
      courtName: "Downtown Arena",
      price: "$70",
      address: "101 City Rd, Downtown",
      date: "24 Sep, 2020",
      time: "6:00 PM",
      user: {
        name: "Alice Johnson",
        phone: "+1 (555) 123-7890",
        image: "https://via.placeholder.com/48?text=AJ",
      },
    },
    {
      id: 423,
      courtName: "Lakeside Court",
      price: "$65",
      address: "321 Lake Dr, Lakeside",
      date: "25 Sep, 2020",
      time: "11:00 AM",
      user: {
        name: "Robert Brown",
        phone: "+1 (555) 123-3210",
        image: "https://via.placeholder.com/48?text=RB",
      },
    },
    {
      id: 422,
      courtName: "Greenfield Court",
      price: "$85",
      address: "654 Green St, Greenfield",
      date: "26 Sep, 2020",
      time: "3:00 PM",
      user: {
        name: "Sarah Davis",
        phone: "+1 (555) 123-6543",
        image: "https://via.placeholder.com/48?text=SD",
      },
    },
    {
      id: 421,
      courtName: "Oakwood Court",
      price: "$90",
      address: "987 Oak Ave, Oakwood",
      date: "27 Sep, 2020",
      time: "5:00 PM",
      user: {
        name: "David Wilson",
        phone: "+1 (555) 123-9876",
        image: "https://via.placeholder.com/48?text=DW",
      },
    },
    {
      id: 420,
      courtName: "Maple Park Court",
      price: "$55",
      address: "147 Maple Rd, Maple Park",
      date: "28 Sep, 2020",
      time: "9:00 AM",
      user: {
        name: "Emily Taylor",
        phone: "+1 (555) 123-1478",
        image: "https://via.placeholder.com/48?text=ET",
      },
    },
    {
      id: 419,
      courtName: "Hilltop Court",
      price: "$75",
      address: "258 Hill Rd, Hilltop",
      date: "29 Sep, 2020",
      time: "1:00 PM",
      user: {
        name: "James Anderson",
        phone: "+1 (555) 123-2589",
        image: "https://via.placeholder.com/48?text=JA",
      },
    },
    {
      id: 418,
      courtName: "Cedar Court",
      price: "$60",
      address: "369 Cedar St, Cedarville",
      date: "30 Sep, 2020",
      time: "7:00 PM",
      user: {
        name: "Olivia Martinez",
        phone: "+1 (555) 123-3690",
        image: "https://via.placeholder.com/48?text=OM",
      },
    },
    {
      id: 417,
      courtName: "Pinewood Court",
      price: "$70",
      address: "741 Pine Rd, Pinewood",
      date: "01 Oct, 2020",
      time: "12:00 PM",
      user: {
        name: "William Clark",
        phone: "+1 (555) 123-7412",
        image: "https://via.placeholder.com/48?text=WC",
      },
    },
    {
      id: 416,
      courtName: "Valley Court",
      price: "$80",
      address: "852 Valley Dr, Valleyview",
      date: "02 Oct, 2020",
      time: "2:00 PM",
      user: {
        name: "Sophia Lewis",
        phone: "+1 (555) 123-8523",
        image: "https://via.placeholder.com/48?text=SL",
      },
    },
    {
      id: 415,
      courtName: "Meadow Court",
      price: "$65",
      address: "963 Meadow Ln, Meadowtown",
      date: "03 Oct, 2020",
      time: "4:00 PM",
      user: {
        name: "Liam Walker",
        phone: "+1 (555) 123-9634",
        image: "https://via.placeholder.com/48?text=LW",
      },
    },
    {
      id: 414,
      courtName: "Harbor Court",
      price: "$85",
      address: "159 Harbor Rd, Harbortown",
      date: "04 Oct, 2020",
      time: "6:00 PM",
      user: {
        name: "Ava Harris",
        phone: "+1 (555) 123-1596",
        image: "https://via.placeholder.com/48?text=AH",
      },
    },
    {
      id: 413,
      courtName: "Elmwood Court",
      price: "$70",
      address: "753 Elm St, Elmwood",
      date: "05 Oct, 2020",
      time: "10:00 AM",
      user: {
        name: "Noah Young",
        phone: "+1 (555) 123-7531",
        image: "https://via.placeholder.com/48?text=NY",
      },
    },
    {
      id: 412,
      courtName: "Starlight Court",
      price: "$75",
      address: "864 Star Rd, Starlight",
      date: "06 Oct, 2020",
      time: "3:00 PM",
      user: {
        name: "Mia King",
        phone: "+1 (555) 123-8642",
        image: "https://via.placeholder.com/48?text=MK",
      },
    },
    {
      id: 411,
      courtName: "Crestwood Court",
      price: "$60",
      address: "975 Crest Rd, Crestwood",
      date: "07 Oct, 2020",
      time: "5:00 PM",
      user: {
        name: "Ethan Scott",
        phone: "+1 (555) 123-9753",
        image: "https://via.placeholder.com/48?text=ES",
      },
    },
    {
      id: 410,
      courtName: "Brookside Court",
      price: "$80",
      address: "186 Brook Rd, Brookside",
      date: "08 Oct, 2020",
      time: "11:00 AM",
      user: {
        name: "Isabella Green",
        phone: "+1 (555) 123-1864",
        image: "https://via.placeholder.com/48?text=IG",
      },
    },
    {
      id: 409,
      courtName: "Westend Court",
      price: "$65",
      address: "297 West Rd, Westend",
      date: "09 Oct, 2020",
      time: "1:00 PM",
      user: {
        name: "Mason Adams",
        phone: "+1 (555) 123-2975",
        image: "https://via.placeholder.com/48?text=MA",
      },
    },
    {
      id: 408,
      courtName: "Skyline Court",
      price: "$90",
      address: "408 Skyline Dr, Skylinetown",
      date: "10 Oct, 2020",
      time: "7:00 PM",
      user: {
        name: "Charlotte Baker",
        phone: "+1 (555) 123-4086",
        image: "https://via.placeholder.com/48?text=CB",
      },
    },
  ];

  // Pagination calculations
  const totalPages = Math.ceil(bookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, bookings.length);
  const currentTransactions = bookings.slice(startIndex, endIndex);

  const openUserModal = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="overflow-hidden bg-white rounded-md">
        <h2 className="text-[32px] font-medium text-primary py-6 px-3">
          Booking List
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-black py-8">
              <TableRow>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Booking ID
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Court Name
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Price
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Address
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Date
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Time
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  User Details
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentTransactions.length > 0 ? (
                currentTransactions.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="text-center text-black text-lg">
                      {booking.id}
                    </TableCell>
                    <TableCell className="text-center text-black text-lg">
                      {booking.courtName}
                    </TableCell>
                    <TableCell className="text-center text-black text-lg">
                      {booking.price}
                    </TableCell>
                    <TableCell className="text-center text-black text-lg">
                      {booking.address}
                    </TableCell>
                    <TableCell className="text-center text-black text-lg">
                      {booking.date}
                    </TableCell>
                    <TableCell className="text-center text-black text-lg">
                      {booking.time}
                    </TableCell>
                    <TableCell className="text-center text-black text-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => openUserModal(booking.user)}
                      >
                        <Info className="h-6 w-6" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center text-black text-lg"
                  >
                    No bookings available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="max-w-sm mx-auto flex items-center justify-between border-t border-gray-200 rounded-lg bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-black px-4 py-3 mt-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>
              <span className="text-sm text-[#E6E6E6]">Previous</span>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    className={`h-8 w-8 p-0 ${
                      page === currentPage ? "bg-teal-800 text-white" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#E6E6E6]">Next</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md rounded-md bg-[#000000] px-6 py-6 shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>

            {/* User Image */}
            {selectedUser?.image && (
              <div className="flex justify-center mb-4">
                <img
                  src={selectedUser.image}
                  alt={selectedUser.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
            )}

            {/* Heading */}
            <h2 className="mb-6 text-center text-[30px] font-semibold text-[#E6E6E6]">
              User Details
            </h2>

            {/* User Details */}
            <div className="space-y-6">
              <DetailRow label="User ID:" value={selectedUser?.id || "N/A"} />
              <DetailRow label="User Name" value={selectedUser?.name} />
              <DetailRow label="Phone Number" value={selectedUser?.phone} />
              <DetailRow
                label="Join Date"
                value={selectedUser?.date || "N/A"}
              />
            </div>

            {/* Okay Button */}
            <Button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full bg-[#45b1b4] hover:bg-[#5ce1e6b7]"
            >
              Okay
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
