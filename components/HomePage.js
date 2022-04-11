import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Conteiner from "../components/Conteiner";
import PresentetionBlog from "./PresentetionBlog";
import SingleBlog from "./singleBlog";

const HomePage = ({ blogsData }) => {

    const router = useRouter();

    // const [data, setData] = useState([]);
    // const [randomElementIndex, setRandomElementIndex] = useState(0);
    // const [loading, setLoading] = useState(true);

    // const randomElementFinding = () => {
    //   setRandomElementIndex(Math.floor(Math.random() * blogsData.length));
    //   setData(blogsData.filter((el,index)=>index !== randomElementIndex));
    //   setLoading(false);
    // } 
    
    // useEffect(()=>{
    //   randomElementFinding();
    // },[]);

    function blogOpening (id) {
      router.push({
        pathname: '/blogs/[id]',
        query: {id: `${id}`}
      })
    };

  // if (loading) {
  //     return <div>loading</div>;
  // } 
  return(
    <div className="">
      <Conteiner>
          <div className="col-span-full"><p className="text-7xl font-bold">Blog.</p></div>
        <PresentetionBlog blogOpening={blogOpening} {...blogsData[0]}/>
        {blogsData.filter((el,index) => index !== 0).map((blog)=>{  
            return( 
                <SingleBlog blogOpening={blogOpening} key={blog.id} {...blog}/>
             );
        })}
      </Conteiner>
      
    </div>  
  )
};

export default HomePage;