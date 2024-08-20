import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const RedirectPlan = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.planId);
        sessionStorage.setItem("planId",location.state.planId);
        window.location.href="/workout";
    },[])
    return(
        <body>

        </body>
    )
}
export default RedirectPlan;