import Link from "next/link";


const Footer = () => {
    
    return(
        <div className="mt-16 bg-gray-400 h-16 text-center text-white p-3 text-3xl w-full">
            <Link href="/"><a>Go back to Home</a></Link>
        </div>
    );
};

export default Footer;