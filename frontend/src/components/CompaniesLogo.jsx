/* eslint-disable react/prop-types */
const CompaniesLogo = ({ src, alt}) => {
  return (
    <div
      className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(170,_170,_170,_0.03)_100%)] 
                border border-solid border-transparent 
                shadow-[0px_0px_2px_0px_#FFFFFFB2] 
                backdrop-blur-[34px] 
                border-image-source-[linear-gradient(91.55deg,_rgba(255,_255,_255,_0.35)_0%,_rgba(255,_255,_255,_0)_18.49%,_rgba(255,_255,_255,_0)_44.56%,_rgba(255,_255,_255,_0)_72.74%,_rgba(255,_255,_255,_0.25)_96.42%)] 
                border-image-slice-1 flex items-center justify-center px-2 py-2"
    >
      <img
        src={src}
        alt={alt}
        className="max-w-none ms:w-24 sm:w-16 md:w-36 lg:w-44 xl:w-48 2xl:w-52"
        loading="lazy"
      />
    </div>
  );
};

export default CompaniesLogo;