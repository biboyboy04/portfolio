const Home = () => {
  return (
    <div className="-mt-[8%] flex h-[100vh] items-center justify-center">
      <div className="align-center flex justify-center">
        {/* text container */}
        <div className=" text-center text-[80px]  text-white xl:text-[100px]">
          <h1 className="md:mr-[400px] lg:mr-[600px]">ADRIAN</h1>
          <h1 className="md:ml-[400px] lg:ml-[600px]">ZAPATA</h1>
        </div>

        {/* img container */}
        <div className="absolute">
          <img
            src="/images/ian.png"
            alt="Ian"
            className=" interactivity-none mix-blend-color-dodge"
            style={{
              background:
                "linear-gradient(to bottom, rgba(200, 200, 200), rgba(255, 102, 0, 0))", // Adjust colors and opacity as needed
            }}
          />
          <p className="-mt-9 text-center text-[20px] text-white/70">
            WEB DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
