import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import ProjectPageComponent from '@/love/cComponent/bUnprotectedComponent/children/bProjectPage'
import Loader from '@/love/cComponent/aGlobalComponent/component/cLoader';


const ProjectPage = ({ ReduxUltimate }) => {
 	// Variables
	const {id} = useParams()
 
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProjectPageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ProjectPageAPICall: () => APIs.ProjectPageAPI(Redux, ReduxUltimate, id)
	}	

  // All Render
	// First Render
	useEffect(() => {
		APICalls.ProjectPageAPICall()
	}, [])

	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			{
				ReduxUltimate.state.RequiredObject?.Loading ? <Loader />
				:
      	<ProjectPageComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />
			}
    </React.Fragment>
  )
}

export default ProjectPage