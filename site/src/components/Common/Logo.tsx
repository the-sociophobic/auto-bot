// import LogoLight from '../../assets/images/svg/logo-light.svg'
// import LogoDark from '../../assets/images/svg/logo-dark.svg'


export type LogoProps = {
  className?: string
}


const Logo: React.FC<LogoProps> = ({
  className
}) =>
  <>
    <div className={`logo-container ${className}`}>
      {/* <img
        className='logo light-theme-only px-2 py-3'
        src={LogoLight}
      />
      <img
        className='logo dark-theme-only px-2 py-3'
        src={LogoDark}
      /> */}
    </div>

  </>


export default Logo
