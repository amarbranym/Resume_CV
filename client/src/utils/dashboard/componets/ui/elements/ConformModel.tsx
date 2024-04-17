import { Fragment, useState, FC } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../button/Button';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleDelete: () => Promise<void>;
}

const ConformModal: FC<Props> = ({ isOpen, setIsOpen, handleDelete }) => {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-white bg-opacity-85 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 w-80 m-auto ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-dark-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6  ">
                                <div>
                                    <Dialog.Title as="h2" className="text-xl font-semibold leading-6 text-gray-200 text-center">
                                        Are you sure want to delete this user?
                                    </Dialog.Title>

                                </div>
                                <div className='mt-4 flex justify-between'>
                                    <Button
                                        type="button"
                                        size="md"
                                        rounded="sm"
                                        bg="white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="button"
                                        size="md"
                                        rounded="sm"
                                        bg="white"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ConformModal;
