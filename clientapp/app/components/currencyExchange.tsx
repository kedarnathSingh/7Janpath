"use client";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people = [
    {
      id: 1,
      name: 'Wade Cooper',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Arlene Mccoy',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Devon Webb',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
  ];

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  

const CurrencyExchange = () => {

    let cuurentCurrencyrate = 55;
    let commision = 0.2;

    const [selected, setSelected] = useState(people[0]);

    const [currencyExchangeForm, setCurrencyExchangeForm] = useState({
        selectCity: "Select City", 
        userCurrency: "Select currency",
        requiredCurrency: "select currency",
        currencyNotes: "Currency Notes",
        useramount: 0,
        vendoramount: 0

      });
    const handleChange = (event:any ) => {
        const {name, value} = event.target;
        setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handlecurrencyExchnageSubmit = (event: any) => {
        event.preventDefault();
        console.log(`City: ${currencyExchangeForm.selectCity}, 
        User Currency: ${currencyExchangeForm.userCurrency}, 
        Required Currency: ${currencyExchangeForm.requiredCurrency}, 
        Notes: ${currencyExchangeForm.currencyNotes},
        User Amount: ${currencyExchangeForm.useramount},
        vendor Amount: ${currencyExchangeForm.vendoramount}`
        );
    };
  

    return(
        <div className="book-order-search-box">
        <div className="book-order-tab-box">
            <form onSubmit={handlecurrencyExchnageSubmit}>
                <p className="book-order-input-box">
                        <select name="selectCity" id="selectCity" value={currencyExchangeForm.selectCity} onChange={handleChange}>
                            <option value="Select City">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Delhi">Noida</option>
                        </select>
                </p>
                <div className="book-order-input-box book-cus-inputset">
                    <p className="mb-0">
                        <label>Currency You Have</label>
                        <select id="userCurrency" name="userCurrency" value={currencyExchangeForm.userCurrency} onChange={handleChange} >
                            <option value="default">Select currency</option>
                            <option value="US dollar">US dollar</option>
                            <option value="AUS dollar">AUS dollar</option>
                        </select>
                    </p>
                    <p className="mb-0">
                        <label>Currency You Want</label>
                        <select id="requiredCurrency" name="requiredCurrency" value={currencyExchangeForm.requiredCurrency} onChange={handleChange}>
                        <option value="default">Select currency</option>
                        <option value="US dollar">US dollar</option>
                        <option value="AUS dollar">AUS dollar</option>
                        </select>
                    </p>
                </div>
            
                <p className="book-order-input-box">
                    <select id="currencyNotes" name="currencyNotes" value={currencyExchangeForm.currencyNotes} onChange={handleChange}>
                        <option value="Forex Card">Forex Card</option>
                        <option value="Currency Notes">Currency Notes</option>
                    </select>
                </p>


              {/* Currency notes */}
              <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {/* <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

              {/* Currency notes code end */}

                <p className="book-order-input-box">
                    <input name="useramount" value={currencyExchangeForm.useramount} onChange={handleChange} type="text" placeholder="Enter your amount"/>
                </p>
                <p className="book-order-input-box">
                    <input name="vendoramount" value={currencyExchangeForm.vendoramount} onChange={handleChange} type="text" placeholder="Amount"/>
                </p>
            
            <div className="total-book-order">
                <h2>Total Amount</h2>
                <h2>Rs. {(currencyExchangeForm.vendoramount) - (currencyExchangeForm.useramount * commision)}</h2>
            </div>
            <button className="book-btn-set" type="submit">Book This Order</button>
            </form>
        </div>
  </div> 
    )
};

export default CurrencyExchange;