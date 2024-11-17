import { Card, CardContent } from "../ui/card";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "../ui/accordion";

export default function Faq() {
  return (
    <div className="flex justify-center items-center min-h-screen text-white my-4 px-2">
      <Card className="shadow-lg w-[750px]">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="w-full mt-4" type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:underline-none">
                What is Imaiger?
              </AccordionTrigger>
              <AccordionContent>
                Imaiger is a platform that uses advanced machine learning
                algorithms to help you create, and analyse images on your
                website. Our platform is designed to streamline AI image
                generation process, making it easier and more efficient than
                ever before to create unique brand image assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:underline-none">
                How is Imaiger different from traditional image platforms?
              </AccordionTrigger>
              <AccordionContent>
                Unlike traditional image platforms, Imaiger uses advanced AI
                algorithms to analyse and understand the content of images. This
                allows us to deliver more accurate, relevant, and high-quality
                results, making it easier to analyse and create the images you
                need.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:underline-none">
                Can I customize my generated images?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our platform is fully customizable, allowing you to
                fine-tune your generation settings to match your specific needs.
                Whether you&apos;re looking for images based on content, color,
                size, or other criteria, our platform can deliver results that
                meet your exact requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:underline-none">
                Is Imaiger suitable for businesses and individuals?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our platform is designed to be scalable and customizable,
                making it the perfect choice for businesses and individuals
                alike. Whether you need to find or create one image or
                thousands, our platform can handle it all. Plus, with our
                high-quality and accurate results, you can be rest assured that
                you are getting the best images possible for your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-5">
              <AccordionTrigger className="hover:underline-none">
                Do I need any technical expertise to use Imaiger?
              </AccordionTrigger>
              <AccordionContent>
                No, our platform is designed to be easy to use, even for those
                without any technical expertise. Our user-friendly interface and
                straightforward process makes it simple for anyone to create
                high-quality images quickly and efficiently. Plus, our customer
                support team is always on hand to help with any questions or
                issues you may encounter.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
