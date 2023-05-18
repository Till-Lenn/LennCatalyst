import React from 'react';

import { StoreLogo } from '../Logo';

import { ContactInformation } from './ContactInformation';
import { Copyright } from './Copyright';
import { BaseFooterMenu, BrandFooterMenu, CategoryFooterMenu } from './FooterMenus';
import { PaymentMethods } from './PaymentMethods';
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
  return (
    <footer>
      <div className="border-t border-b border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-8 my-12 mx-6 sm:mx-10 md:container md:mx-auto">
          {/* @ts-expect-error Server Component */}
          <CategoryFooterMenu />
          {/* @ts-expect-error Server Component */}
          <BrandFooterMenu />
          <BaseFooterMenu
            items={[
              { name: 'Contact us', path: '/contact-us' },
              { name: 'About brand', path: '/about' },
              { name: 'Blog', path: '/blog' },
            ]}
            title="About us"
          />
          <BaseFooterMenu
            items={[
              { name: 'Shipping & returns', path: '/shipping-and-returns' },
              { name: 'Privacy policy', path: '/privacy-policy' },
              { name: 'Terms & conditions', path: '/terms-and-conditions' },
              { name: 'FAQ', path: '/faq' },
            ]}
            title="Help"
          />
          <div className="sm:col-span-2 md:order-first">
            <h3 className="mb-4">
              {/* @ts-expect-error Server Component */}
              <StoreLogo />
            </h3>
            {/* @ts-expect-error Server Component */}
            <ContactInformation />
            {/* @ts-expect-error Server Component */}
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-8 md:my-6 mx-6 sm:mx-10 md:container md:mx-auto">
        <PaymentMethods className="md:text-right" />
        {/* @ts-expect-error Server Component */}
        <Copyright className="md:order-first" />
      </div>
    </footer>
  );
};