import React,{useState} from 'react'
import './Card2.css';
import github from '../images/github.png';
import { Link, useNavigate} from 'react-router-dom';



function Card2(pro) {
  const[readmore,setReadMore]= useState(false);
    const description =readmore ?  pro.description:  `${pro.description.substring(0,100)}...`;
    const [targetLink, setTargetLink] = useState('');
  const navigate = useNavigate();
    function readMoreHandler(){
      setReadMore(!readmore);
    }
    const handleClick = () => {
        window.location.href = pro.live;
        navigate(targetLink);
      };
      //setLive =cardId.live;
    
  return (
    <div>
      <div className="card-wrap">
        <img className="card-img" src={pro.image} alt='imageProj'></img>
        <div className='details'>
          <h3>{pro.title}</h3>
          <div className="description">
             {description}
             <span className="read-more" onClick={readMoreHandler}>{readmore?'  Show Less':'  ReadMore'}</span>
          </div>
          
          <div className='btn-grp'>
          <Link to={pro.live}>
          <button className='Go-live' onClick={handleClick} >Go live</button>
          </Link>
            
            <li><a href={pro.link} target='_blank'><img className='github-link' src={github} ></img></a></li>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Card2