import React from 'react';
import Card from './Card.js'

function List(props) {
    let cards = props.cards.map((card, i) => {
        return <Card key={i} title={card.title} content={card.content}/>
    })
    return (
        <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {cards}
        </div>
        </section>
    )
}

export default List;