const Proof = () => {
  return (
    <div className="bg-gradient-to-b from-[rgba(0,61,255,0.05)] to-[rgba(0,0,0,0.05)] backdrop-blur-[124px] w-full py-8 flex sm:flex-row ms:flex-col sm:justify-around sm:items-center text-white mt-16">
      <div className="sm:text-center ms:text-start ms:ml-10 ms:mb-4">
        <h3 className="ms:text-2xl md:text-3xl font-bold">$4.2 million</h3>
        <p className="ms:text-xl md:text-sm">Total Investment Acquired</p>
        <div className="-ml-[25px] mr-4 mt-6">
          <hr className="sm:hidden" style={{
            border: `1px solid #FFFFFF14`
          }}/>
        </div>
      </div>
      <span className="border-l border-gray-700 absolute top-2 bottom-0 sm:left-[35%] md:left-[32%] transform -translate-x-1/2 hidden sm:block"></span>
      <div className="sm:text-center sm:px-6 sm:relative ms:text-start ms:ml-10 ms:mb-4">
        <h3 className="ms:text-2xl md:text-3xl font-bold">16+ Talents</h3>
        <p className="ms:text-xl md:text-sm">Handpicked industry experts</p>
        <div className="-ml-[25px] mr-4 mt-6">
          <hr className="sm:hidden" style={{
            border: `1px solid #FFFFFF14`
          }}/>
        </div>
      </div>
      <span className="border-l border-gray-700 absolute top-2 bottom-0 sm:left-[70%] md:left-[65%] transform -translate-x-1/2 hidden sm:block"></span>
      <div className="sm:text-center sm:px-6 sm:relative sm:text-center ms:text-start ms:ml-10">
        <h3 className="ms:text-2xl md:text-3xl font-bold">16+ Projects</h3>
        <p className="ms:text-xl md:text-sm">Completed Per Year</p>
      </div>
    </div>
  );
};

export default Proof;
