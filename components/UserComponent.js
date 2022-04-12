import Link from "next/link";

const UserComponent = ({ user }) => {
    return (
        <div className="col-span-full md:col-span-3 lg:col-span-6 border-2 border-gray-500 text-center p-8">
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <Link href={`/users/${user.id}`}><a>See more ...</a></Link>
        </div>
    )
};

export default UserComponent;