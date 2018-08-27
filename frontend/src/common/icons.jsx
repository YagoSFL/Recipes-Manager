import React from 'react'
import { Favorite, Whatshot } from '@material-ui/icons'
import { ClockFast, Snowflake, Basecamp, Beer, Bowl, Carrot,
    FoodOff, Sausage, Rice, Fish, Muffin, Pizza } from 'mdi-material-ui'

export default props => {

    const { icone } = props

    const obj = {
        "Favoritas": <Favorite/>, 
        "Rapidas": <ClockFast/>, 
        "Quentes" :<Whatshot/>, 
        "Frias": <Snowflake/>, 
        "Carnes": <Sausage/>, 
        "Massas": <Pizza/>, 
        "Frutos do Mar": <Fish/>,
        "Acompanhamentos": <Rice/>, 
        "Sopas": <Bowl/>, 
        "Vegetarianas": <Muffin/>, 
        "Veganas": <Carrot/>, 
        "Low Carb": <FoodOff/>, 
        "Bebidas":<Beer/>, 
        "Sobremesas":<Basecamp/>
    }

    const renderIcon = () => {

        if(icone in obj) {
            return obj[icone]
        }
    }

        
    return (
        <i>
            {renderIcon()}
        </i>
    )
}