import Link from "next/link";

export default function Layout({ children })
{
    return(
        <div className="flex flex-col min-h-screen">
            
            <header className="bg-red-500 mb-8 py-4">
                <div className="container mx-auto flex justify-center">
                    {/* Link and link are fucking different Link is the one we want to use with jsx 
                    Link seems to be an actual function that takes in shit*/}
                    <Link href="/">
                        <a>🏡</a>
                    </Link>
                    <span className="mx-auto">Welcome to programming blog</span>{' '}
                </div>
            </header>
            
            
            
            {/*Why the hell is this the comment structure for jsx 
            We render all the children given through the children property
            */}
            <main className="container mx-auto flex-1">{children}</main>
            


            <footer className="bg-red-500 mt-8 py-4">
                <div className="container mx-auto flex justify-center">
                    {/* Copyright sign and other symbols not on normal keyboards have codes such as the &copy */}
                    &copy; 2022 Watermark thing?
                </div>
            </footer>
        </div>
    );
    //really cant have this comment in jsx fuck me thats stupid
    // use ctrl / if u want to avoid typing out  {/*  */}
}