import Nav from './Nav'
import Footer from './Footer'

export default function MainContainer({ children }) {
    return (
        <>
            <Nav />
            <div>{children}</div>
            <Footer />
        </>
    )
}