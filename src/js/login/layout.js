var React = require('react');

var LoginPage = React.createClass({
	render:function()
	{
	return(
		
			
	<div className="login-form">
			
 
			<form>
					
						<input type="text" className=" icon user" placeholder="Username"/>
					
				
						<input type="password" className=" icon lock"/>
					
					
					<div>		
						<input type="submit" onclick="myFunction()" value="SIGN IN" />
						
					</div>
				</form>

		</div>	
					
			);
	}

});

	module.exports = LoginPage;