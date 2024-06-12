import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

export function ImgCaroussel() {
    const autoplayPlugin = Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true
    }) as any;
  return (
    <Carousel
      className="w-[40vw]"
      plugins={[autoplayPlugin]}
    >
      <CarouselContent>
      <CarouselItem>
          <div>
            <h1 className="text-center text-6xl">Welcome to our application</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1 className="text-center text-6xl">Post your Idea to the world</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1 className="text-center text-6xl">PostMates is here for your Best Idea</h1>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
