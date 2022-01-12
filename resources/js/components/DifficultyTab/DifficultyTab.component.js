import React from 'react';
import { Chip, Tooltip, List, ListItem, Button } from '@mui/material'
import styles from './DifficultyTab.styles';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import routeID from "../../routes/routeID";

const DifficultyTabComponent = ({difficultyLevel}) => {

    const ToolTip = () => {
        return (
            <List>
                {difficultyLevel.description.map((text) => (
                    <ListItem key={text}>{text}</ListItem>
                ))}
                <ListItem>
                    <Button
                        color="secondary"
                        sx={styles.toolTipButton}
                        endIcon={<NavigateNextIcon />}
                        href={routeID.difficulty}
                    >
                        See More
                    </Button>
                </ListItem>
            </List>
        );
    };

  return (
    <Tooltip sx={styles.chip} title={<ToolTip />}>
      <Chip
        label={difficultyLevel.title}
        style={{ backgroundColor: difficultyLevel.color }}
      />
    </Tooltip>
  )
}

export default DifficultyTabComponent
