/**
 * Компонент для добавления всплывающих окон, для решения проблемы с перекрытием
 */

import React, {FC, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
interface PortalProps{
    children: React.ReactNode;
}

const Portal: FC<PortalProps> = ({children}) => {
    const [container] = useState(() => document.createElement('div'))

    useEffect(()=> {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return ReactDOM.createPortal(children, container);
};

export default Portal;