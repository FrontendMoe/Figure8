import './App.css'
import curvesBg from './assets/curvesBg.svg'
import bgWaves from './assets/bgWaves.svg'
import mask2 from './assets/section2Mask.svg'
import image from './assets/image .png'
import orangeCurveBg from './assets/orangeCurveBg.svg'
import orangeCurveBg2 from './assets/orangeCurveBg2.svg'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  blueCurves,
  curves1,
  curves2,
  goldCurves,
  signature,
  logo,
  slogan,
} from './assets/icons'
import Footer from './components/Footer'
import bgVid from './assets/bgVid.mp4'
import bottomMask from './assets/bottomMask.svg'
import { midCurve, rightCurve, starterCurves } from './assets/benifits'
import { useEffect } from 'react'
import { FadeEffect, handleScroll } from './utils/FadeEffect'
function App() {
  const steps = [
    {
      name: 'STARTER',
      title: 'Do-It-Yourself <br />Support',
      price: 99,
      color: '#6199A8',
      curve: starterCurves,
      benifits: [
        'Self-paced Online Deal-finding Course',
        'Dealmaker Resource Library ',
        'Member Forums + Discussion Groups',
      ],
    },
    {
      name: 'Prime',
      title: 'Group <br />Coaching',
      price: 299,
      curve: midCurve,
      color: '#B8B825',

      benifits: [
        'Monthly workshop Conference Calls',
        'Quarterly Goal Setting + Strategy  Sessions',
        '1:1 Mentor Ongoing Support',
      ],
    },
    {
      name: 'ELITE',
      title: 'Deal <br />Accelerator',
      price: 999,
      curve: rightCurve,
      color: '#FF8400',

      benifits: [
        '1-on-1 Personalized Investor Matching',
        'Personalized Deal Pipelines + Opportunity Analysis',
        'Weekly Strategy Calls',
        'VIP event access',
      ],
    },
  ]
  const playAllVideos = () => {
    const videos = document.querySelectorAll('video')
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i]
      video.muted = true // Force mute the video
      video.addEventListener('ended', () => {
        video.currentTime = 0 // Reset the video to the beginning
        video.play() // Pause the video when it ends
      })

      video.play()
    }
  }

  useEffect(() => {
    playAllVideos()
  }, [])
  useEffect(() => {
    handleScroll()
  }, [])
  return (
    <div className="relative overflow-hidden">
      <FadeEffect></FadeEffect>
      <div className="absolute overflow-hidden  top-[500px] padding z-20">
        <img src={curvesBg} alt="" className="" />
      </div>
      <div className="relative h-[836px] overflow-hidden">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="absolute top-0 h-full object-cover lg:min-w-[100vw]"
          src={bgVid}
        ></video>
        <section className="min-h-[836px] padding relative space-y-[65px] text-white text-center bg-[#1d4650b5] flex flex-col items-center justify-center">
          <div>
            <div className=""> {logo}</div>
            <div className=" w-fit mx-auto">{slogan}</div>
          </div>
          <div className="space-y-[15px]">
            <p className="inria_font text-[#FFF] text-center font-[Inria Sans] text-[19.141px] leading-[28.786px] tracking-[4.402px] uppercase font-[700]">
              Where Real Estate{' '}
              <span className="text-[#FF8400]">Dealmakers</span> CONNECT
            </p>
            <p className="text-[#E1E1E1] max-w-[647.226px] font-[Inter] text-[15.545px] font-[300] leading-[28.687px]">
              Say goodbye to dead-end deals! Our exclusive investor ecosystem
              delivers off-market opportunities, aligned partnerships and
              accelerated growth.
            </p>
          </div>
          <div>{curves1}</div>
        </section>
      </div>
      <section className="min-h-screen gap-x-[132px] pb-[150px] py-[100px] lg:py-0 overflow-hidden lg:flex-row flex-col flex w-full padding bg-[#F5F5F5]">
        <div className=" max-h-[800.15px] lg:space-y-[20px]">
          <div className="pl-[50px] lg:block hidden">{blueCurves}</div>
          <p className="text-[25px] w-full  lg:text-[49.317px] lg:leading-[45.135px] lg:max-w-[281.35px] tracking-[-1.973px] font-[700] text-[#484939]">
            Our Quest to Make <span className="text-[#B8B922]">Dealmaking</span>{' '}
            Easier
          </p>
          <div className="lg:block hidden">{goldCurves}</div>
        </div>
        <div className="flex-1 lg:pb-[100px]  flex flex-col items-start lg:justify-center space-y-[25px] lg:max-w-[373.15px]">
          <p className="text-[#484939] font-[Inter] text-[14px] lg:text-[16.583px] font-[300] leading-[33.66px] tracking-[-0.332px]">
            After 15 years brokering deals, we saw even seasoned investors
            wasting time chasing false starts instead of profitable projects.
            Misalignment meant clunky partnerships or limited access to
            acquisition opportunities. <br />
            <br /> We created The Deal Room to solve these pain points. Vetting
            every member for credentials and commitment, we facilitate matched
            connections. The result? Trusted deal flow, strategic alignments and
            accelerated growth in lockstep with other highly motivated
            professionals.
          </p>
          {curves2}
          {signature}
          <p className="text-[] inria_font">FOUNDER & CEO </p>
        </div>
      </section>
      <section className="-translate-y-[100px]    flex flex-col justify-center items-center min-h-screen h-fit text-white z-20 relative">
        <div className="absolute z-0 top-0 left-0 clippath   h-full w-full">
          <div id="video-container relative    w-screen h-full">
            <video
              loop
              autoPlay
              muted
              playsInline
              className=" top-0  z-30  object-cover  h-[120vh] lg:hf w-screen filter-[#b8b8253d] "
              src={bgVid}
            ></video>
            <div className="top-0  z-40  absolute  h-full    bg-[#b8b82568]  w-screen "></div>
          </div>
        </div>
        <div className="relative  h-fit z-40 py-[200px] padding   space-y-[100px] text-center">
          <div className="max-w-[710.6px]  mx-auto">
            <p className="inria_font text-center text-lime-50 text-[18px]  lg:text-[22.07px] font-bold  uppercase leading-relaxed tracking-[13.24px]">
              BECOME A MEMBER
            </p>
            <p className="max-w-[710.60px] w-full text-center text-gray-200  text-[16px] lg:text-base font-medium  leading-[33.40px]">
              We meet you where you are and provide support and engagement
              opportunities at every stage of the dealmaking process.{' '}
            </p>
          </div>
          <div className="relative lg:flex hidden  space-y-[30px] lg:space-y-0 flex-col lg:flex-row -[200px] text-start">
            {steps.map((el, index) => (
              <div key={index} className="flex items-center">
                <div className="h-[248.2px] bg-[#5D5D41] lg:block hidden w-[1.5px]"></div>
                <div className="flex flex-col lg:px-[50px] text-center lg:text-start border-[#5D5D41]   space-y-[35px]">
                  <div style={{ color: el.color }}>
                    <p className="inria_font uppercase tracking-[6.5px] leading-[33.235px] font-[400]">
                      {el.name}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: el.title }}
                      className=" inria_font text-[33.80px] font-bold font-['Inria Sans'] leading-[33.24px]"
                    ></p>
                  </div>
                  <div className="flex mx-auto lg:mx-0 items-center space-x-[8px]">
                    <p className=" text-white text-opacity-70 text-[39.32px] font-bold uppercase leading-[23.03px] ">
                      {'$' + el.price}
                    </p>
                    <div className=" border-2 h-full"></div>
                    <p>
                      PER <br />
                      MONTH
                    </p>
                  </div>
                  <div className="mx-auto lg:mx-0">{el.curve}</div>
                  <div className="flex flex-col lg:max-w-[199.75px]">
                    {el.benifits.map((it, index) => (
                      <>
                        {' '}
                        <p key={index}>{it}</p> <br />
                      </>
                    ))}
                  </div>
                </div>
                {index === steps.length - 1 && (
                  <div className="h-[248.2px] bg-[#5D5D41] lg:block hidden w-[1.5px]"></div>
                )}
              </div>
            ))}
          </div>
          <div id="About" className="relative z-20 lg:hidden max-w-[100vw] ">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              spaceBetween={64}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // Hello
              nextButton="#banner2 .swiper-button-next2"
              prevButton="#banner2 .swiper-button-prev2"
              className="rounded-lg pb-10 overflow-hidden "
              draggable
              direction="horizontal"
              pagination={{ clickable: true }}
            >
              {steps.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="flex max-w-[100vw] justify-center items-center">
                    <div className="h-[248.2px] bg-[#5D5D41] lg:block hidden w-[1.5px]"></div>
                    <div className="flex flex-col lg:px-[50px] text-center lg:text-start border-[#5D5D41]   space-y-[35px]">
                      <div style={{ color: el.color }}>
                        <p className="inria_font uppercase tracking-[6.5px] leading-[33.235px] font-[400]">
                          {el.name}
                        </p>
                        <p
                          dangerouslySetInnerHTML={{ __html: el.title }}
                          className=" inria_font text-[33.80px] font-bold font-['Inria Sans'] leading-[33.24px]"
                        ></p>
                      </div>
                      <div className="flex mx-auto lg:mx-0 items-center space-x-[8px]">
                        <p className=" text-white text-opacity-70 text-[39.32px] font-bold uppercase leading-[23.03px] ">
                          {'$' + el.price}
                        </p>
                        <div className=" border-2 h-full"></div>
                        <p>
                          PER <br />
                          MONTH
                        </p>
                      </div>
                      <div className="mx-auto lg:mx-0">{el.curve}</div>
                      <div className="flex flex-col lg:max-w-[199.75px]">
                        {el.benifits.map((it, index) => (
                          <>
                            {' '}
                            <p key={index}>{it}</p> <br />
                          </>
                        ))}
                      </div>
                    </div>
                    {index === steps.length - 1 && (
                      <div className="h-[248.2px] bg-[#5D5D41] lg:block hidden w-[1.5px]"></div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="absolute bottom-0 h-full flex flex-col -space-y-[5px] translate-y-[100px]">
          <div
            style={{
              background:
                'linear-gradient(0deg, #484939 0%,  #484939 20%,  rgba(72, 73, 57, 0.69) 48.61%, rgba(72, 73, 57, 0) 100%)',
            }}
            className="  gradient   z-40 w-full flex-1 h-full  "
          ></div>
          <div className="   lg:hidden bg-[#484939]   z-40 w-full flex-1 h-full  "></div>
          <div className="  w-screen">
            <img src={bottomMask} className="object-cover w-full" alt="" />
          </div>
        </div>
      </section>
      <section className="min-h-screen  z-10  relative -translate-y-[100px] pt-[170px]">
        <img
          src={bgWaves}
          alt=""
          className="absolute z-10  w-full top-0 h-full"
        />

        <img
          src={mask2}
          alt=""
          className="absolute h-[100%] object-cover  lg:w-[3744.25px] lg:h-[891.65px] flex-shrink-0 top-0 right-0 object-bottom  "
        />
        <div className="mx-auto z-10 space-y-[35px] relative w-full  text-center">
          <div className="mx-auto w-fit">{curves1}</div>
          <p className="text-white text-[27.33px] font-bold font-['Inria Sans'] uppercase leading-[43.78px] tracking-[6.29px]">
            Which path is right for you? <br /> Take OUR 60-second assessment
          </p>
          <button className="bg-[#FF8400] inria_font tracking-[3.522px] font-bold text-[15.313px] rounded-[7.013px] text-white px-[35px] py-[20px]">
            JOIN MAILING LIST
          </button>
        </div>
      </section>
      <section className="lg:bg-[#D9D9D9] relative pb-[200px]">
        <div className="lg:bg-[#fff] padding relative space-y-[30px] flex lg:p-[130px] flex-col items-start justify-center max-w-[755px] mx-auto lg:rounded-full relative z-20 aspect-square lg:-mt-[20%]">
          <div className="space-y-[8px]">
            <p className="text-[30px] lg:text-[39.117px] tracking-[-1.565px] font-bold text-[#FF8400]">
              Featured Blog
            </p>
            <p className="lg:w-[451.35px] text-stone-700 text-[35px] lg:text-[49.32px] font-extrabold font-['Inter'] leading-[47.60px]">
              Why This Off-Market Property Deal Fell Apart
            </p>
          </div>
          <div className="w-[88.40px] h-[0px] border-4 border-stone-700"></div>

          <p className="w-[438.60px] text-stone-700 text-base font-semibold font-['Inter'] leading-[33.66px]">
            Even after you’ve agreed to a price and signed a contract, it’s
            possible for a home sale to fall apart. Data from the National
            Association of Realtors...
          </p>

          <button className="w-[254.36px] h-[65.66px] bg-stone-700 rounded-[7.01px]">
            <p className="text-center text-white text-base font-bold font-['Inria Sans'] uppercase leading-[23.03px] tracking-[3.52px]">
              READ FULL BLOG
            </p>
          </button>
          <div className="absolute lg:block hidden  -bottom-[70px] z-20 right-[-70px]">
            <img
              src={image}
              className="rounded-full  relative z-10  bottom-0 -right-[30px]"
              alt=""
            />
            <div className="w-[301.75px] absolute bottom-[80px] h-[301.75px] -right-[40px] bg-orange-500 rounded-full" />

            <div className="w-[301.75px] absolute -bottom-[70px] h-[301.75px] bg-slate-500 rounded-full" />
          </div>
        </div>
        <div>
          <img
            src={orangeCurveBg}
            className="absolute  lg:block hidden top-0 left-1/2 -translate-x-1/2"
            alt=""
          />
          <img
            src={orangeCurveBg2}
            className="absolute   top-0 left-[0px]"
            alt=""
          />
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
