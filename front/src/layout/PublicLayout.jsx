import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { publicNavbar } from "../utils/NavbarList"
import { app, google } from "../service/firebase"
import { Fragment, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginAction, loggedAction } from "../actions/AuthorActions"


const PublicLayout = () => {
    //const state = useSelector(state => state)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handler = () => {
        app.auth().signInWithPopup(google)
            .then(user => {
                dispatch(
                    loginAction(user.user.multiFactor.user.email,
                        user.user.multiFactor.user.displayName,
                        user.user.multiFactor.user.uid,
                        user.user.multiFactor.user.photoURL))

                navigate("/private/QuestionsPage")
            })
            .catch()
    }

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(loggedAction(user.multiFactor.user.email,
                    user.multiFactor.user.displayName,
                    user.multiFactor.user.uid,
                    user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")
            }
        })
    }, [dispatch, navigate])


    return (
        <Fragment>
            <Navbar elements={publicNavbar} />
            <div className="container">
                <button onClick={handler}>Iniciar Sesión con google</button>
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    )
}

export default PublicLayout
