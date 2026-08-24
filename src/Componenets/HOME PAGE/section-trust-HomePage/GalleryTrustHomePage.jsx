// import { useState, useEffect } from 'react';

// export default function GalleryTrustHomePage({ DataTrust, indexImg }) {
//   let [currentImg, setCurrentImg] = useState('');
//   let [isAvalable, setIsAvable] = useState(true);
//   useEffect(() => {
//     let isCurentImg = DataTrust.find((img) => {
//       return img.index === indexImg;
//     });

//     setIsAvable(false);
//     let timeout = setTimeout(() => {
//       setCurrentImg(isCurentImg.img);
//       setIsAvable(true);
//     }, 500);
//     () => {
//       clearTimeout(timeout);
//     };
//   }, [indexImg, DataTrust, setIsAvable]);

//   return (
//     <div className="p-10 sm:p-0 md:w-full lg:w-1/2  flex justify-center items-center">
//       <img
//         src={currentImg}
//         alt=""
//         className={`w-full max-w-lg h-[420px] object-cover rounded-2xl shadow-2xl shadow-black/40 transition-opacity duration-200 ease-in-out
//        ${isAvalable ? 'opacity-100' : 'opacity-25'}`}
//       />
//     </div>
//   );
// }
