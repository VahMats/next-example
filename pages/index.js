import Head from "next/head";
import HomePage from "../components/HomePage";
import { blogs } from "../public/consts"

const Home = ({ blogsData }) => {
  return(
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <HomePage blogsData={blogsData} />     
    </>  
  )
};

export async function getServerSideProps() {
  const blogsData = [...blogs];
  return { props: { blogsData } }
}

export default Home;