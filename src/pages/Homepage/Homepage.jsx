import React,{Fragment,useState} from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import Logo from '../../Images/BBLogo.png'
import {AiOutlineClose} from 'react-icons/ai'
import {FaInstagram,FaFacebook,FaTwitter,FaHospitalSymbol} from 'react-icons/fa'
import {FiArrowDown} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import FeatureCard from '../../components/Cards/FeatureCard'
import { Menu, Transition } from '@headlessui/react'

function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="isolate bg-gradient-to-r h-screen">
      {/* Header */}
      <section className='header'>
            {/* Navigation */}
      <div className="px-6 pt-6 lg:px-8 h-[10vh] text-white">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to='/' className="-m-1.5 p-1.5">
                <img className="h-8" src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="flex lg:hidden">
               <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Log In
            <FiArrowDown
              className="ml-2 -mr-1 h-5 w-5 text-[#ffffff] hover:text-red-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
            <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link to='/donor/donor-login'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-[#960000]' : 'text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      As Donor
                    </button>
                  )}
                </Menu.Item>
              </Link>

             <Link to='blood-bank'>
                <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#960000]' : 'text-white'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        As Blood Bank
                      </button>
                    )}
                  </Menu.Item>
             </Link>

            </div>
            </Menu.Items>
            </Transition>
            </Menu>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              
                <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Log In
            <FiArrowDown
              className="ml-2 -mr-1 h-5 w-5 text-[#ffffff] hover:text-red-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
            <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link to='/donor/donor-login'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-[#960000] text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      As Donor
                    </button>
                  )}
                </Menu.Item>
              </Link>

             <Link to='blood-bank'>
                <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#960000] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        As Blood Bank
                      </button>
                    )}
                  </Menu.Item>
             </Link>

            </div>
            </Menu.Items>
            </Transition>
            </Menu>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed w- inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <img
                      className="h-8"
                      src={Logo}
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                 
                  <div className="py-6">
                  <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Log In
            <FiArrowDown
              className="ml-2 -mr-1 h-5 w-5 text-[#ffffff] hover:text-red-700"
              aria-hidden="true"
              color='#000000'
            />
          </Menu.Button>
        </div>
            <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link to='/donor/donor-login'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-[#960000] text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      As Donor
                    </button>
                  )}
                </Menu.Item>
              </Link>

             <Link to='bank'>
                <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#960000] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        As Blood Bank
                      </button>
                    )}
                  </Menu.Item>
             </Link>

            </div>
            </Menu.Items>
            </Transition>
            </Menu>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      {/* Hero */}
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-[90vh] p-5 text-white'>
        <h1 className='font-bold text-4xl lg:text-6xl'>Your Digitized Blood Bank.</h1>
        {/* Make Changes */}
        <p className="my-5 lg:text-lg text-center">An Integrated Blood Bank System. All of Ghana's Banks merged as one.</p>
        <Menu>
          <Menu.Button className='bg-[#960000] text-white px-3 py-2 rounded-lg w-[150px] text-lg shadow-md'>
             Get Started
          </Menu.Button>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-[22em] lg:mt-[18em] w-56  rounded-md bg-gray-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link to='/donor/donor-signup'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-[#960000]' : 'text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPerson
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      As Donor
                    </button>
                  )}
                </Menu.Item>
              </Link>

             <Link to='blood-bank/signup'>
                <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#960000]' : 'text-white'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaHospitalSymbol
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        As Blood Bank
                      </button>
                    )}
                  </Menu.Item>
             </Link>

            </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      </section>

      {/* About Section */}
      <div className='bg-[#960000] text-white p-5 flex lg:flex-row flex-col justify-around items-center'>
        <section className='lg:w-[50%]'>
        <h1 className='font-light text-4xl lg:text-5xl text-center lg:text-left'>Welcome to Bladie.</h1>
        <p className="my-5 text-center lg:text-left">
            Welcome to Ghana's first Integrated Blood Bank App.
        </p>
        </section>
        <img
        className='lg:w-[40%] lg:h-[480px]'
        src='https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
         />
      </div>

      {/* Features */}
      <div className='px-5 py-10 max-w-[1240px] mx-auto'>
        <h1 className="text-center lg:text-5xl">Why Bladie?</h1>
        <p className='text-center my-5 text-gray-500'>See why millions of our users use Bladie.</p>
        <section className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
            <FeatureCard
            header='Fastest Service.'
            desc='We know how valuable blood is, so we handle your donations and requests with speed.'
            />
            <FeatureCard
            header='24/7 Customer Care.'
            desc={`Need Help with Bladie? Even at the latest of times, our customer care services are active and ready to help.`}
            />
            <FeatureCard
            header='Easy to Use.'
            desc='Bladie is the Easiest Blood Bank App on the market.'
            />
            <FeatureCard
            header='Stable Build.'
            desc='Bladie has a Stable build, so no need to worry about frequent updates!'
            />
            <FeatureCard
            header='Integrated with Google Maps.'
            desc='Bladie was built with the Google Maps API, to track the location of your requests.'
            />
            <FeatureCard
            header='Quick Access.'
            desc='Bladie is the most easily accessible blood bank app on the market.'
            />
        </section>
      </div>

      {/* Contact */}
      <div className='bg-[#960000] p-5 text-white '>
        <section className='max-w-[1240px] mx-auto'>
          <h1 className="text-3xl text-center">Check out our Pages:</h1>
          <div className='grid lg:grid-cols-3 place-items-center my-5 gap-5'>
            <a href='https://www.instagram.com'>
              <FaInstagram size={30}/>
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook size={30}/>
            </a>
            <a href="https://www.twitter.com">
            <FaTwitter size={30}/>
            </a>
          </div>
        </section>
      {/* Footer */}
       <footer className="text-center my-5">2023.Axon Information Systems.</footer>             
      </div>
    </div>
  )
}

export default Homepage