import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import BenefitContent from "../Contents/BenefitContent";

const Benefit = () => {
    return (
        <div className="flex">
            <SideBar />
            <BenefitContent />
        </div>
    );
};

export default Benefit;
