import React from "react";
import { __ } from "../../translations/translator";
import "./trailsList.scss";
import { useHistory } from "react-router-dom";
import RouteId from "../../routes/routeID";

const TrailsList = ({ name, trails }) => {

    const history = useHistory();

    const editTrail = id => {
        history.push({
            pathname: RouteId.creatTrail,
            state: {
                id
            }
        });
    };

    return (
        <div>
            <div className={"list-head"}>
                <h4>{name}</h4>
            </div>
            <ul className={"list-body"}>
                {trails.length > 0 ? (
                    trails.map(trail => (
                        <li key={trail.title}>
                            {trail.title}
                            <button
                                type="button"
                                onClick={() => editTrail(trail.id)}
                            >
                                Edit
                            </button>
                        </li>
                    ))
                ) : (
                    <p>{__(`You have no ${name}`)}</p>
                )}
            </ul>
        </div>
    );
};

export default TrailsList;
