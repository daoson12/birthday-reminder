import React from 'react'

const List = ({ people }) => {


    const lotOfPeople = people.map((person) => {
        const { id, name, age, image } = person;
        return <article
            key={id} className="person">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{age} years</p>
        </article>
    })

    return (
        <>
            {lotOfPeople}
        </>
    )
}

export default List