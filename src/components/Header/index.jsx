import { Disclosure } from '@headlessui/react'
import { ReactComponent as Burger } from '@images/burger.svg'
import { ReactComponent as X } from '@images/x.svg'
import stone_logo from '@images/stone_logo.png'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <header className="px-4 md:px-24 shadow">
                        <div className="flex h-14 md:h-16 items-center">
                            <div>
                                <img src={stone_logo} alt="" />
                            </div>
                            <div className="w-full flex flex-row items-center justify-end space-x-12">
                                <div className="hidden sm:block cursor-pointer">
                                    <NavLink className="notSelected" to="/">首页</NavLink>
                                </div>
                                <div className="hidden sm:block cursor-pointer">
                                    <NavLink className="notSelected" to="/i">instagram</NavLink>
                                </div>
                                <div className="hidden sm:block cursor-pointer">
                                    <NavLink className="notSelected" to="/s">youtube</NavLink>
                                </div>
                                <div className="hidden sm:block cursor-pointer">
                                    <NavLink className="notSelected" to="/f">facebook</NavLink>
                                </div>
                                <div className="hidden sm:block cursor-pointer">
                                    <NavLink className="notSelected" to="/t">twitter</NavLink>
                                </div>
                                <div className="sm:hidden flex items-center">
                                    <Disclosure.Button>
                                        {open ? (
                                            <X title="Close" className="block h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <Burger title="Burger" className="block h-5 w-5" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Disclosure.Panel className="sm:hidden absolute w-full bg-conbg px-4 py-2">
                        <div className="flex flex-col space-y-2">
                            <div className="cursor-pointer">
                                <NavLink className="notSelected" to="/">首页</NavLink>
                            </div>
                            <div className="cursor-pointer">
                                <NavLink className="notSelected" to="/i">instagram</NavLink>
                            </div>
                            <div className="cursor-pointer">
                                <NavLink className="notSelected" to="/y">youtube</NavLink>
                            </div>
                            <div className="cursor-pointer">
                                <NavLink className="notSelected" to="/f">facebook</NavLink>
                            </div>
                            <div className="cursor-pointer">
                                <NavLink className="notSelected" to="/t">twitter</NavLink>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header