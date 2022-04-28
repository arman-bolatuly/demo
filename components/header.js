import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/users">
          <a>Authors</a>
        </Link>
        <Link href="/users/createuser">
          <a>Create Author</a>
        </Link>
        <Link href="/users/edituser">
          <a>Edit Author</a>
        </Link>
        <Link href="/books">
          <a>Books</a>
        </Link>
        <Link href="/books/createbook">
          <a>Create book</a>
        </Link>
        <Link href="/books/editbook">
          <a>Edit book</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
