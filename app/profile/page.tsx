"use client";

import ProfileSidebar from "@/components/ProfileSidebar";
import AttendanceTimelineCard from "@/components/AttendanceTimelineCard";
import AttendanceTableCard from "@/components/AttendanceTableCard";
import Info from "@/components/Info";

export default function ProfilePage() {
  return (
    <main className="p-6 bg-[#f4ede3] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        <div className="md:col-span-3">
          <ProfileSidebar />
        </div>

        <div className="md:col-span-9 space-y-6">
          <Info />
          <AttendanceTimelineCard />
          <AttendanceTableCard />
        </div>
      </div>
    </main>
  );
}
