import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css";
import trashbin from '../../assets/trashbin.svg' 
import deletebtn from '../../assets/deletebtn.svg'
import { DeleteOutlined } from '@mui/icons-material';
import { Rating } from '@mui/material';

export default function Cards(props) {
    const { id, imgSrc, heading, cuisine, ratings, description, activeTab, selected, handleSelect, handleDeleteFromWeek ,mealtype} = props

    return (
        <Card key={id} sx={{ maxWidth: 345, padding: '20px', border: selected ? '1px solid green' : "none", cursor: 'pointer', position: 'relative',transition:'0.2s ease-in' }} onClick={handleSelect}>
            <CardMedia
                sx={{ borderRadius: '15px', minHeight: '245px' }}
                component="img"
                alt="green iguana"
                height="140"
                image={imgSrc}
            />
            {activeTab != 'all_meals' &&
                <Button variant="text"  className='delete-btnn' onClick={() => handleDeleteFromWeek(activeTab, id)}><img src={deletebtn} style={{borderRadius:'5px'}} alt='trashbin'/> </Button>
            }
            <span className='meal-type'>{mealtype}</span>
            <CardContent>
                <Typography className='card-head' gutterBottom variant="h5" component="div">
                    {heading}
                </Typography>
                <Typography variant="body2" sx={{fontFamily:'Poppins, sans-serif',fontSize:'13px',lineHeight:'21px'}} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
             
                <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>

                    <span className='cuisine-head'>Cuisine: </span>
                    <span className='cuisine-type'>{cuisine || "Italian"}</span>
                </div>
                <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>

            <span className='rating-text'>Rating: {ratings}</span>
            <Rating
            sx={{color:'rgba(0, 67, 112, 1)',fontSize:'16px'}}
             name="read-only"
              value={ratings}
              precision={0.1}
               readOnly
                />
            </div>

            </CardActions>

        </Card>
    );
}