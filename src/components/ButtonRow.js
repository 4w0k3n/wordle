import {Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

const ButtonRow = (props) => {
    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
}

export default ButtonRow