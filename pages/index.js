import Link from 'next/link';

function Home() {
    return () => {
        <>
        <div className="container-home">
            <h1>The NIO</h1>
        </div>

        <Link href="/stories">
            Read our stories
        </Link>
        </>
    }
}

export default Home;