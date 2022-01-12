import React from 'react'
import DifficultyTabComponent from './DifficultyTab.component';
import { difficulty } from "../../../globalConfig";

const DifficultyTabContainer = (props) => {

    console.log('dif', props.difficulty);

  const difficultyLevel = difficulty.find(
    (val) => val.difficultyKey === props.difficulty
  )

  console.log('dif22', difficulty);

  console.log('dif22', difficultyLevel);

  const containerProps = {
    difficultyLevel,
  }

  const containerFunctions = {}

  return (
    <DifficultyTabComponent
      {...props}
      {...containerProps}
      {...containerFunctions}
    />
  )
}

export default DifficultyTabContainer
