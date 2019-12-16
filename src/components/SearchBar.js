import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

 const styles = theme => ({
 
    cardGrid: {
      paddingTop: '25px',
      paddingBottom: '25px',
      display: 'flex',
      flexDirection: 'column',
    
    },
    card: {
      height:400,
      maxHeight: 400, overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '150%', 
    },
    cardContent: {
      flexGrow: 1,
    }
  });
  

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
          targetedInput:'depCity',
          title:'Les 5 villes les plus populaires',
          search:[],
          popularCities:[]
        }
      }

      componentWillMount() {
        fetch('https://api.comparatrip.eu/cities/popular/5')
        .then(response => response.json())
        .then(data => this.setState({popularCities: data , search:data}));

       }

       fetchPopularCitiesFrom(fromCity){
           if(fromCity!==''){
            fetch('https://api.comparatrip.eu/cities/popular/from/'+ fromCity +'/5')
            .then(response => response.json())
            .then(data => this.setState({search: data }));
               }

           }

       
       
       fetchAutoComplete = P => {
        fetch('https://api.comparatrip.eu/cities/autocomplete/?q=' + P)
        .then(response => response.json())
        .then(data => this.setState({search: data }));
           }
       

       autoCompleteCity = (event) => {
        if(event.target.value===''){
            this.setState({search: this.state.popularCities })
           }
        else{
            this.fetchAutoComplete(event.target.value)
            }
    }

      

      handleInputClick = event => {
        if(event.target.name==="depCity"){
                this.setState({targetedInput:'depCity', title:'Choisissez une gare de départ' })
                    }
      
      else if(event.target.name==="arrCity") {
            this.setState({targetedInput:"arrCity", title:"Choisissez une gare d'arrivée" })}
            if(document.getElementById('depCity').value!==''){
                var fromCity=document.getElementById('depCity').value
                this.fetchPopularCitiesFrom(fromCity)
            }
      }
      
    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.cardGrid} maxWidth='md' >
          
           
           <Grid container spacing={10}>
               <Grid item xs={12} sm={8} md={6} style={{height:150, marginBottom:40}}>
                 <Card className={classes.card}> 
                   <CardContent className={classes.cardContent}>
                   <Typography gutterBottom variant="h5" component="h2">Quel est votre trajet?</Typography>
                   <form>    
                       <input type="text" id="depCity" name="depCity" placeholder=" &#xf08b; Saisissez votre gare de départ..."  onChange={this.autoCompleteCity} onClick={this.handleInputClick} autoComplete="off" />
                       <input type="text" id="arrCity" name="arrCity" placeholder=" &#xf090; Saisissez votre gare d'arrivée..." onChange={this.autoCompleteCity} onClick={this.handleInputClick}  autoComplete="off" />
                   </form>
                   </CardContent>
                 </Card>
               </Grid>
           
              

               
               <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.card}> 
                   <CardContent className={classes.cardContent}>
                   <Typography gutterBottom variant="h5" component="h2">{this.state.title}</Typography>
                   <ul >
                   {this.state.search.map(city => (
                    <li key={city.city_id} onClick={()=>{document.getElementById(this.state.targetedInput).value = city.unique_name}}>
                    <i className="fa fa-map-marker" style={{paddingRight:15+'px'}}></i>{city.local_name}</li>   
                   ))}
                   </ul>
                   </CardContent>
                 </Card>
               </Grid>
               
           </Grid>
        
         </Container>  
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SearchBar);