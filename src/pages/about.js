import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";
import React from "react";
import Layout from "./components/Layout";

function About() {
  return (
    <Layout>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
          <h1 className="text-5xl font-extrabold pb-12">About Me.</h1>

          <h2 className="text-2xl font-semibold pb-5">📖 Education</h2>

          <div className="grid grid-flow-row grid-rows-2">
            <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px]">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">Fordham University</p>
                <p className="text-lg invisible md:visible">
                  Expected May 2024
                </p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600">
                Pursuing a Bachelor of Science in Information Systems.
                <br></br>
                Relevant coursework includes System Analysis, Mobile and Web App
                Design & Development, Database System, and Web Analytics.
              </div>
            </div>

            <div className="row-span-1 px-5 border-l-[1px]">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">Flatiron School</p>
                <p className="text-lg invisible md:visible">
                  Graduated August 2022
                </p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600">
                Graduated from the Computer Science and Full Stack Software
                Engineering program.
                <br></br>
                Best in class final project: Boomergram
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold pb-5">👨🏻‍💻 Work Experience</h2>
          <div className="grid grid-flow-row grid-rows-2">
            {/* Plante Experience */}
            <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px] ">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">Plante</p>
                <p className="text-lg invisible md:visible">
                  Melbourne, Australia
                </p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
                <div className="flex justify-between font-medium">
                  <p>Software Engineer (Remote, Part-time)</p>
                  <p>February 2023 – Present</p>
                </div>
                <ul className="list-disc">
                  <li>
                    Develop and maintain a full-stack e-commerce site with
                    Next.js, Node.js, and PostgreSQL.
                  </li>
                  <li>
                    Leverage real-time databases to optimize stock management,
                    order processing, and customer service.
                  </li>
                  <li>
                    Reduce page load time by 40% by implementing caching, load
                    balancing, and server-side rendering.
                  </li>
                </ul>
              </div>
            </div>

            {/* The Markup Experience */}
            <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px] ">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">The Markup</p>
                <p className="text-lg invisible md:visible">New York, NY</p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
                <div className="flex justify-between font-medium">
                  <p>Software Engineer Intern</p>
                  <p>June 2023 – August 2023</p>
                </div>
                <ul className="list-disc">
                  <li>
                    Revamped Blacklight - a real-time website privacy inspector,
                    improving performance with full-stack optimizations.
                  </li>
                  <li>
                    Introduced two new features: targeted URL scans and API keys
                    system for access control.
                  </li>
                  <li>
                    Authored the Blacklight RESTfull API documentation, boosting
                    20% API usage and 1000+ monthly user engagements.
                  </li>
                  <li>
                    Improved Blacklight&apos;s performance by 25% by optimizing
                    its backend using Node.js and AWS Lambda/S3.
                  </li>
                </ul>
              </div>
            </div>

            {/* Ra Labs Experience */}
            <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px] ">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">Ra Labs</p>
                <p className="text-lg invisible md:visible">New York, NY</p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
                <div className="flex justify-between font-medium">
                  <p>Full-stack Software Engineer Intern</p>
                  <p>February 2023 – May 2023</p>
                </div>
                <ul className="list-disc">
                  <li>
                    Launched the MVP of Amenti, a cryptocurrency trading
                    platform with robust backend support.
                  </li>
                  <li>
                    Designed and implemented RESTful APIs using Ruby on Rails
                    and PostgreSQL.
                  </li>
                  <li>
                    Developed intuitive user interfaces using React.js and
                    collaborated in Agile development.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px] ">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">
                  Vietnam - New York Youth Association
                </p>
                <p className="text-lg invisible md:visible">New York, NY</p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
                <div className="flex justify-between font-medium">
                  <p>Project Manager</p>
                  <p>January 2022 - June 2022</p>
                </div>
                <ul className="list-disc">
                  <li>
                    Strategized and budgeted event campaigns for the “2022
                    Vietnamese Lunar New Year Event”
                  </li>
                  <li>
                    Managed a 6-people team for event planning, budgeting, and
                    marketing by collaborating through Google Suites and
                    tracking progress through Notion
                  </li>
                  <li>
                    Created written and visual content to increase social media
                    exposure, receiving 17,000 impressions in three weeks
                  </li>
                  <li>
                    Achieved total profit of $4,000 in 2 weeks, achieving full
                    capacity for the event and obtaining coverage on 10 national
                    news channels and online newspapers
                  </li>
                </ul>
              </div>
            </div>

            <div className="row-span-1 px-5 border-l-[1px] h-fit">
              <div className="absolute -translate-x-7 bg-white">○</div>
              <div className="flex justify-between font-medium">
                <p className="text-md md:text-lg">The British Council</p>
                <p className="text-lg invisible md:visible">Hanoi, Vietnam</p>
              </div>
              <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
                <div className="flex justify-between font-medium">
                  <p>Customer Service Intern</p>
                  <p>January 2021 – July 2021</p>
                </div>
                <ul className="list-disc">
                  <li>
                    Coordinated customers with advisors for consultation
                    services. Increased customer satisfaction survey scores by
                    28%
                  </li>
                  <li>
                    Provided Tier-1 customer service through formally responding
                    to customer inquiries and supporting front desk requests
                  </li>
                  <li>
                    Managed bi-weekly emails and calls to build rapport with
                    clients, boosting student re-registration rate by 24%
                  </li>
                  <li>
                    Composed quarterly written reports of students’ performance
                    and behavior both in and out of the classroom
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <h2 className="text-2xl font-semibold pb-5">🚀 Academic Projects</h2> */}

          {/* <div className=" flex space-x-3 cursor-pointer -translate-y-12">
          <Link to="/resume">
            <p className="text-black text-md hover:underline">
              More detailed information
            </p>
          </Link>
          <div className="rotate-90 ">
            <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
          </div>
        </div> */}
        </div>
      </m.div>
    </Layout>
  );
}

export default About;
