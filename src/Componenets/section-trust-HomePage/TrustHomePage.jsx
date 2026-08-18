import { useState } from 'react';
import Create from './assets/Create.png';
import hardsoftwer from './assets/hardsoftwer.png';
import laptopTest from './assets/laptopTest.png';

import test from './assets/test.png';
import traning from './assets/traning.png';
import DecTrustHomePage from './DecTrustHomePage';
import GalleryTrustHomePage from './GalleryTrustHomePage';
let DataTrust = [
  { id: 0, img: Create, index: 0 },
  { id: 1, img: hardsoftwer, index: 1 },
  { id: 2, img: laptopTest, index: 2 },
  { id: 3, img: test, index: 3 },
  { id: 4, img: traning, index: 4 },
];
export default function TrustHomePage() {
  let [indexImg, setIndexImg] = useState(0);
  console.log(indexImg);
  return (
    <div
      className="container h-auto flex flex-col md:flex-col lg:flex-row sm:flex-col sm:space-y-32 lg:space-y-3   mx-auto mt-32 py-20"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-easing="ease-out-cubic"
    >
      <DecTrustHomePage setIndexImg={setIndexImg} DataTrust={DataTrust} indexImg={indexImg} />
      <GalleryTrustHomePage DataTrust={DataTrust} indexImg={indexImg} />
    </div>
  );
}
