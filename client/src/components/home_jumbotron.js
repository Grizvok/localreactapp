import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import MouseIcon from './mouse_icon';

const Example = (props) => {

	let styles= {
		height: '100%'
	};

  return (
    <div style={styles}>
      <Jumbotron fluid>
			<Container>
        <p className="lead">Twitchthroe is a web application built to streamline your Twitch viewing experience.</p>
        <hr className="my-2" />
        <p>It utilizes the excellent Twitch API to bring the content right to you without the clutter of Twitch's main site. Simply add channels to your list of streams to track and go! </p>
				</Container>
        <Container>
         <MouseIcon /><span className="lead">Take your own gaming to the next level by exploring your favorite gamers hardware and setups.</span>
          <p className="lead">Take your own gaming to the next level by exploring your favorite gamers hardware and setups.</p>
          <p className="lead">Take your own gaming to the next level by exploring your favorite gamers hardware and setups.</p>
          <Link to="/register"> <Button color="primary">Register now!</Button>
					</Link>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
