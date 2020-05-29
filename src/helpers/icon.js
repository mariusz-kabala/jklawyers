import { FaRoad } from "react-icons/fa"
import { FaLightbulb } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaFlag } from "react-icons/fa"
import { FaHandHoldingUsd } from "react-icons/fa"
import { IconPuzzle } from "components/expertiseArea/icons/puzzle"
import { IconAgreement } from "components/expertiseArea/icons/agreement"
import { IconChemist } from "components/expertiseArea/icons/chemist"

export const getIcon = icon => {
  switch (icon) {
    case "road":
      return FaRoad
    case "lightBulb":
      return FaLightbulb
    case "home":
      return FaHome
    case "flag":
      return FaFlag
    case "handHoldingUsd":
      return FaHandHoldingUsd
    case "puzzle":
      return IconPuzzle
    case "agreement":
      return IconAgreement
    case "chemist":
      return IconChemist
  }
}
