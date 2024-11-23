"use client";

import React, { useEffect, useState } from "react";
import OverviewSidebar from "./overview-sidebar";
import CourseVideoComponent from "./course-video-compnent";
import { useModuleContent } from "@/data/get-module-content";
import { Skeleton } from "./ui/skeleton";
import { notFound } from "next/navigation";

const CourseMainPage = ({ moduleId }: { moduleId: string }) => {
  const { data: moduleData, isError, error, isPending } = useModuleContent(moduleId);
  const [currentVideoId, setCurrentVideoId] = useState(
    moduleData?.data?.videos[0].video_id
  );

  useEffect(() => {
    if(moduleData?.data) {
        setCurrentVideoId(moduleData.data.videos[0].video_id)
    }
  },[moduleData])

  function handleSettingVideoId(videoId: string) {
    setCurrentVideoId(videoId);
  }

  if(isPending) {
    return (
      <section className="flex mt-8 relative scroll-smooth">
        <aside className="hidden w-[400px] min-h-[92vh] h-full tablet:flex flex-col justify-start items-start sticky top-8">
          <Skeleton className="min-h-[92vh] h-full max-w-[400px] w-full" /> {/* Sidebar skeleton */}
        </aside>
        <div className="max-w-[1014px] w-full flex flex-col justify-start px-0 mx-auto tablet:max-w-full tablet:mx-0 tablet:pl-12">
          <Skeleton className="h-[500px] w-full" /> {/* Video skeleton */}
          <Skeleton className="h-10 w-3/4 mt-4" /> {/* Title skeleton */}
          <Skeleton className="h-4 w-1/2 mt-2" /> {/* Subtitle skeleton */}
          <Skeleton className="h-6 w-1/4 mt-4" /> {/* Button skeleton */}
        </div>
      </section>
    );
  }

  if (isError || error) {
    console.log(error);
    return <span>Error: check console for more details</span>;
  }

  if (!moduleData?.data) {
    return notFound()
  }


  return (
    <section className="flex mt-8 relative scroll-smooth">
      <aside className="hidden w-[400px] min-h-[92vh] h-full tablet:flex flex-col justify-start items-start sticky top-8">
        <OverviewSidebar
          moduleId={moduleId}
          handleSettingVideoId={handleSettingVideoId}
        />
      </aside>
      <div className="max-w-[1014px] w-full flex flex-col justify-start px-0 mx-auto tablet:max-w-full tablet:mx-0 tablet:pl-12">
        {currentVideoId && (
          <CourseVideoComponent
            moduleData={moduleData.data}
            videoId={currentVideoId}
          />
        )}
      </div>
    </section>
  );
};

export default CourseMainPage;
