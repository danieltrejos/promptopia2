"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { singIn, singOut, useSession, getProviders, signOut } from "next-auth/react"


const Nav = () => {

  const isUserLogIn = true
  const [providers, setProviders] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)

  /*   useEffect(() => {
      const setProviders = async () => {
        const response = await getProviders();
  
        setProviders(response)
      }
  
      setProviders()
    }, []) */

  return (
    <nav className="flex-between w-full mb-16 pt-3">

      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">
          Promptopia
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLogIn ? (<div className="flex gap-3 md:gap-5">
          <Link
            href="/create-prompt"
            className="black_btn"
          >
            Create Post
          </Link>
          <button type="button" onClick={singOut} className="outline_btn">Sign Out</button>
          <Link href="/profile">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounde-full"
              alt="Profile"
            />
          </Link>
        </div>) : (
          <>
            {providers &&
              Object.values(providers).map(provider => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => singIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))
            }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLogIn ?
          (<div className="flex flex-col">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full flex-center"
              alt="Profile"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                {/* Navegar a Profile */}
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                {/* Navegar a Crear nuevo prompt */}
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                {/* Cerrar Session */}
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false)
                    signOut()
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>) :
          (
            <>
              {providers &&
                Object.values(providers).map(provider => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => singIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                ))
              }
            </>
          )}
      </div>


    </nav>
  )
}

export default Nav