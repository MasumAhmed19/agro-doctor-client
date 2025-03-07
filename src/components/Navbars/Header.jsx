import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import gsap from 'gsap'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signInWithGoogle, logOut, loading } = useAuth();

  const navigate = useNavigate();

  const googleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Login Successful')
      navigate('/dashboard/overview')
    } catch (err) {
      console.log("Error--->: ", err)
    }
  }


  return (
    <header className="bg-[#032c1e] text-white relative z-[1000]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to='/' className="-m-1.5 p-1.5">
            <span className="sr-only">Agro Doctor</span>
            <img
              alt=""
              src="https://i.ibb.co.com/9HNjny8Q/agro-doctor-logo-2.png"
              className="h-9 w-auto"
            />
          </Link>
        </div>
        {/* Hamburger menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <NavLink to='/' className="text-sm/6 font-semibold text-white">
            Home
          </NavLink>

          <NavLink to='/services' className="text-sm/6 font-semibold text-white">
            Services
          </NavLink>



          <NavLink to='/about' className="text-sm/6 font-semibold text-white">
            About
          </NavLink>

          <NavLink to="/contact" className="text-sm/6 font-semibold text-white">
            Contact
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {
            user ?
              <Link to="/dashboard/overview" className="text-sm/6 font-semibold bg-[#d6fa9c] rounded-xl text-black px-3.5 py-1">
                Go to Dashboard
              </Link>
              :
              <button onClick={() => googleLogin()} className="text-sm/6 font-semibold cursor-pointer bg-white rounded-xl text-black px-3">
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
          }

        </div>
      </nav>

      {/* mOBILE MENU */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#032c1e] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-300 ease-in-out transform">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Agro Doctor</span>
              <img
                alt=""
                src="https://i.ibb.co.com/9HNjny8Q/agro-doctor-logo-2.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-[#d6fa9c]" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
                  onClick={()=>setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  onClick={()=>setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
                >
                  Services
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={()=>setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={()=>setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
                >
                  Contact
                </NavLink>

              </div>
              <div className="py-6">

                {
                  user ?
                    <Link to="/dashboard/overview" onClick={()=>setMobileMenuOpen(false)} className="text-sm/6 font-semibold bg-[#d6fa9c] rounded-xl text-black px-3.5 py-1">
                    Go to Dashboard
                  </Link>
                    :
                    <button onClick={() => googleLogin()} className="text-sm/6 font-semibold cursor-pointer bg-white rounded-xl text-black px-3 py-1">
                      Log in <span aria-hidden="true">&rarr;</span>
                    </button>
                }


              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
