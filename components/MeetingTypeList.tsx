"use client";

import HomeCard from "./HomeCard";

interface PropType {
  icon: string;
  title: string;
  color: string;
}

const MeetingTypeList = ({ icon, title, color }: PropType) => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        icon="/icons/add-meeting.svg"
        title="New Metting"
        color="bg-orange-1"
      />
      <HomeCard
        icon="/icons/join-meeting.svg"
        title="Join Metting"
        color="bg-blue-1"
      />
      <HomeCard
        icon="/icons/schedule.svg"
        title="Schedule Metting"
        color="bg-purple-1"
      />
      <HomeCard
        icon="/icons/recordings.svg"
        title="View Recordings"
        color="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
