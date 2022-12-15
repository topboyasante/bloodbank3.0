import { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'

function AdminSendRequest() {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleForm(e){
    e.preventDefault()
    openModal()
  }

  return (
   <main>
     <section className='p-[2em] mt-[3em] lg:mt-0 w-full h-full z-[10]'>
        <NavLink className='border p-2 shadow-md rounded-md' onClick={() => navigate(-1)}>Back</NavLink>
        <br />
        <br />
        <form className='lg:w-[70vw] p-[2em] mx-auto'>
            <h1 className='text-2xl '>Blood Request Form</h1>
            <p className='my-2 text-gray-400'>Please Input the Required data Below</p>
            <br />
            <div className='my-3'>
                <label htmlFor='blood-type'>Select Blood Type</label>
                <br />
                <select name="blood-type" id="blood-type" className='border rounded-md w-[100%] p-2'>
                    <optgroup>
                        <option value="o+">O+</option>
                        <option value="o-">O-</option>
                        <option value="a-">A-</option>
                        <option value="a+">A+</option>
                        <option value="b-">B-</option>
                        <option value="b+">B+</option>
                        <option value="ab-">AB-</option>
                        <option value="ab+">B+</option>
                    </optgroup>
                </select>
            </div>
            <div className='my-3'>
                <label htmlFor="qty" >Input Quantity</label>
                <br />
                <input type="text" className='border w-[100%] p-2 rounded-md' />
            </div>
            <div className='my-3'>
                <label htmlFor='blood-type' >Select Request Type</label>
                <br />
                <select name="blood-type" id="blood-type" className='border rounded-md w-[100%] p-2'>
                    <optgroup>
                        <option value="emergency">Mass</option>
                        <option value="emergency">Specific</option>
                    </optgroup>
                </select>
            </div>
            <div className='my-3'>
                <label htmlFor="qty" >Input Deadline</label>
                <br />
                <input type="date" className='border w-[100%] p-2 rounded-md' />
            </div>
              <button className='bg-[#960000] text-white w-[100%] p-2 rounded-lg my-2' onClick={handleForm}>Send Request</button>
        </form>

        {/* Modal */}
        
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Request sent
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="text-sm text-gray-500">
                      <p>Your Blood Request was sent.</p>
                      <p>You will recieve a notification when a reply is submitted.</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#960000] px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

     </section>
   </main>

  )
}

export default AdminSendRequest