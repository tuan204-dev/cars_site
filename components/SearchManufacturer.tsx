'use client'

import React, {FC, Fragment, useState} from 'react'
import {SearchManufacturerProps} from '@/types'
import {Combobox, Transition} from '@headlessui/react'
import Image from 'next/image'
import {manufacturers} from '@/constants'

const SearchManufacturer: FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState<string>('')

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacture) =>
          manufacture
            .toLocaleLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturers} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Nothing found
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({active}) =>
                      `relative search-manufacturer__option ${
                        active
                          ? 'bg-primary-blue text-white'
                          : 'text-gray-900'
                      }`
                    }
                  >
                    {({selected, active}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
