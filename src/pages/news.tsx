import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";
import { formatDate } from "~/lib/utils";
import { events, news } from "~/lib/constants";
import Carousel from "~/components/Carousel";

export type ArticleProps = {
  type: "news" | "event";
  image?: string;
  title: string;
  date: Date;
  excerpt?: string;
  video?: string;
};

const Article = ({
  type,
  image,
  title,
  date,
  excerpt,
  video,
}: ArticleProps) => {
  return (
    <article className="flex flex-col gap-4 py-8">
      {type === "news" && image && (
        <img
          src={image}
          alt="thumbnail"
          className="aspect-video w-full rounded-xl object-cover"
        />
      )}
      <h3 className="text-xl font-black">{title}</h3>
      <span className="text-sm">Published: {formatDate(date)}</span>
      {type === "news" && excerpt && (
        <p className="line-clamp-5 whitespace-pre-wrap">{excerpt}</p>
      )}
      {type === "news" && !video && (
        <Button className="mt-auto self-end rounded-full bg-mint-500 p-6 text-2xl text-white">
          Read More
        </Button>
      )}
      {type === "event" && video && (
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mx-auto aspect-video w-full max-w-screen-2xl rounded-xl"
        ></iframe>
      )}
      {type === "event" && !video && image && (
        <img
          src={image}
          alt="thumbnail"
          className="mx-auto aspect-video w-full max-w-screen-2xl rounded-xl object-cover"
        />
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

        <div className="container mx-auto mt-52 p-8 md:p-16">
          <h1 className="text-3xl font-black text-mint-500 md:text-6xl">
            News
          </h1>
        </div>

        <section className="container mx-auto p-0">
          <img
            src="https://via.placeholder.com/1500x500?text=Image"
            alt="hero"
            className="aspect-[3/1] w-full object-cover"
            loading="eager"
          />
        </section>

        <section className="container mx-auto space-y-8 divide-y divide-primary p-8 md:p-16">
          <h2
            id="latest-news"
            className="mb-8 text-center text-xl font-bold text-coffee-400 md:text-3xl lg:text-left"
          >
            Check out our news and events for the latest about what&apos;s
            happening in your community!
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {news.map((article, i) => (
              <Article key={i} {...article} />
            ))}
          </div>

          <h2 id="events" className="sr-only">
            Events
          </h2>

          {events.map((article, i) => (
            <Article key={i} {...article} />
          ))}
        </section>

        <section className="container mx-auto mb-16 space-y-16 md:p-16">
          <h2 className="py-8 text-3xl font-bold text-mint-500 md:text-6xl">
            Gallery
          </h2>
          <div className="w-full">
            <Carousel />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default News;
