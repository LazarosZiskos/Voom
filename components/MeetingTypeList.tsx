"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        icon="/icons/add-meeting.svg"
        description="Start an instant meeting"
        title="New Metting"
        color="bg-orange-1"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        icon="/icons/join-meeting.svg"
        description="via invitation link"
        title="Join Metting"
        color="bg-blue-1"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        icon="/icons/schedule.svg"
        description="Plan your meeting"
        title="Schedule Metting"
        color="bg-purple-1"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        icon="/icons/recordings.svg"
        description="Check out your recordings"
        title="View Recordings"
        color="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
    </section>
  );
};

export default MeetingTypeList;
