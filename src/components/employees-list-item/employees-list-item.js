// import { Component } from 'react'

import './employees-list-item.css';

const EmployeesListItem = (props) => {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isIncrease: false,
    //         isLike: false
    //     }
    // }
    
    // onIncrease = () => {
    //     this.setState(({isIncrease}) => ({
    //         isIncrease: !isIncrease
    //     }))
    // }
    // onLike = () => {
    //     this.setState(({isLike}) => ({
    //         isLike: !isLike
    //     }))
    // }
    // const {isIncrease} = this.state;
    // const {isLike} = this.state;
    
        const {name, salary, onDelete, onToggleProp, isIncrease, isRise} = props;

        return (
            <li className={`list-group-item d-flex justify-content-between 
            ${isIncrease && 'increase'} 
            ${isRise && 'like'}`}>
                <span 
                className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="isRise">{name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="isIncrease">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    


}

export default EmployeesListItem;