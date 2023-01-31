import React from 'react';
import { ButtonWrapper, Button } from './Layout.components';



export const Buttons = (props) => (
    <ButtonWrapper>
        <Button name="Lower" onClick={props.onButtonClick} type="lower"> Lower </Button>
        <Button name="Higher" onClick={props.onButtonClick}> Equal or Higher </Button>
    </ButtonWrapper>
)