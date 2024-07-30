import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const DeletePlan = () => {
    const location = useLocation();

    useEffect(() => {
        axios.delete(`http://localhost:8080/api/plan/delete/${location.state.userId}/${location.state.planId}`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',},
        })
        window.location.href="/profile";
    },[])
    return(
        <body>

        </body>
    )
}
export default DeletePlan;