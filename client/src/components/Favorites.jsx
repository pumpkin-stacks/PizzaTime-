import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId')

    if (userId) {
    axios.get(`http://localhost:8000/api/favorites/${userId}`)
      .then((res) => {
        setFavorites(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }, [])

  const addFavoriteToCart = (favorite) => {
    const orderDetails = {
      method: favorite.method,
      size: favorite.size,
      qty: favorite.qty,
      toppings: favorite.toppings
    }
    navigate('/checkout', {state: {orderDetails: favorite}});

  }

  const removeFavorite = (favoriteId) => {
    const userId = localStorage.getItem('userId')
    axios.post('http://localhost:8000/api/deleteFavorite', { userId, pizza: favoriteId })
      .then((res) => {
        setFavorites(res.data.updatedFavorites);
      })
      .catch((err) => {
        console.log("Could not remove", err)
      })
  }

  return (
    <div className='favoritesdisplay'>
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <div key={favorite._id} className="favorite-card"> {/* Use favorite._id as the unique key */}
            <p>Size: {favorite.size}</p>
            <p>
              Toppings: {
                favorite.toppings && typeof favorite.toppings === 'object' ? (
                  Object.keys(favorite.toppings)
                    .filter(topping => favorite.toppings[topping]) // Get only the toppings set to true
                    .join(', ')  // Join them into a comma-separated string
                ) : 'No toppings'
              }
            </p>
            <div>
                <button onClick={() => addFavoriteToCart(favorite)}>Add to Cart</button>
                <button onClick={() => removeFavorite(favorite._id)}>Remove from Favorites</button>
              </div>
          </div>
        ))
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
  
  
};

export default Favorites;