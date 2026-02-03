import { animate, motion } from "framer-motion"

// Varients
const stairAnimation = {
    initial: {
        top: "0%",

    },

    animate: {
        top: "100%",
    },

    exit: {
        top: ["100%", "0%"],
    },
}

// Calculated the reverse index fot staggered delay
const  reverseIndex = (index) => {
    // Number of steps
    const totalSteps = 6;
    return totalsteps - index - 1;
}

const Stairs = () => {
  return 
    <>
        {/* 
        Render 6 motion divs, each representing a step of  the stairs.
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div is calculated sinamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent steps.
         */}
    </>
}

export default Stairs