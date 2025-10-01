"use client";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function TooltipInit() {
    return (
        <Tooltip id="dark-tooltip" className="!bg-primary-dark shadow-md font-body font-normal !text-white !text-sm" delayShow={200} />
    );
}
