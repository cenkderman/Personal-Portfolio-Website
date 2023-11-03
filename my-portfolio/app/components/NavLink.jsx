import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={"#about"}
            className="text-medium text-default-800 font-normal dark:text-default-900"
        >
            {title}
        </Link>

    )
}

export default NavLink