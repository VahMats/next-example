import UsersPage from "../components/UsersPage";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    
    return {
        props: {users: data}
    }
  }
  

const Users = ({users}) => {
    return(
        <div>
            <UsersPage users={users}/>
        </div>
    );
};

export default Users;