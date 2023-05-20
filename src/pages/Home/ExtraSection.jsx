

const ExtraSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-5xl mb-5 mt-28">Legos for kids</h2>
      <div className="bg-pink h-[6px] w-[70px] mb-8"></div>

      {/* Legos for kids */}
      <div className="z-30 relative mt-12 items-center justify-center w-full h-full overflow-auto">
        <div className="inset-0 h-screen bg-cover bg-center bg-[url('/banner1.jpg')]"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center bg-[url('/banner11.jpg')]">
            <div className="grid grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="border-l-4  border-gray-400 py-20 px-5 mx-2 absolute left-0">
                  <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                    Benefits of Lego In Early Childhood
                  </p>
                </div>
                <div className="text-gray-400 font-semibold text-xl mb-4">
                  07
                </div>
                <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div className="relative bg-cyan-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                  <div className="p-8">
                    <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                      Lego not only sparks their curiosity but also has many
                      benefits young children. If you want your
                      child to get a positive start in life, it’s important to
                      provide them with enjoyable activities that also nurture
                      brain development, improve eye/hand coordination, get a
                      child thinking and analysing, as well as learning new
                      skills. Many toys and activities are educational, and
                      providing Legos for toddlers is one such toy that offers
                      numerous benefits for young children...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;