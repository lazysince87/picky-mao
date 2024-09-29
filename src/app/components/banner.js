'use client'
import Link from 'next/link'

export const Banner = () => {
    {/* Fixed Back to Homepage Button */}
    <div className="fixedButtonContainer">
        <Link href="/" passHref style={{textDecoration: 'none'}}>
            <button className="homepageButton">Home</button>
        </Link>
    </div>
}