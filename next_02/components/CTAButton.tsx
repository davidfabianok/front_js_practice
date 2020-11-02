import Link from "next/link"
import { useState } from "react"
import { AppleIcon, DropdownIcon, LinuxIcon, WinIcon } from "./Icons"

export default function CTAButton() {
    const [isOpen, updateIsOpen] = useState(false)
    return (
        <>
            <div className="inline-flex">
                <div className="relative">
                    <div className="btn-popup inline-flex w-56 divide-x divide-green-600 hover:shadow-lg">
                        <Link href="https://www.kubernetic.com/">
                            <button className="btn btn-green inline-flex w-48 rounded-l py-3 pl-4 pr-3">
                                <AppleIcon />
                                <span>Download for Mac</span>
                            </button>
                        </Link>
                        <button
                            aria-label="choose-os"
                            className="btn btn-green inline-flex transition rounded-r ease-in-out duration-150 px-3 py-3"
                            onClick={() => updateIsOpen(!isOpen)}
                        >
                            <DropdownIcon />
                        </button>
                    </div>
                    {isOpen && <DropdownMenu />}
                </div>
            </div>
        </>
    )
}

const DropdownMenu = () => (
    <div className="absolute">
        <ul
            className="w-56 ml-1 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content right-0"
            aria-label="submenu"
        >
            <DropdownMenuItem icon={<WinIcon />} text="Download for Windows" to="https://www.kubernetic.com/" />
            <DropdownMenuItem icon={<LinuxIcon />} text="Download for Windows" to="https://www.kubernetic.com/" />
        </ul>
    </div>
)

type DropdownMenuProps = { icon: any, text: string, to: string }
function DropdownMenuItem({ icon, text, to }: DropdownMenuProps) {
    return (
        <Link href={to}>
            <li>
                <a className="inline-flex items-center cursor-pointer w-full px-2 py-2 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-200 hover:text-gray-800" type="buton">
                    {icon}
                    <span>{text}</span>
                </a>
            </li>
        </Link>
    )
}