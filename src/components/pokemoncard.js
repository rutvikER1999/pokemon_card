import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Pokemoncard = (props) => {
  const classes = useStyles();

  return (
    <div className='cards'>
      <div
        className="pokemonCard"
        style={{
          margin: 5,
          width: 180,
          height:300,
          marginBottom: 0
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={props.url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      
    </div>
  );
};

export default Pokemoncard;
