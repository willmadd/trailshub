import React, {useEffect} from "react";
import axios from "axios";
import './stravaButton.scss'

const StravaButton = ({setStravaRoutes, setStravaLoading, page}) => {

useEffect(()=>{
    handleStravaButtonClick();
},[page])

    const handleStravaButtonClick = () => {
        setStravaLoading(true);
        if (localStorage.getItem("trailshub:strava:access_token")) {
            const access_token = localStorage.getItem("trailshub:strava:access_token");
            getActivities(access_token)
            .then(res=>{
                const filtered = res.data.filter(
                    route => route.map.summary_polyline
                );
                setStravaRoutes(filtered);
                setStravaLoading(false);
            })
            .catch(e => {
                console.log("error");
                console.log(e);
                if(localStorage.getItem("trailshub:strava:refresh_token")){
                    const refreshToken = localStorage.getItem("trailshub:strava:refresh_token");
                    getNewAccessToken(refreshToken)
                    .then(res=>{
                        console.log(res);
                        const newAccessToken = res.data.access_token;
                        localStorage.setItem("trailshub:strava:access_token", newAccessToken);
                        handleStravaButtonClick();
                    })
                }else{
                    openSignInWindow('strava')

                }
            });
            // if(!success && localStorage.getItem("trailshub:strava:refresh_token")){

            // }
        }else{
            openSignInWindow('strava')
        }
    };

    const openSignInWindow = name => {

        const url =
            "http://www.strava.com/oauth/authorize?client_id=57029&response_type=code&redirect_uri=http://localhost:8000/strava_auth&approval_prompt=force&scope=activity:read_all";
        let windowObjectReference = null;
        let previousUrl = null;
        window.removeEventListener("message", receiveMessage);
        const strWindowFeatures =
            "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";

        if (windowObjectReference === null || windowObjectReference.closed) {
            windowObjectReference = window.open(url, name, strWindowFeatures);
        } else if (previousUrl !== url) {
            windowObjectReference = window.open(url, name, strWindowFeatures);
            windowObjectReference.focus();
        } else {
            windowObjectReference.focus();
        }

        window.addEventListener(
            "message",
            event => receiveMessage(event),
            false
        );
        previousUrl = url;
    };

    const receiveMessage = event => {
        const regex = /(?<=code=).+.*?(?=\&)/;
        const token = event.data.match(regex)[0];
        const requestUl = "https://www.strava.com/oauth/token";
        var bodyFormData = new FormData();
        bodyFormData.append("client_id", "57029");
        bodyFormData.append(
            "client_secret",
            "eb49b882ac23ed975c7b12273ed2eb38953a9d70"
        );
        bodyFormData.append("code", token);
        bodyFormData.append("grant_type", "authorization_code");
        axios({
            method: "post",
            url: requestUl,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            const { access_token, refresh_token } = res.data;
            localStorage.setItem("trailshub:strava:access_token", access_token);
            localStorage.setItem("trailshub:strava:refresh_token", refresh_token);
            getActivities(access_token)
            .then(res=>{
                console.log(res)
                const filtered = res.data.filter(
                    route => route.map.summary_polyline
                );
                console.log(filtered);
                setStravaRoutes(filtered);
                setStravaLoading(false);
            });
        });
    };

    const getActivities = access_token => {
        return axios
            .get(
                `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}&page=${page}`
            )
    };

    const getNewAccessToken = refreshToken => {

        const requestUl = "https://www.strava.com/oauth/token";
        var bodyFormData = new FormData();
        bodyFormData.append("client_id", "57029");
        bodyFormData.append(
            "client_secret",
            "eb49b882ac23ed975c7b12273ed2eb38953a9d70"
        );
        bodyFormData.append("refresh_token", refreshToken);
        bodyFormData.append("grant_type", "refresh_token");
        return axios({
            method: "post",
            url: requestUl,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })

        // return axios
        //     .get(
        //         `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}&page=${page}`
        //     )
    };

    // const selectRoute = route => {
    //     const coords = polyline.decode(route.map.summary_polyline);
    //     // .map(pos => ({ lat: pos[0], lon: pos[1] }));
    //     console.log(coords);
    //     return {
    //         route: coords,
    //         time: route.moving_time,
    //         ascent: total_elevation_gain,
    //         distance
    //     };
    // };

    return (
        <div>
            <button
                type="button"
                onClick={() => handleStravaButtonClick()}
                className="strava-button"
            ></button>
        </div>
    );
};

export default StravaButton;
