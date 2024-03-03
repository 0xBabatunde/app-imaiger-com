import Link from "next/link";
import Image from "next/image";
import { generateImages } from "@/data/dashboard-images";

export default function MadeForYou() {
  return (
    <div className="flex justify-center py-8">
      <div className="grid grid-cols-3 gap-4">
        {generateImages.map((image, index) => (
          <>
            <div
              key={index}
              className="group rounded-lg border-4 border-transparent hover:border-amber-600 transition-colors duration-300 px-1 py-1"
            >
              <Link href={image.href}>
                <div className="relative">
                  <Image
                    alt="Fashionable person with red background"
                    className="w-full h-auto rounded-t-lg"
                    height="547"
                    src={image.cover}
                    style={{
                      aspectRatio: "634/547",
                      objectFit: "cover",
                    }}
                    width="634"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 rounded-t-lg group-hover:bg-opacity-25 flex justify-center items-center transition-opacity duration-300" />
                </div>
                <div className="mt-2 p-2 flex flex-col justify-between">
                  <p className="text-xs">{image.name}</p>
                  <p className="text-xs">{image.description}</p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
