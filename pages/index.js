import Head from "next/head";
import Link from "next/link"

const Home = () => {
  return(
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="">
        <div className="w-full h-96 bg-slate-400 flex items-center justify-center  ">
          <span className="text-white text-4xl">Hello, Welcome to Next js example app</span>
        </div>
        <div className="pt-16 w-full text-center">
          <span className="text-3xl">What do you want to see</span>
          <div className="flex cursor-pointer mt-8">
            <Link href="/blogs"><div className="w-1/2 h-48 bg-slate-500 text-white text-4xl flex items-center justify-center">
                <span>Let's see Blogs</span>
              </div></Link>
            <Link href="/users"><div className="w-1/2 h-48 bg-slate-900 text-white text-4xl flex items-center justify-center">
                <span>Let's see Users</span>
              </div></Link>
          </div>
        </div>
      </div>
    </>  
  )
};

export default Home;