"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaFileDownload,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Page = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      if (window.innerWidth < 661) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    // Add event listener for resize
    if (typeof window !== "undefined") {
      handleResize(); // Check on initial load
      window.addEventListener("resize", handleResize);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return (
    <div>
      <div className="mainContainer pl-20p bg-base-100 text-white pt-28">
        <div className="flex1">
          <div className="Owner flex justify-between ml-1.5 items-center">
            <div className="OwnerInfo">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                  rotate: [0, 0],
                }}
              >
                <h1>Software Developer</h1>
                <h2 className="text-7xl mt-2 text-justify">
                  Hello I'm
                  <br />
                  <span className="text-green-500">Mustafa Umar</span>
                </h2>
                <p className="w-72 text-sm text-justify mt-5">
                  I excel at crafting elegant digital experiences and I am
                  proficient in various languages and technologies.
                </p>
              </motion.div>
              <div className="Socials flex justify-around mt-5">
                <a
                  className=" btn btn-ghost border border-green-500 text-green-500 hover:bg-white hover:text-black px-4 py-2 rounded-full"
                  href="Mustafa Umar Resume.pdf"
                >
                  DOWNLOAD CV
                  <FaFileDownload className=" inline mr-2" />
                </a>
                <a
                  href="https://www.instagram.com/mustafa_umar.jpg?igsh=bjhpcTJrb3Jkb3pr"
                  className="Icons flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaInstagram className="Icons2 mr-2" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mustafa-umar-674a0b256/"
                  className="Icons flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaLinkedin className="Icons2 mr-2" />
                </a>
                <a
                  href="#"
                  className="Icons flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaGithub className="Icons2 mr-2" />
                </a>
              </div>
            </div>
            <div className="image-container mr-80">
              {isMobileView ? (
                <motion.div
                  className=" absolute rounded-full border-dashed border-4 border-green-800 w-411px h-411px max-[430px]:w-260px max-[430px]:h-260px"
                  initial={{ x: -6, y: -6 }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    transform: "translate(-100%, -100%)",
                  }}
                />
              ) : (
                <motion.circle
                  className=" absolute rounded-full border-dashed border-4 border-green-800 w-411px h-411px max-[430px]:w-260px max-[430px]:h-260px -z-1"
                  initial={{ x: -6, y: -6 }}
                  animate={{
                    rotate: [-5, 5],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              )}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
                  rotate: [0, 0],
                }}
              >
                <img
                  src="/image.jpg"
                  className="main-image rounded-full w-400px resize-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="counting flex justify-center mt-20 mb-20 mr-52">
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={2} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Years of experience</p>
          </div>
          <div className="flex justify-center mx-10p">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={4} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Projects Completed</p>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={9} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Technologies Mastered</p>
          </div>
          <div className="last flex justify-center ml-10p mr-32">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={80} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Code Commits</p>
          </div>
        </div>
      </div>

      {/* Media query for 1434px width */}
      <style jsx>{`
          
        @media (max-width: 1550px) {
        .mainContainer{
        padding-left: 0px
        }
        img{
        margin-right:12px
        }
          .Owner {
            flex-direction: column;
            align-items: center;
          }
          .image-container {
            margin-top: 50px;
            margin-right: 0;
            display: flex;
            justify-content: center;
          }
            .counting {
            display: flex;
            align-items: center;
            justify-content: end;
            margin-right: 50px
        }
             @media (max-width: 1200px) {
             .counting{
             display: flex;
             flex-direction: column;
             align-items: center;
             
             }
             .last{
             
             marging-right: 0;
             margin-left: 150px
             
             }
             }
           
             @media (max-width: 430px)
             {
              h1{text-align: center;
              margin-right: 10px;}
              h2{
              text-align: center;
              margin-right: 10px;
              
              }
              p{text-align: center;
              margin-right: 10px;
              margin-left:auto;
              margin-right: auto;
              }

             .counting{margin-left: auto;
             margin-right: auto;
             }
            .mainContainer{
              align-items: center;
              text-align: center
              margin-left: auto;
              margin-right: auto;
              padding-top: 20px;
                }
              img{
              width: 250px;
              height: 250px;
      }
      .Socials{
        flex-direction: column;
        align-items: center;
      }    

        .Icons{
        
        margin-bottom: 5px;
        margin-top: 10px
        
        } 
        .mainContainer{
        
        }
          
      }
              

      `}</style>
    </div>
  );
};

export default Page;
