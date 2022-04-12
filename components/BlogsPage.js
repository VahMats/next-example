import Conteiner from "./Conteiner";
import PresentetionBlog from "./PresentationBlog";
import SingleBlog from "./SingleBlog";
import { useRouter } from "next/router";
import Head from "next/head";

const BlogsPage = ({ blogs }) => {

    const router = useRouter();

    function blogOpening (id) {
        router.push({
          pathname: '/blogs/[id]',
          query: {id: `${id}`}
        })
      };

    return(
      <div>
        <Head>
          <title>Blogs page</title>
        </Head>
        <Conteiner>
            <div className="col-span-full"><p className="text-7xl font-bold">Blog.</p></div>
          <PresentetionBlog blogOpening={blogOpening} {...blogs[0]}/>
          {blogs.filter((el,index) => index !== 0).map((blog)=>{  
              return( 
                  <SingleBlog blogOpening={blogOpening} key={blog.id} {...blog}/>
              );
          })}
        </Conteiner>
      </div>
    );
};

export default BlogsPage;