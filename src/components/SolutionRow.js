import { useEffect, useState } from "react";
import {Button, ButtonGroup, ButtonToolbar, Container} from "react-bootstrap";

function  SolutionRow(props){

    return(
        <div>
            <ButtonGroup size="lg" className="mb-2" style={{margin: '20px'}}>
                {
                    [...props.word].map(letter => {
                        return <Button style={{width: '100px', height: '100px', margin: '5px'}}>{letter.toUpperCase()}</Button>
                    }) 
                }
            </ButtonGroup>
        </div>
    );

}

export default SolutionRow