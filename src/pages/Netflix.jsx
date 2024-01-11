import React, {useState, useEffect} from 'react'
import TopNav from '../components/TopNav'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import SliderContainer from '../components/SliderContainer'

const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  const navigate = useNavigate()

  const movies =useSelector((state)=>state.netflix.movies)

  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getGenres())
  },[])

  useEffect(()=>{
    if(generesLoaded)
    dispatch(fetchMovies({type : "all"}))
},[])

  window.onscroll =()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return ()=>(window.onscroll = null)
  }
  console.log(isScrolled)
  return (
    <HeroContainer>
    <div className='hero'>
      <TopNav isScrolled={isScrolled}/>
        <img className='background-image' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
        alt="No Internet" />
      <div className='container'>
        <div className='title'>
          <h1>Iron Man</h1>
          <p>Iron-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko.</p>
        </div>
        <div className='buttons'>
          <button onClick={()=>navigate('/player')} className='playBtn'>Play</button>
          <button className='moreBtn'>More</button>
        </div>
      </div>
    </div>
    <SliderContainer movies={movies}/>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
background-color: black;
    .hero{
      position: relative;
      .background-image{
          filter: brightness(40%);
      }
      img{
        height: 70vh;
        width: 100%;
      }
      .container{
        position: absolute;
        bottom: 1rem;
        .title{
          h1{
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          }
          p{
            margin-bottom: -50px;
            width: 640px;
            margin-left: 5rem;
            font-family: "lexend Deca", sans-serif;
            color: white;
          }
        }
        .buttons{
          display: flex;
          margin: 5rem;
          gap: 2rem;
        }

        .playBtn{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          color: red;
          font-size: 1.5rem;
          gap: 1rem;
          padding: 0.9rem;
          padding-left: 2.4rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
        }
        .moreBtn{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background-color: black;
          color: white;
          font-size: 1.4rem;
          gap: 1rem;
          padding: 0.5rem;
          padding-left: 2.4rem;
          padding-right: 2.4rem;
          border: 1px solid white;
          cursor: pointer;
        }
      }
    }

`

export default Netflix