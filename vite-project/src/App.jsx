import './App.css'
import curvesBg from './assets/curvesBg.svg'
import {
  blueCurves,
  curves1,
  curves2,
  goldCurves,
  logo,
  signature,
  slogan,
} from './assets/icons'
import Footer from './components/Footer'
import bgVid from './assets/bgVid.mp4'
import bottomMask from './assets/bottomMask.svg'
import { midCurve, rightCurve, starterCurves } from './assets/benifits'
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
  return (
    <div className="relative overflow-hidden">
      <div className="absolute overflow-hidden  top-[500px] padding z-20">
        <img src={curvesBg} alt="" className="" />
      </div>
      <div className="relative h-[836px] overflow-hidden">
        <video
          loop
          autoPlay
          muted
          className="absolute top-0 min-w-[100vw]"
          src={bgVid}
        ></video>
        <section className="min-h-[836px]  relative space-y-[65px] text-white text-center bg-[#1d4650b5] flex flex-col items-center justify-center">
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
      <section className="min-h-screen overflow-hidden flex w-full padding bg-[#F5F5F5]">
        <div className="w-1/2 max-h-[800.15px] space-y-[20px]">
          <div className="pl-[50px]">{blueCurves}</div>
          <p className="text-[49.317px] leading-[45.135px] max-w-[281.35px] tracking-[-1.973px] font-[700] text-[#484939]">
            Our Quest to Make <span className="text-[#B8B922]">Dealmaking</span>{' '}
            Easier
          </p>
          <div>{goldCurves}</div>
        </div>
        <div className="flex-1   flex flex-col items-start justify-center space-y-[25px] max-w-[373.15px]">
          <p className="text-[#484939] font-[Inter] text-[16.583px] font-[300] leading-[33.66px] tracking-[-0.332px]">
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
          <div id="video-container relative  w-screen h-full">
            <video
              loop
              autoPlay
              muted
              playsInline
              className=" top-0  z-30   h-full w-screen filter-[#b8b8253d] "
              src={bgVid}
            ></video>
            <div className="top-0  z-40  absolute w-screen  h-full    bg-[#b8b8253d]  w-screen "></div>
          </div>
        </div>
        <div className="relative h-fit z-40 py-[200px]  space-y-[100px] text-center">
          <div className="max-w-[710.6px] mx-auto">
            <p className="inria_font text-center text-lime-50 text-[22.07px] font-bold  uppercase leading-relaxed tracking-[13.24px]">
              BECOME A MEMBER
            </p>
            <p className="w-[710.60px] text-center text-gray-200 text-base font-medium  leading-[33.40px]">
              We meet you where you are and provide support and engagement
              opportunities at every stage of the dealmaking process.{' '}
            </p>
          </div>
          <div className="relative flex -[200px] text-start">
            {steps.map((el, index) => (
              <div
                className="flex flex-col px-[50px] border-[#5D5D41]  border-l-[1px] space-y-[35px]"
                key={index}
              >
                <div style={{ color: el.color }}>
                  <p className="inria_font uppercase tracking-[6.5px] leading-[33.235px] font-[400]">
                    {el.name}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{ __html: el.title }}
                    className=" inria_font text-[33.80px] font-bold font-['Inria Sans'] leading-[33.24px]"
                  ></p>
                </div>
                <div className="flex items-center space-x-[8px]">
                  <p className=" text-white text-opacity-70 text-[39.32px] font-bold uppercase leading-[23.03px] ">
                    {'$' + el.price}
                  </p>
                  <div className=" border-2 h-full"></div>
                  <p>
                    PER <br />
                    MONTH
                  </p>
                </div>
                <div>{el.curve}</div>
                <div className="flex flex-col max-w-[199.75px]">
                  {el.benifits.map((it, index) => (
                    <>
                      {' '}
                      <p key={index}>{it}</p> <br />
                    </>
                  ))}
                </div>
              </div>
            ))}
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
          <div className="  w-screen">
            <img src={bottomMask} className="object-cover w-full" alt="" />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#828366] -translate-y-[100px] pt-[100px]"></section>
      <Footer></Footer>
    </div>
  )
}

export default App
