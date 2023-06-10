import React from 'react'
import Image from 'next/image'
import {footerLinks} from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car hub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 text-gray-500 border-t border-gray-100">
        <p className="text-base text-gray-700">
          Car hub 2023 <br />
          All rights reserved &copy;
        </p>

        <div className="flex gap-6">
          <Link href="/">Privacy & Policy</Link>
          <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
