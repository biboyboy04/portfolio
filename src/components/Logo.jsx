const Logo = () => {
  return (
    <a href="#home">
      <div className="fixed left-0 top-0 z-10 w-[80px] transform transition-transform hover:scale-105">
        <img src="/images/logo1.png" />
      </div>
    </a>
    // with bg image small
    // <a href="#home">
    //   <div className="fixed left-0 top-0 z-10 w-[80px] transform bg-[url('/images/logo1-small.png')] bg-cover bg-center transition-transform hover:scale-105">
    //     <img src="/images/logo1.png" className="object-cover object-center" />
    //   </div>
    // </a>
  );
};
export default Logo;
