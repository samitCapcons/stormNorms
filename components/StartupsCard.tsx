import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { StaticImageData } from "next/image";

interface Startups {
  title: string;
  timeRead: string;
  description: string;
  imageUrl: StaticImageData;
}

const StartupCards: React.FC<Startups> = ({
  title,
  description,
  imageUrl,
  timeRead
}) => {
  return (
    <div className="w-full max-w-xs flex justify-center">
    {/* Adjust width as per your design */}
    <Card className="shadow-lg border-none flex flex-col w-full rounded-3xl overflow-hidden" noPadding>
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={imageUrl.src}
          alt={title}
          className="w-full h-48 object-cover rounded-b-none rounded-t-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <CardTitle className="text-start mt-0 text-lg mb-2 text-black">
          {title}
        </CardTitle>
        <CardContent className="text-start text-gray-500 text-sm mb-2 p-0">
          {timeRead}
        </CardContent>
        <CardDescription className="text-start text-md text-[#181921] mt-4">
          {description}
        </CardDescription>
      </div>
    </Card>
  </div>
  );
};
export default StartupCards;
