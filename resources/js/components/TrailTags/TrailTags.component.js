import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { slugify } from "../../utils/slugify";
import styles from "./TrailTags.styles";

const TrailTagsComponent = ({ tagsArr }) => {
    return (
        <Box>
            {tagsArr.map((tag) => (
                <Link
                    sx={styles.tag}
                    key={`${tag}`}
                    href={`/trails/${slugify(tag)}`}
                >
                    <Typography sx={styles.tagText} variant="h5">{tag.replace(/-/gi, " ")}</Typography>
                </Link>
            ))}
        </Box>
    );
};

export default TrailTagsComponent;
