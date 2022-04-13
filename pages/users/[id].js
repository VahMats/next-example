import Conteiner from "../../components/Conteiner";
import Head from "next/head";

// export const getServerSideProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const userData = await res.json();

//     return{
//         props:{user:userData}
//     }

// }

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(el=>({params: {id:el.id.toString()}}));

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props:{
            user:data
        }
    }
}

const Users = ({ user }) => {
    return(
        <div>
            <Head>
                <title>User page {user.id}</title>
            </Head>
            <Conteiner>
                <h2 className="col-span-full text-white bg-gray-300 text-4xl py-16 text-center">{user.name}</h2>
                    <div className="col-span-full md:col-span-3 lg:col-span-6 text-white bg-gray-300 text-3xl py-16 text-center">{user.username}</div>
                    <div className="col-span-full md:col-span-3 lg:col-span-6 text-white bg-gray-500 text-3xl py-16 text-center">{user.email}</div>           
                    <div className="col-span-full md:col-span-3 lg:col-span-6 text-white bg-gray-700 text-3xl py-16 text-center">{user.phone}</div>
                    <div className="col-span-full md:col-span-3 lg:col-span-6 text-white bg-gray-900 text-3xl py-16 text-center">{user.website}</div>
                    <div className="col-span-full text-white bg-gray-900 text-3xl py-16 text-center">
                    {user.company.name}</div> 
            </Conteiner>
        </div>
    )
}

export default Users;