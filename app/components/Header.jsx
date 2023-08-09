import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href="/">Harsh Raut</Link>
            </div>
            <div className='links'>
                <Link href="/about">About</Link><br></br>
                {/* <Link href="/about/team">Team</Link><br></br> */}<br></br>
                <Link href="/code/repos" >Repositories</Link><br></br>
            </div>
        </div>
      
    </header>
  )
}

export default Header
