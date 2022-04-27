// import React from 'react'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
//  Browser
const signIn = ({ providers }) => {
  console.log(providers)
  return (
    //  looping through provider, aka google, etc
    <>
      <Header />
      <div className="mt-20 flex max-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is not a real app, it is built for educational purposes only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 px-3 py-2 text-white"
                onClick={
                  () => SignIntoProvider(provider.id, { callbackUrl: '/' })
                  //  add callbackURL with route to link
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
//  Server
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
