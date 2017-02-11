import React from 'react'
import { Button } from 'react-toolbox/lib/button'

class AppContainer extends React.Component{

	// constructor(props) {
	// 	super(props);
		
	// }

	render(){

		return(
			<div>
				<div>
					<Button label="Date pick" />
					<div> hours pick </div>
				</div>
				<div>
				     slider
				</div>
				<div>
					videos
				</div>
				<div>
					footer
				</div>
			</div>
			)
	}
}

export default AppContainer