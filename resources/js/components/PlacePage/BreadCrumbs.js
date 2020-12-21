import React from 'react';
import { Link } from "react-router-dom";
import {slugify} from '../../utils/slugify';

const BreadCrumbs = ({crumbs}) => {
    return (
        <div>
            {crumbs.reverse().map((crumb, i)=>{
                return <React.Fragment key={slugify(crumb)}><Link to={`/trails/${slugify(crumb)}`}>{`${crumb}`}</Link>{`${i===crumbs.length-1?"":" > "}`}</React.Fragment>
            })}
        </div>
    );
};

export default BreadCrumbs;

