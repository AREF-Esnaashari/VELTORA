import React from 'react';
import { Phone, Mail } from 'lucide-react';

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-3 text-right">
      <h4 className="text-xs font-bold text-white tracking-wider">ارتباط با ما</h4>

      <div className="flex flex-col gap-2 text-xs text-neutral-400">
        <div className="flex items-center gap-2 justify-start">
          <Phone className="w-4 h-4 text-amber-500 shrink-0" />
          <span dir="ltr">+98 21 1234 5678</span>
        </div>

        <div className="flex items-center gap-2 justify-start">
          <Mail className="w-4 h-4 text-amber-500 shrink-0" />
          <span>voltora@voltora.com</span>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
