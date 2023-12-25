import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
};

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Gallery({ topic }: Props) {
  const url = `https://lexica.art/api/v1/search?q=${topic}`.replace(
    /\-+/g,
    " "
  );

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
