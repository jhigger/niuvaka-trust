import Head from "next/head";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import { events, news } from "~/lib/constants";
import { cn, formatDate } from "~/lib/utils";

export type ArticleProps = {
  type: "news" | "event";
  image?: string;
  title: string;
  date: Date;
  excerpt?: string;
  video?: string;
  url?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Article = ({
  type,
  image,
  title,
  date,
  excerpt,
  video,
  url,
  className,
}: ArticleProps) => {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      {type === "news" && image && (
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt="thumbnail"
            className="h-full w-full rounded-xl object-cover"
          />
        </AspectRatio>
      )}
      <h3 className="text-xl font-black">{title}</h3>
      <span className="mt-auto text-sm">Published: {formatDate(date)}</span>
      {type === "news" && excerpt && (
        <p className="line-clamp-5 whitespace-pre-wrap">{excerpt}</p>
      )}
      {type === "news" && !video && (
        <Button
          className="mt-auto self-end rounded-full bg-mint-500 p-6 text-2xl text-white"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      )}
      {type === "event" && video && (
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mx-auto h-full w-full max-w-screen-2xl rounded-xl"
          ></iframe>
        </AspectRatio>
      )}
      {type === "event" && !video && image && (
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt="thumbnail"
            className="mx-auto h-full w-full max-w-screen-2xl rounded-xl object-cover"
          />
        </AspectRatio>
      )}
    </article>
  );
};

const News = () => {
  return (
    <>
      <Head>
        <title>Services - Niuvaka Trust</title>
        <meta
          name="description"
          content="Working cooperatively with Tagata Pasifika, Pasifika communities and Pasifika families to build their capacity and capability."
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />

        <div className="mx-auto mt-40 p-8 md:p-16">
          <h1 className="text-4xl font-black text-mint-500 lg:text-6xl">
            News
          </h1>
        </div>

        <section className="mx-auto p-0">
          <img
            src="/hero_images/news.webp"
            alt="hero"
            className="h-[500px] w-full object-cover xl:h-[800px]"
            loading="eager"
          />
        </section>

        <section className="mx-auto space-y-8 divide-y divide-primary p-8 !pb-0 md:p-16">
          <h2
            id="latest-news"
            className="mb-8 text-center text-2xl font-bold text-coffee-400 lg:text-left lg:text-4xl"
          >
            Check out our news and events for the latest about what&apos;s
            happening in your community!
          </h2>

          <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-2">
            {news.map((article, i) => (
              <Article key={i} {...article} />
            ))}
          </div>

          <h2 id="events" className="sr-only">
            Events
          </h2>

          <div className="divide-y divide-primary">
            {events.map((event, i) => {
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2"
                >
                  {event
                    .sort((a, b) => b.date.getTime() - a.date.getTime())
                    .map((article, i) => (
                      <Article
                        key={i}
                        {...article}
                        className={cn(
                          event.length > 1 ? "col-span-1" : "col-span-full",
                        )}
                      />
                    ))}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mb-16 space-y-8 p-8">
          <h2 className="text-center text-3xl font-bold text-mint-500 lg:text-5xl">
            Gallery
          </h2>

          <Carousel />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default News;
