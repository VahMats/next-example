import { blogs } from "../../public/consts"
import * as React from "react"
import { useState } from "react";
import Conteiner from "../../components/Conteiner";
import Image from "next/dist/client/image";
import Head from "next/head";

const blogPage = ( {blogsData} ) => {

    const [blogData, setBlogData] = useState({});
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        setBlogData(blogsData[(window.location.pathname[window.location.pathname.length - 1]) - 1]);
        setLoading(false);
    }, []);

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }

    return(
        <>
            <Head>
                <title>Blog page {blogData.id}</title>
            </Head>
            <Conteiner>
                <div className="col-span-full">
                    <Image layout="responsive" width={1} height={0.5} objectFit="cover" src={blogData.image.src} alt={blogData.image.alt} onClick={e=>{blogOpening(id);}}/>
                </div>
                <p className="col-span-full">{blogData.title}</p>
                <p className="col-span-full">{blogData.date}</p>
                <span className="col-span-full">{blogData.text}</span>    
            </Conteiner>         
        </>
    )

}

export async function getServerSideProps() {
    const blogsData = [...blogs];
    return { props: { blogsData } }
  }

export default blogPage;