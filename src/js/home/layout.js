var React = require('react');

var HomePage = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Welcome</h1>
				
				<div className="container">
					
					<div className="picture">
					<img src="https://i.ytimg.com/vi/b6dT4kyVUuY/maxresdefault.jpg"/>
						<div className="comment">
						</div>					
					</div>

				<div className="picture">
				<img src="http://www.slate.com/content/dam/slate/blogs/wild_things/2015/09/02/150902_WILD_CutePenguins.jpg.CROP.promo-xlarge2.jpg"/>
						<div className="comment">
						</div>					
					</div>

					<div className="picture">
					<img src="https://s-media-cache-ak0.pinimg.com/originals/7d/a0/74/7da0743c8de7c34f929fc18e61e07e2c.jpg"/>
						<div className="comment">
						</div>					
					</div>

					<div className="picture">
					<img src="https://s-media-cache-ak0.pinimg.com/564x/8c/58/ef/8c58ef5384f7c67d7a96689b0d514994.jpg"/>
						<div className="comment">
						</div>					
					</div>


					<div className="picture">
					<img src="https://s-media-cache-ak0.pinimg.com/564x/26/c3/da/26c3da057ff7d8ac0bccedacdad45250.jpg"/>
						<div className="comment">
						</div>					
					</div>

					<div className="picture">
					<img src="https://dncache-mauganscorp.netdna-ssl.com/thumbseg/743/743793-bigthumbnail.jpg"/>
						<div className="comment">
						</div>					
					</div>

					<div className="picture">
					<img src="http://dreamstop.com/wp-content/uploads/2015/10/panda-dream.jpg"/>
						<div className="comment">
						</div>					
					</div>

					<div className="picture">
					<img src="http://www.lovethispic.com/uploaded_images/163506-Baby-Tiger.jpg"/>
						<div className="comment">
						</div>					
					</div>

				</div>
			</div>
		);
	}
});

module.exports = HomePage;