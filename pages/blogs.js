import BlogsComponent from "../components/BlogsPage";
import { blogs } from "../public/consts";

export const getServerSideProps = async () => {
    const blogsData = [...blogs];
    return {
        props: {blogsData}
    }

}

const BlogsPage = ({blogsData}) => {
    return (
        <BlogsComponent blogs={blogs} />
    );

}

export default BlogsPage;