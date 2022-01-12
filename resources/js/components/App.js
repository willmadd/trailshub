import React, { useEffect, useContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { __RouterContext } from 'react-router'

import { useDispatch } from 'react-redux'
import { getTrailsOverview } from '../store/actions'
import { routes } from '../routes'
import { getUserData } from '../store/Login/actions'

import Header from '../containers/Header'
import Map from './map'
import RouteFromArray from '../routes/RouteFromArray'
import { config } from '../store/appLoad/actions'
import { initUser } from '../store/Load/actions'
import Footer from './Footer'
import HeaderMui from './HeaderMui'
// import { useTransition, animated } from 'react-spring'
// import {useRouter} from '../hooks/useRouter'
// useLocation
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const App = (props) => {
  const dispatch = useDispatch()
  const location = useLocation()
  console.log('locloc 123456', location)

  useEffect(() => {
    if (localStorage.getItem('trailshub:all:userToken')) {
      dispatch(initUser(localStorage.getItem('trailshub:all:userToken')))
    }

    dispatch(getTrailsOverview())

    if (localStorage.getItem('trailsHubConfig')) {
      const configFromLocalStorage = JSON.parse(
        localStorage.getItem('trailsHubConfig')
      )
      dispatch(config(configFromLocalStorage))
    } else {
      dispatch(config({ imperial: true }))
    }
  }, [])

  return (
    <div className="Trails-Hub-App">
      {/* <Header /> */}
      <HeaderMui />
      <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            {routes.map((route, index) => (
            //   <motion.div
            //     initial={{ scaleY: 0 }}
            //     animate={{ scaleY: 1 }}
            //     exit={{ scaleY: 0 }}
            //     transition={{ duration: 0.5 }}
            //   >
                <RouteFromArray key={index} exact={route.exact} {...route} />
            //   </motion.div>
            ))}
          </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
