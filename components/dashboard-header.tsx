"use client";

import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetProfileQuery } from "@/redux/feature/settingAPI";

export default function DashboardHeader() {
  const pathname = usePathname();
  const { data: userProfile, isLoading } = useGetProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (
    pathname === "/signin" ||
    pathname === "/create-account" ||
    pathname === "/forget-password" ||
    pathname === "/verify-password" ||
    pathname === "/verify-otp" ||
    pathname === "/reset-password"
  ) {
    return null;
  }

  return (
    <header className="w-[98%] mx-auto sticky top-0 z-20 flex h-[72px] items-center justify-between bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 px-4 text-white rounded md:px-6 my-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-white md:hidden" />
        <div>
          <h1 className="text-2xl font-medium">
            Welcome, {userProfile?.full_name}
          </h1>
          <p className="text-sm opacity-80">Have a nice day</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/notifications" className="relative text-white">
          <Bell className="h-6 w-6" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/setting/personal-information">
            <Avatar>
              <AvatarImage
                src={`/admin.png`}
                // src={`${process.env.NEXT_PUBLIC_API_URL}${userProfile?.profile_pic}`}
                alt={userProfile?.full_name}
              />
              <AvatarFallback>
                {userProfile?.full_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Link>
          <span className="hidden md:inline">
            {userProfile?.full_name || "Admin"}{" "}
          </span>
        </div>
      </div>
    </header>
  );
}
