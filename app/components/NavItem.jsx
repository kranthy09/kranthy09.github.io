'use client';

// components/Navigation/NavItem.jsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href ||
        (href !== '/' && pathname.startsWith(href));

    return (
        <Link
            href={href}
            className={`text-gray-700 font-medium transition-colors nav-link ${isActive
                    ? 'text-primary active'
                    : 'hover:text-primary'
                }`}
        >
            {label}
        </Link>
    );
};

export default NavItem;