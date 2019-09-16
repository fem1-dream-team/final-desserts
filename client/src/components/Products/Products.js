import React, {useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';

export const Products = (props) => {
	// console.log(props.category);
	const [productsList, setProductsList] = useState([]);

	const products = productsList.map((item) => {
		return (
			<Grid item component="div" sm={3} key={item._id}>
				<Card className="div">
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Product image not found"
							height="140"
							image="img/slider-img/2.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{item.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{item.description}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Замовити
						</Button>
						<Button size="small" color="primary">
							Детальніше
						</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	});

	const getProductsList = async () => {
		const response = await fetch ('http://localhost:3001/api/getData/category/' + props.category);
		const responseJSON = await response.json();
		setProductsList(responseJSON.data);
		console.log(responseJSON);
	};

	useEffect( () => {
		getProductsList()
	}, []);

	return (
		<Container>
			<h1>Products List Page</h1>
			<Grid container component="div" direction="row" justify='space-between' spacing={4}>
				{products}
			</Grid>
		</Container>
	);
	// return (
	// 	<Container>
	// 		<h1>Products List Page</h1>
	// 		<Grid container component="div" direction="row" justify='space-between' spacing={4}>
	// 			<Grid item component="div" sm={3}>
	// 				<Card className="div">
	// 					<CardActionArea>
	// 						<CardMedia
	// 							component="img"
	// 							alt="Product image not found"
	// 							height="140"
	// 							image="img/slider-img/2.jpg"
	// 							title="Contemplative Reptile"
	// 						/>
	// 						<CardContent>
	// 							<Typography gutterBottom variant="h5" component="h2">
	// 								Горіховий тарт
	// 							</Typography>
	// 							<Typography variant="body2" color="textSecondary" component="p">
	// 								Об'єднали класичне пісочне тісто з мигдалевим сабле, зварили курд за рецептом відомого П'єра Ерме та зупинилися на швейцарській мерензі.
	// 							</Typography>
	// 						</CardContent>
	// 					</CardActionArea>
	// 					<CardActions>
	// 						<Button size="small" color="primary">
	// 							Замовити
	// 						</Button>
	// 						<Button size="small" color="primary">
	// 							Детальніше
	// 						</Button>
	// 					</CardActions>
	// 				</Card>
	// 			</Grid>
	// 			<Grid item component="div" sm={3}>
	// 				<Card className="div">
	// 					<CardActionArea>
	// 						<CardMedia
	// 							component="img"
	// 							alt="Product image not found"
	// 							height="140"
	// 							image="img/slider-img/3.jpg"
	// 							title="Contemplative Reptile"
	// 						/>
	// 						<CardContent>
	// 							<Typography gutterBottom variant="h5" component="h2">
	// 								Горіховий тарт
	// 							</Typography>
	// 							<Typography variant="body2" color="textSecondary" component="p">
	// 								Об'єднали класичне пісочне тісто з мигдалевим сабле, зварили курд за рецептом відомого П'єра Ерме та зупинилися на швейцарській мерензі.
	// 							</Typography>
	// 						</CardContent>
	// 					</CardActionArea>
	// 					<CardActions>
	// 						<Button size="small" color="primary">
	// 							Замовити
	// 						</Button>
	// 						<Button size="small" color="primary">
	// 							Детальніше
	// 						</Button>
	// 					</CardActions>
	// 				</Card>
	// 			</Grid>
	// 			<Grid item component="div" sm={3}>
	// 				<Card className="div">
	// 					<CardActionArea>
	// 						<CardMedia
	// 							component="img"
	// 							alt="Product image not found"
	// 							height="140"
	// 							image="img/slider-img/4.jpg"
	// 							title="Contemplative Reptile"
	// 						/>
	// 						<CardContent>
	// 							<Typography gutterBottom variant="h5" component="h2">
	// 								Горіховий тарт
	// 							</Typography>
	// 							<Typography variant="body2" color="textSecondary" component="p">
	// 								Об'єднали класичне пісочне тісто з мигдалевим сабле, зварили курд за рецептом відомого П'єра Ерме та зупинилися на швейцарській мерензі.
	// 							</Typography>
	// 						</CardContent>
	// 					</CardActionArea>
	// 					<CardActions>
	// 						<Button size="small" color="primary">
	// 							Замовити
	// 						</Button>
	// 						<Button size="small" color="primary">
	// 							Детальніше
	// 						</Button>
	// 					</CardActions>
	// 				</Card>
	// 			</Grid>
	// 			<Grid item component="div" sm={3}>
	// 				<Card className="div">
	// 					<CardActionArea>
	// 						<CardMedia
	// 							component="img"
	// 							alt="Product image not found"
	// 							height="140"
	// 							image="img/slider-img/5.jpg"
	// 							title="Contemplative Reptile"
	// 						/>
	// 						<CardContent>
	// 							<Typography gutterBottom variant="h5" component="h2">
	// 								Горіховий тарт
	// 							</Typography>
	// 							<Typography variant="body2" color="textSecondary" component="p">
	// 								Об'єднали класичне пісочне тісто з мигдалевим сабле, зварили курд за рецептом відомого П'єра Ерме та зупинилися на швейцарській мерензі.
	// 							</Typography>
	// 						</CardContent>
	// 					</CardActionArea>
	// 					<CardActions>
	// 						<Button size="small" color="primary">
	// 							Замовити
	// 						</Button>
	// 						<Button size="small" color="primary">
	// 							Детальніше
	// 						</Button>
	// 					</CardActions>
	// 				</Card>
	// 			</Grid>
	// 		</Grid>
	// 	</Container>
	// );
};