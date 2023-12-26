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
    },
    {
      name: 'location',
      value: 'hello@yourfigure8.com ',
      icon: email,
    },
    {
      name: 'location',
      value: '404.343.5667',
      icon: phone,
    },
  ]
  return (
    <footer className="relative -mt-[50px]  space-y-[-5px] z-40">
      <div className="space-y-[-5px]">
        <img src={footerCurves} alt="" className="w-full" />
        <div className="bg-[#484939]">
          <div className=" -translate-y-[100px] padding">
            <div className="flex items-center">
              <div className="">
                <img src={logo} className="w-[125.952px]" alt="" />
              </div>
              <div>
                <img className="max-w-[108.278px]" src={slogan} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#484939] flex  items-center justify-between -translate-y-[100px] padding ">
            <p className="max-w-[454.75px]  text-[14.034px] leading-[25.16px] text-[#D9D9D9]">
              Say goodbye to dead-end deals. Our exclusive investor ecosystem
              delivers off-market opportunities, aligned partnerships and
              accelerated growth.
            </p>
            <div className="space-y-[5px]">
              {links.map((el, index) => (
                <div
                  key={index}
                  className="flex items-center text-[14.034px] font-[300] leading-[23.46px] text-[#D9D9D9] space-x-[23px]"
                >
                  <div>{el.icon}</div>
                  <p>{el.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#34342A] z-20 relative  flex justify-between items-center  padding text-white py-[25px]">
        <p className="inria_font text-[#D9D9D9] text-[15.313px] leading-[23.029px] tracking-[3.522px] uppercase font-[700]">
          © 2023 FIGURE8, LLC.{' '}
        </p>
        <div className="flex space-x-[40px]">
          <div className="flex items-center space-x-[30px] justify-between">
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
