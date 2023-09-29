import React from 'react';
import {Placement} from "react-bootstrap/types";
import {OverlayTrigger, Tooltip, TooltipProps} from "react-bootstrap";
import "../style/App.css"
interface FieldOverlayTriggerProps{
    placement: Placement;
    element: React.ReactElement;
    text?: string;
}
const FieldOverlayTrigger: React.FC<FieldOverlayTriggerProps> = ({element, placement,text}) => {
    const renderTooltip = (props: TooltipProps) => {
        return (
            <div>
                {text && <Tooltip {...props}
                     bsPrefix={'tooltip-inner-red'}
                     className={'tooltip-inner-red'}
            >
                {text ? text : ''}
            </Tooltip>}
            </div>
        );
    }

    return (
        <OverlayTrigger
            placement={placement}
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            {element}
        </OverlayTrigger>
    );
};

export default FieldOverlayTrigger;