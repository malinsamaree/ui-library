import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    testProp?: boolean;
}
declare const Test: ({ testProp }: Props) => JSX.Element;
export { Test };
