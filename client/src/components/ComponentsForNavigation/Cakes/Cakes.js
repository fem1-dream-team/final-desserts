import React from 'react'
import s from './cakes.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

export const CakeDescription = (props) => {
	return (
		<div>
			<CardMedia
				id={props.id}
				image={props.image}
				component="img"
				alt="Product image not found"
				height="140"
				title="Contemplative Reptile"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.description}
				</Typography>
			</CardContent>
		</div>
	)
}

const CakeProductCard = (props) => {
	const ShowProductDescription = () => {
		alert('Hello!')
	}

	return (
		<Card className="div" id={props.id}>
			<CardActionArea>
				<CakeDescription
					id= {props.id}
					name={props.name}
					image={props.image}
					description={props.description}
				/>
			</CardActionArea>
			<CardActions>
				 <NavLink to={`/cakes/buy/${props.id}`}>
					<Button size="small" color="primary">
						BUY
					</Button>
				 </NavLink>
				<Button size="small" color="primary" onClick={ShowProductDescription}>
					DETAILS
				</Button>
			</CardActions>
		</Card>
	)
}

export const Cakes = (props) => {
	const CakesElements = props.cakes
		.map(cake => {
			return (
				<Grid item component="div" sm={3}>
					<CakeProductCard
						id= {cake.id}
						image={cake.image}
						name={cake.name}
						description={cake.description}
						price={cake.price}
					/>
				</Grid>
			)
		})
	return (
		<div>
			<div className={s.container}>
				<p className={s.text}>
					Make a Bittersweet cake part of your celebration tradition – because a party without a cake is just a meeting and share the joy with friends and family!
				</p>
			</div>
			<Container>
				<p></p>
				<Grid container component="div" direction="row" justify='space-between' spacing={4}>
					{ CakesElements }
				</Grid>
				<p></p>
			</Container>
		</div>
	);
};
