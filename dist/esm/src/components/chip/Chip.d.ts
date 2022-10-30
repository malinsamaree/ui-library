/// <reference types="react" />
import { ChipType } from "./types";
interface Props {
    chipType?: ChipType;
    error?: boolean;
    active?: boolean;
    testProp?: boolean;
}
declare function Chip({ chipType, error, active, testProp }: Props): JSX.Element;
export { Chip };
