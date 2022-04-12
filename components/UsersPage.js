import Conteiner from "../components/Conteiner";
import UserComponent from "./userComponent";
import Head from "next/head";

const UsersPage = ({ users }) => {
  return(
    <div> 
      <Head>
        <title>Users page</title>
      </Head>
      <Conteiner>
        <h2 className="col-span-full text-6xl text-center font-bold">Our users</h2>
        {users.map((user,index) => (
            <UserComponent key={index} user={user} />
        ))}
      </Conteiner>
      
    </div>  
  )
};

export default UsersPage;