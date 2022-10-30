import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
    testProp?: boolean;
}

const Test = ({
    testProp
}: Props) => {
    return (
        <div>
            {testProp && <div>malin samare</div>}
        </div>
    );
};

export {Test};