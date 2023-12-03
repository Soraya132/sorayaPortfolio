const AppWrap = (Component) =>
  function HOC() {
    return (
      <div className="w-full pt-20 h-screen flex flex-col  md:justify-center pb-40 mb-40 lg:mb-0 overflow-y-auto no-scrollbar">
        <div className="w-full px-5 max-w-[1700px] mx-auto md:px-28 lg:px-36 mb-[100px] xl:mb-0">
          <Component />
        </div>
      </div>
    );
  };
export default AppWrap;
