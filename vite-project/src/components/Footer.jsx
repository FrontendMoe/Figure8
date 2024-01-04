import {
  LinkedIn,
  X,
  email,
  facebook,
  insta,
  location,
  logosm,
  phone,
} from '../assets/icons'
import logo from '../assets/logo.svg'
import slogan from '../assets/slogan.svg'

import footerCurves from '../assets/footerCurves.svg'
function Footer() {
  const socials = [
    {
      name: 'facebook',
      icon: facebook,
    },
    {
      name: 'X',
      icon: X,
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
    },
    {
      name: 'instagram',
      icon: insta,
    },
  ]
  const links = [
    {
      name: 'location',
      value: '2972 Westheimer Rd.Atlanta, Georgia 85486 ',
      icon: location,
      link:
        'https://www.google.com/maps/search/2972+Westheimer+Rd.Atlanta,+Georgia+85486/@33.7669293,-84.6440333,10z/data=!3m1!4b1?entry=ttu',
    },
    {
      name: 'location',
      value: 'hello@yourfigure8.com ',
      icon: email,
      link: 'mailto:hello@yourfigure8.com',
    },
    // {
    //   name: 'location',
    //   value: '404.343.5667',
    //   icon: phone,
    //   link: 'tel:+1-404-343-5667',
    // },
  ]
  return (
    <footer className="relative lg:text-start text-center -mt-[50px]  space-y-[-5px] z-40">
      <div className="space-y-[-5px]">
        <img src={footerCurves} alt="" className="lg:block hidden w-full" />
        <div className="bg-[#484939] lg:space-y-0 space-y-[30px] lg:py-0 py-[30px]">
          <div className=" lg:-translate-y-[100px] padding">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="">
                <img src={logo} className="w-[125.952px]" alt="" />
              </div>
              <div>
                <img className="max-w-[108.278px]" src={slogan} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#484939] flex flex-col lg:flex-row  gap-y-[10px] items-center justify-between lg:-translate-y-[100px] padding ">
            <p className="max-w-[454.75px]  text-[14.034px] leading-[25.16px] text-[#D9D9D9]">
              Say goodbye to dead-end deals. Our exclusive investor ecosystem
              delivers off-market opportunities, aligned partnerships and
              accelerated growth.
            </p>
            <div className="space-y-[5px]">
              {links.map((el, index) => (
                <a
                  href={el.link}
                  key={index}
                  className="flex justify-center lg:justify-start items-center text-[14.034px] font-[300] leading-[23.46px] text-[#D9D9D9] space-x-[10px]  lg:space-x-[23px]"
                >
                  <div>{el.icon}</div>
                  <p>{el.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#34342A] gap-y-[10px] z-20 relative  flex-col lg:flex-row flex justify-between items-center  padding text-white py-[25px]">
        <p className="inria_font text-[#D9D9D9] text-[15.313px] leading-[23.029px] tracking-[3.522px] uppercase font-[700]">
          © 2023 FIGURE8, LLC.{' '}
        </p>
        <div className="flex flex-col lg:flex-row gap-y-[10px] lg:space-x-[40px]">
          <div className="flex items-center space-x-[10px] lg:space-x-[30px] mx-auto lg:mx-0 lg:justify-between">
            {socials.map((el, index) => (
              <div key={index}>{el.icon}</div>
            ))}
          </div>
          <p className="inria_font text-gray-300 text-[15.313px] font-[700] leading-[23.029px] tracking-[3.522px] uppercase">
            @YOURFIGURE8
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
