/* eslint-disable @next/next/no-img-element */
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, imageUrl, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    >
      {imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img src={imageUrl} alt="" className="object-cover w-full h-full" />
        </div>
      )}
      {/* Conditional padding */}
      <div className={cn({ "p-4": !noPadding, "p-0": noPadding }, "w-full")}>
        {props.children}
      </div>
    </div>
  )
);


Card.displayName = "Card";

interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
}

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ imageUrl, className, ...props }, ref) => (
    <div ref={ref} className={cn("relative h-60 overflow-hidden rounded-t-lg", className)} {...props}>
      <img src={imageUrl} alt="" className="object-cover w-full h-full" />
    </div>
  )
);
CardMedia.displayName = "CardMedia";


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  noPadding?: boolean;
}

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl mt-4 font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"


interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center", className, { 'p-6 pt-0': !noPadding })}
      {...props}
    />
  )
);

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardMedia , CardTitle, CardDescription, CardContent }
