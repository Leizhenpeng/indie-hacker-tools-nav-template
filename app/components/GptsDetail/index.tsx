import Link from "next/link";
import { BsChatDots } from "react-icons/bs";
import { Items } from "@/app/types/gpts";
import Preview from "./Preview";
import { getGptsTools } from "@/app/services/gpts";
import moment from "moment";

interface Props {
  post: Items;
}

export default ({ post }: Props) => {
  // const tools = getGptsTools(post);

  console.log("postgpts details", post);
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="w-full mb-4 text-lg">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div>
                  <Link className="text-gray-400 hover:text-gray-500" href="/">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                  </svg>
                  <Link
                    className="ml-2 text-md font-medium text-gray-500 hover:text-gray-700"
                    aria-current="page"
                    href="/gpts/random"
                  >
                    tools
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                  </svg>
                  <Link
                    href={"#"}
                    className="ml-2 text-md font-medium text-gray-500 hover:text-gray-700"
                    aria-current="page"
                  >
                    {post?.properties?.Title.title[0].plain_text}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center rounded-md bg-[#c4c4c4] px-3 py-1">
              <div className="mr-1 h-2 w-2 rounded-full bg-black"></div>
              <p className="text-sm">
                Created at {moment(post.last_edited_time).fromNow()}
              </p>
            </div>
            <p className="text-sm text-[#808080] sm:text-xl">
              Created by {post.properties.Title.title[0].plain_text}
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
              {post?.properties?.Title.title[0].plain_text}
            </h1>
            <p className="text-sm text-[#808080] sm:text-xl">
              {post?.properties?.Description.rich_text[0].plain_text}
            </p>
            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
            {/* <div className="mb-6 flex flex-col gap-2 text-sm text-[#808080] sm:text-base lg:mb-8">
              <p className="font-medium">Capabilities</p>
              <p>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={tools && tools.includes("browser")}
                />
                Web Browsing
              </p>
              <p>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={tools && tools.includes("dalle")}
                />
                DALL·E Image Generation
              </p>
              <p>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={tools && tools.includes("python")}
                />
                Code Interpreter
              </p>
            </div> */}

            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <Link
                href={post.properties ? post.properties.Link.url : "#"}
                target="_blank"
                className="flex items-center gap-2 rounded-md border border-solid border-black bg-primary text-white px-6 py-3 truncate"
              >
                <BsChatDots />
                <p>
                  Try using {post?.properties?.Title.title[0].plain_text} in
                  your next project 👉
                </p>
              </Link>
            </div>
          </div>
          <div className="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]">
            {/* <Preview gpts={post} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
