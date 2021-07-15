import React from 'react';
import Card from './Card';
import '../containers/styles.css';


const CardList = ({robots})=>{
    return(
            <div>
                {
                  //displays all the card by calling the card component and passing all the values
                    robots.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={robots[i].id}
                                    name={robots[i].first_name}
                                    lname={robots[i].last_name}
                                    email={robots[i].email}
                                    />
                            );
                    })
                }
                <p className='copy'style={{  padding:'5px 0px',height: '30px', color: 'white',background: 'linear-gradient(89deg, #FF7600 0%, #e2f7f8 100%)' }} >by &copy; Ankita Sahu</p>
            </div>
        );
}

export default CardList;
