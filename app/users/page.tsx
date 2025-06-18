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

  const transactions = [
    {
      id: 447,
      name: "Marvin McKinney",
      phone: "+1 (555) 123-4477",
      date: "1 Feb, 2020",
      amount: "$45",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xAA+EAABAwMBBQQFCgQHAAAAAAABAAIDBAURIQYSMUFRBxNhcSJTgbHSFRYyQlKRkpOhwQgUFyMzYmNz0eHw/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACURAQEAAgIBAgYDAAAAAAAAAAABAhEDEiExUQQFEyJBYRSBwf/aAAwDAQACEQMRAD8A7iiIgIiICIiAiKhKCuUyFFNtduLPshRufWzNkqy3MVJG4d489cch4lfP+1fahtHtFK9orZKGkP0aelcWaeLhqfcg+m7he7VbTi43SipD0qKhkfvKwYtstl5pNyPaK0ufyArI9f1Xx4XbxLnHU8T1QHy+5B9uwSxzRiSF7XsPBzHAg+0L3kdQvjOxbQ3awVAms9wnpHZy4Mcd13m3gfau59nPa5T3yWG2bQBlJXyejHONIpndP8pP3IOtIqZHVVQEREBERAREQEREBERAREQFptq7sbJs5crmGgupYHPaCeLsafqtyuV/xDVUtPsZTwxOwyprmseOoDXO94CD59uddUXOsnra2V81TM4vkkcclxP/ALGPBYeF0bYjszk2msMtznq3UneEtpBuBwfg6ucOOM6adFpb72d7TWd7jJb3VMA4T0v9xpHkNR7Que03p10y1vSJIrssEkLt2Vj2O6OaR71bx4rpyorjXgY+kCOBBWXQWW53GQR0FBUzvPARxE5W6vGwG0FlsXyvcqdkMAeGPj3wZGZ4EgaAZ04qNxOq7n2LbXT7T7Pvpq8PdWW8tjfMRpI053Tnrpr5eK6OuUfw7TiXY+riDQDDWuBIGpy1pXV1KBERAREQEREBERAREQEREBcn/iMjc/ZG3lozu17c48WPHvXWFC+063i62mgpsbzvlGB271aHel+mVF8RMm6uWKhZbLLQUMbcNgp44/ubr+uVnjQ5TrjgqLDbuvSxmppZnoqSoOZ6WCUn7cYKsss9sYcst1ID/st/4WYibqesUjjZGN2JjWN6NAAWDf7bHdrJX26QZbUQOZ5HkfvwtgmmcqN+douPjSA/w5sfFY7xHI3dcytDXA8juDIXX1BuzO3Ntcu0kLRjfuz5B5OY0+8lThb5dx5tmqqiIpQIiICIiAiIgIiICIiAo9fXH5VpWH6IbkeakK110oBWNY5rt2WN2Wu/Yrjkm8VnHlMct1r1RVcCHEHjwVFi1p6M8wRERKqIFQDL8DUnQBQhSyk/LFQ1ow0sy7HXRSJa+2W8UneSvdvSyH0iOQ6LYLbxyzF5vJlMsvCqIiscCIiAiIgIiICIiAiIgLyvSog1FdFuTEgei7X2rFW0u24yifK4fQ1WraQWgtdvN4g+Cx8uOsm/gz7YiKqKpcLIoYu8qBkaN1KxnEBuScDn4LZWgskpRKzg48VbxY7yU82WsGeqoi2MAiIgIiICIiAiIgIiICIqE4KCqosWuuFLb4HT1szIY2jJLz7uqhNy7S6VkrWW+lfLHvAOlf6Po8yBxUzG1FyiZXINqIX0xOjhqeije/Nb5DFON+PGhHvC3kMrZoWTRu3mSND2nqCMrxUwR1ERjkaMciBqCquTDsv4uTqwGVlOW570DwKOradoz3gPktZVU0lLKWPOejhwcFSlp5KmYMYNOZPILL186bO81tlGSa4SiGAFrPrE+8qRWsMp4G07ToOBPNYtJTR0sQjjGRzJ+srk0rIYXzSO3WRtL3HoAMrVx4dWLl5O3hts4CZXP7Z2l0rpnMuFK+KPeIZKw73o8iRxU2obhS3CBs9FOyaNwyCw+/orbLFMsrKyqryDqvShIiIgIiICIiAqE4QrQbXX35HomiHBqpdIweDRzcVMm7pFumRe9oaGzsxPJvzn6MLNXHz6e1Qe6bZ3St3m072UsR5R6uPtUelkfPI6WZ7nyPOXOdxJXhaceOT1U5Z2rNzlfLFJJLI+SRxA33uyfvK1HBbqWJszcP4ea11ZAyFwDHEk6kHkuvRzHQuze7/zNA+2zOzJTaxeMZP7FTHXkuJWS4vtNzhrI84Y70wPrNPELtlPIyoZHJC4OjkAcxwOhB5rNnjryvxy3GDfamlpre+WsI3R/hgcS7lhebBVUlXQNkpCB6xp4td4qGbXSVr7xLFV5DY9Imt+jucirOzdRWU93gbS5PfODHNdwI/64rVPhJePt+Xi35vlPifp6+30dK8+Kh3aRd/5agZbYXYkqdZfCMH9ypjUPZTMklncGRsaXvcToGjmuJXu4vu1zmrJM4e70Gn6reQWbDHd29nK6mmBjIW3tkrooo5IpHRyNJG+x2D94WDRwMmcQ9xBGoA5rYxRNhbhnDjxWiRTUnte2Vzot1tQ9tVEOUmjh7QpxZNoaG8MxBJuTgelC/Rw8uo8lyNe4pHwSNlhe5kjDkObxBXGXFKmZ2O4A5VVH9kb6LxRFsxAqotJAODhycFvwchZ7NXS+XaqIihIiIg8nhquT7X1prb9UkOyyI900eS6w44aSuKVr+8ral/2pnn9SreGedquS/hYREWmqhaiqDmzu3tcnj1W3BBAIKxK+Lfj3wMlnLwXKWuXUOy27iooZbXM4d5T+lFnnGeXsK5es6x3OWz3SCuiyTGfSb9pvMLjLHtNOpl18pZtNP399q3Dg1+4PIae/KxrRL3N2opDwE7c+ROP3WM+X+YkfPkHvXF+fPVee8EX9xxIDCHZ6YXqTHXFr9PhMs7l8V2/f+pX2pXgQUUdrgcO9qPSlxyjHL2lcuPHVZ18uct3uk9dLkGR3otJ+i3kFgry8ces0+77dptdpQ507d3TB49Ft1i0EW5HvnQv5eCyiQASSrI4oiIpG62QrDR3+mJdhkp7pw65XWRwXE6J/d1tO/7MrD+oXa2HLVn5p52u4r4ekRFSsEREFuXSJ58CuIv1cT1JK7dO0vhe1uMuaQMrm42DvHraP8x3wq3isnqr5Jb6IwvLzusJ8FKvmHd/W0f5jvhXiXYK8uje1stHkjA/uO+FW98fdX1qJ0bt+maT0IV4gEY5HipFS9n16hj3HzUR1zpI74Vf+Yd39bR/mO+FO+PudcnP6mIwylgGnEHqFax04qe1fZ5eJmjclog4cMyO4fhWL/TS++uoPzXfCublj7p61orVPvMMJ+pq3yS7T7rBCPr6u8lIKfs5v0MzZBNQnB1Heu4fhSo7Ob9NM6QzUIydB3rtB+Faf5U+n1eRPlmvjPq6+31/tCcK7TRGaUMI04k+Cl39NL766g/Nd8KyqTs8u8LTvy0RceOJHcPwrPMsfd6/Wo8AAMchwVmsduU73DoApf8AMO7+to/zHfCrFX2fXqaPcZNRDXOsrvhU98fdHWo4w7zAfBVUmi2CvDY2NdLR5AwcSO+Fe/mHd/W0f5jvhU98fc61GGaPa7oQV2+E5iafALmx2DvGo72j1/1HfCukQNLIWNdjLWgHCp5LLrSzjlm9riIiqWCIiAqFEQUVeSIgAKiIgqV5yiIGUyiIGV6CoiAqkIiByVERBUKqIgIiIP/Z",
    },
    {
      id: 426,
      name: "Jane Cooper",
      phone: "+1 (555) 123-0426",
      date: "21 Sep, 2020",
      amount: "$75",
      image: "https://via.placeholder.com/48?text=JC",
    },
    {
      id: 922,
      name: "Esther Howard",
      phone: "+1 (555) 123-0922",
      date: "24 May, 2020",
      amount: "$45",
      image: "https://via.placeholder.com/48?text=EH",
    },
    {
      id: 816,
      name: "Darlene Robertson",
      phone: "+1 (555) 123-0816",
      date: "24 May, 2020",
      amount: "$75",
      image: "https://via.placeholder.com/48?text=DR",
    },
    {
      id: 185,
      name: "Cameron Williamson",
      phone: "+1 (555) 123-0185",
      date: "17 Oct, 2020",
      amount: "$45",
      image: "https://via.placeholder.com/48?text=CW",
    },
    {
      id: 738,
      name: "Ronald Richards",
      phone: "+1 (555) 123-0738",
      date: "1 Feb, 2020",
      amount: "$45",
      image: "https://via.placeholder.com/48?text=RR",
    },
    {
      id: 600,
      name: "Jerome Bell",
      phone: "+1 (555) 123-0600",
      date: "21 Sep, 2020",
      amount: "$75",
      image: "https://via.placeholder.com/48?text=JB",
    },
    {
      id: 583,
      name: "Dianne Russell",
      phone: "+1 (555) 123-0583",
      date: "8 Sep, 2020",
      amount: "$45",
      image: "https://via.placeholder.com/48?text=DR",
    },
    {
      id: 177,
      name: "Bessie Cooper",
      phone: "+1 (555) 123-0177",
      date: "21 Sep, 2020",
      amount: "$45",
      image: "https://via.placeholder.com/48?text=BC",
    },
    {
      id: 826,
      name: "Robert Fox",
      phone: "+1 (555) 123-0826",
      date: "22 Oct, 2020",
      amount: "$75",
      image: "https://via.placeholder.com/48?text=RF",
    },
    {
      id: 540,
      name: "Kathryn Murphy",
      phone: "+1 (555) 123-0540",
      date: "17 Oct, 2020",
      amount: "$45",
      image: "https://via.placeholder.com/48?text=KM",
    },
    {
      id: 274,
      name: "Leslie Alexander",
      phone: "+1 (555) 123-0274",
      date: "17 Oct, 2020",
      amount: "$75",
      image: "https://via.placeholder.com/48?text=LA",
    },
  ];

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

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
          User List
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-black  py-8">
              <TableRow>
                <TableHead className="text-[#FFF] text-lg text-center">
                  User ID
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  User Name
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Phone Number
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Join Date
                </TableHead>
                <TableHead className="text-[#FFF] text-lg text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentTransactions.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="text-center text-black text-lg">
                    {user.id}
                  </TableCell>
                  <TableCell className="text-center text-black text-lg">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-black text-lg">
                    {user.phone}
                  </TableCell>
                  <TableCell className="text-center text-black text-lg">
                    {user.date}
                  </TableCell>
                  <TableCell className="text-center text-black text-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => openUserModal(user)}
                    >
                      <Info className="h-6 w-6" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="max-w-sm mx-auto flex items-center justify-between border-t border-gray-200 rounded-lg bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-black  px-4 py-3 mt-6">
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
              <DetailRow label="User ID:" value={selectedUser?.id} />
              <DetailRow label="User Name" value={selectedUser?.name} />
              <DetailRow label="Phone Number" value={selectedUser?.phone} />
              <DetailRow label="Join Date" value={selectedUser?.date} />
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
