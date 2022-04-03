import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <Link href="/">
                <h1>The Clothing Store</h1>
            </Link>
            <Link href="/new">
                <a>New</a>
            </Link>
            <Link href="/sale">
                <a>Sale</a>
            </Link>
            <Link href="/tops">
                <a>Tops</a>
            </Link>
            <Link href="/trousers-shorts">
                <a>Trousers & Shorts</a>
            </Link>
            <Link href="/shoes">
                <a>Shoes</a>
            </Link>
            <Link href="/accessories">
                <a>Accessories</a>
            </Link>
            <Link href="/add">
                <a>Add Item</a>
            </Link>
        </nav>
    );
};

export default NavBar;
