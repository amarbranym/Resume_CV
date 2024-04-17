import { Fragment, useState, FC , useEffect} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../button/Button';
import { styles } from '../../styles/style';
interface RowData {
    _id?: string;
    name?: string;
    email?: string;
    role?: string;
  }
interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    data: RowData | null;
    handleSubmit: (email: string, role: string) => Promise<void>
}

const EditModal: FC<Props> = ({ isOpen, setIsOpen, data={}, handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("admin");

    useEffect(() => {
        if (data) {
            console.log("Data received:", data);
            setEmail(data?.email ?? "");
            setRole(data?.role ?? "admin");
        }
    }, [data]);
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-white bg-opacity-50 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-dark-400 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <Dialog.Title as="h2" className="text-lg font-semibold leading-6 text-gray-200">
                                        Add User
                                    </Dialog.Title>

                                </div>
                                <div className="mt-4 sm:mt-4">
                                    <input type="email" className={styles.input}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email..." />
                                    <select
                                        name=""
                                        id=""
                                        className={`${styles.input} !mt-4`}
                                        onChange={(e: any) => setRole(e.target.value)}
                                        value={role}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>

                                <div className='mt-4'>
                                    <Button
                                        type="button"
                                        size="lg"
                                        rounded="sm"
                                        bg="white"
                                        onClick={() => handleSubmit(email, role)}
                                    >
                                        Add User
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

export default EditModal;
