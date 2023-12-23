import Image from "next/image";
import { cn } from "@/lib/utils";
import { DashboardImages } from "../data/dashboard-images";

interface DashboardImagesProps extends React.HTMLAttributes<HTMLDivElement> {
  image: DashboardImages;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ImageArtwork({
  image,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: DashboardImagesProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={image.cover}
          alt={image.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{image.name}</h3>
        <p className="text-xs text-muted-foreground">{image.description}</p>
      </div>
    </div>
  );
}
