import React, {Component} from "react";
import "./stylesNew.css";


export default class Ccont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                   isLoaded: true,
                   items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items};
        if (error){
            return<p>Error {error.messange}</p>
        } else if (!isLoaded) {
        return <p> Загрузка/// </p>
    }else {
        return (
        <ul>
            {items.map(item => (
                <li key={item.name}>
                    {item.strDrink}
                    <img width="55" src={item.strDrinkThumb}></img>
                </li>
            ))}
        </ul>
        )
        }
     }
}
