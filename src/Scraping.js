
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Scraping.css';

function Scraping(){

    const [getJob, setGetJob] = useState(null);

    useEffect(() => {
        axios.get('http://wspc52.herokuapp.com/1')
        .then(response => {
            setGetJob(response.data)
        })
    }) 

    return(
        <div className='container' >
                {getJob!=null && getJob.information.map((item, index) =>
                    <div key={item.href}>
                        <h2>{item.title}</h2>
                        <h3>{item.company}</h3>
                        <p>{item.description}</p>
                        <p>{item.limit_date}</p>
                    </div>
                )}
        </div>
    )
}


export default Scraping;
