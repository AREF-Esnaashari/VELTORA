import { Users, Building2, ShieldCheck, DollarSign } from 'lucide-react';
import About_Header_HomePage from './About_Header_HomePage';
import About_Gallery_HomePage from './About_Gallery_HomePage';
import { useState } from 'react';
import About_List_HomePage from './About_List_HomePage';
import About_Item_HomePage from './About_Item_HomePage';

const icons = [
  { id: 0, icon: Users },
  { id: 1, icon: Building2 },
  { id: 2, icon: ShieldCheck },
  { id: 3, icon: DollarSign },
];
const aboutContent = [
  {
    iconId: 0,
    icon: Users,
    title: 'تیم ما',
    text: (
      <>
        تیم ولتورا همراه با <span className="text-[#F59E0B]">رشد مجموعه</span>، متخصص‌تر می‌شه؛ برای{' '}
        <span className="text-[#F59E0B]">پشتیبانی و مشاوره</span> قبل و بعد از خرید می‌تونید روی ما
        حساب کنید.
      </>
    ),
  },

  {
    iconId: 1,
    icon: Building2,
    title: 'ولتورا',
    text: (
      <>
        ولتورا <span className="text-[#F59E0B]">از سال ۱۴۰۴</span> فعالیتشو شروع کرده و در مسیر رشد،
        انواع دستگاه‌های الکترونیکی <span className="text-[#F59E0B]">نو و استوک</span> رو با دقت
        عرضه می‌کنه.
      </>
    ),
  },

  {
    iconId: 2,
    icon: ShieldCheck,
    title: 'تضمین کیفیت',
    text: (
      <>
        هر دستگاه، چه نو چه استوک، قبل از ارسال <span className="text-[#F59E0B]">تست کامل</span>{' '}
        می‌شه و نتیجه تست هم برای شما ارسال می‌شه؛{' '}
        <span className="text-[#F59E0B]">بیش از ۹۵ درصد دستگاه‌ها</span> همه تست‌ها رو با موفقیت پاس
        می‌کنن. با <span className="text-[#F59E0B]">گارانتی ولتورا</span>، خیالتون از خرید راحته.
      </>
    ),

    link: {
      text: 'شرایط ارائه گارانتی و اصالت را بخوانید',
      href: '/warranty',
    },
  },

  {
    iconId: 3,
    icon: DollarSign,
    title: 'صرفه اقتصادی',
    text: (
      <>
        قیمت محصولات استوک بسته به نوع دستگاه متفاوته، ولی همیشه{' '}
        <span className="text-[#F59E0B]">پایین‌تر از نو</span> و مقرون‌به‌صرفه‌ست؛ بدون این‌که کیفیت
        واقعی فدا بشه.
      </>
    ),
  },
];

export default function About_Homepage() {
  let [indexSelected, setIndexSelected] = useState(0);
  return (
    <div className="container mt-0 mx-auto px-10">
      <About_Header_HomePage />
      <About_Gallery_HomePage
        icons={icons}
        indexSelected={indexSelected}
        setIndexSelected={setIndexSelected}
      />
      <About_List_HomePage>
        <About_Item_HomePage aboutContent={aboutContent} indexSelected={indexSelected} />
      </About_List_HomePage>
    </div>
  );
}
