'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const pathname = usePathname()
  console.log("pathname : ", pathname)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms & Condition', href: '/termsConditions' },
    { name: 'Privacy Policies', href: '/privacyPolicies' },
  ]

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="bg-white text-black py-[5px] fixed top-0 left-0 w-full z-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h3 style={{ color: 'Black' }}></h3>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-auto">
              <div className="flex space-x-2">
                {navigation.map((item) => (
                  <Link
                    style={{ textDecoration: 'none' }}
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded text-[15px] ${pathname === item.href ? 'bg-white text-black font-semibold' : ''
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
            // aria-current={item.current ? 'page' : undefined}
            // className={classNames(
            //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            //   'block rounded-md px-3 py-2 text-base font-medium',
            // )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
