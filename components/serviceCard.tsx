import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardMedia,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { StaticImageData } from "next/image";

interface Service {
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

const ServiceSectionCard: React.FC<Service> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="w-full max-w-xs flex justify-center">
      {" "}
      {/* Adjust width as per your design */}
      <Card className="shadow-lg flex flex-col items-center p-6 w-[85%]">
        <div className="w-[85%] pl-8">
          
        <div className="overflow-hidden rounded-lg items-center flex justify-center ">
          <img
            src={imageUrl.src}
            alt={title}
            className="h-24 w-24 object-cover"
          />
        </div>
        <CardTitle className="text-center lg:text-xl text-md mb-2 text-black">
          {title}
        </CardTitle>
        <CardDescription className="text-sm mb-4 text-center line-clamp-3 text-black">
          {description}
        </CardDescription>
        </div>
      </Card>
    </div>
  );
};
export default ServiceSectionCard;
