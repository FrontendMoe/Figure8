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
function App() {
  const steps = [
    {
      name: 'STARTER',
      title: 'Do-It-Yourself Support',
      price: 99,
      curve: '',
      benifits: [
        'Self-paced Online Deal-finding Course',
        'Dealmaker Resource Library ',
        'Member Forums + Discussion Groups',
      ],
    },
    {
      name: 'STARTER',
      title: 'Do-It-Yourself Support',
      price: 99,
      curve: '',
      benifits: [
        'Self-paced Online Deal-finding Course',
        'Dealmaker Resource Library ',
        'Member Forums + Discussion Groups',
      ],
    },
    {
      name: 'STARTER',
      title: 'Do-It-Yourself Support',
      price: 99,
      curve: '',
      benifits: [
        'Self-paced Online Deal-finding Course',
        'Dealmaker Resource Library ',
        'Member Forums + Discussion Groups',
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
      <section className="-translate-y-[100px]   flex flex-col justify-center items-center min-h-screen text-white z-20 relative">
        <div className="absolute top-0 left-0 overflow-hidden  h-full w-full">
          <div id="video-container relative  w-screen">
            <video
              loop
              autoPlay
              muted
              className=" top-0  z-40  min-w-[100vw]"
              src={bgVid}
              id="videp"
            ></video>
          </div>
        </div>
        <div className="absolute  min-w-[100vw] clippath bg-[#b8b8253d] top-0 left-0 w-full h-full"></div>
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(184, 184, 37, 0.00) 0%, #10110C 0%, rgba(56, 57, 44, 0.00) 0.01%, rgba(72, 73, 57, 0.69) 48.61%, #484939 100%) ',
          }}
          className="absolute pb-[100px]  min-w-[100vw] clippath  top-0 left-0 w-full h-[736.1px]"
        ></div>
        <div className="relative space-y-[100px] text-center">
          <div className="max-w-[710.6px]">
            <p className="inria_font text-center text-lime-50 text-[22.07px] font-bold  uppercase leading-relaxed tracking-[13.24px]">
              BECOME A MEMBER
            </p>
            <p className="w-[710.60px] text-center text-gray-200 text-base font-medium  leading-[33.40px]">
              We meet you where you are and provide support and engagement
              opportunities at every stage of the dealmaking process.{' '}
            </p>
          </div>
          <div className="relative flex ">
            {steps.map((el, index) => (
              <div className="flex flex-col px-[50px] border-l" key={index}>
                <p>{el.name}</p>
                <p>{el.title}</p>
                <p>{el.price}</p>
                <div className="flex flex-col">
                  {el.benifits.map((it, index) => (
                    <p key={index}>{it}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute  -bottom-[100px] w-full">
          <img src={bottomMask} className="object-cover w-full" alt="" />
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
