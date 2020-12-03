import Link from 'next/link';

function Stories() {
    return () => {
        <>
        <div className="container-home">
            <h1>Stories</h1>
        </div>

        <Link href="/">
            Back to homepage
        </Link>
        </>
    }
}

export default Stories;