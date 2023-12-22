import './App.css'
import { curves1, curves2, logo, signature, slogan } from './assets/icons'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <section className="min-h-screen space-y-[65px] text-white text-center bg-[#1D4650] flex flex-col items-center justify-center">
        <div>
          <div className=""> {logo}</div>
          <div className=" w-fit mx-auto">{slogan}</div>
        </div>
        <div className="space-y-[15px]">
          <p className="inria_font text-[#FFF] text-center font-[Inria Sans] text-[19.141px] leading-[28.786px] tracking-[4.402px] uppercase font-[700]">
            Where Real Estate <span className="text-[#FF8400]">Dealmakers</span>{' '}
            CONNECT
          </p>
          <p className="text-[#E1E1E1] max-w-[647.226px] font-[Inter] text-[15.545px] font-[300] leading-[28.687px]">
            Say goodbye to dead-end deals! Our exclusive investor ecosystem
            delivers off-market opportunities, aligned partnerships and
            accelerated growth.
          </p>
        </div>
        <div>{curves1}</div>
      </section>
      <section className="min-h-screen flex w-full  bg-[#F5F5F5]">
        <div className="w-1/2"></div>
        <div className="flex-1  flex flex-col items-start justify-center space-y-[25px] max-w-[373.15px]">
          <p className="text-[#484939] font-[Inter] text-[16.583px] font-[300] leading-[33.66px] tracking-[-0.332px]">
            After 15 years brokering deals, we saw even seasoned investors
            wasting time chasing false starts instead of profitable projects.
            Misalignment meant clunky partnerships or limited access to
            acquisition opportunities. We created The Deal Room to solve these
            pain points. Vetting every member for credentials and commitment, we
            facilitate matched connections. The result? Trusted deal flow,
            strategic alignments and accelerated growth in lockstep with other
            highly motivated professionals.
          </p>
          {curves2}
          {signature}
          <p className="text-[] inria_font">FOUNDER & CEO </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
