import { LinkedIn, X, facebook, insta } from '../assets/icons'

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
  return (
    <footer className="bg-[#34342A] z-20 relative  flex justify-between items-center  padding text-white py-[25px]">
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
    </footer>
  )
}

export default Footer
