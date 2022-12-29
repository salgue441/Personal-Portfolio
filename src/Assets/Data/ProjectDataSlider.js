import { v4 as uuidv4 } from "uuid"

// Images
import CitySkylinesImg from "../Images/CitySkylines.jpg"
import MathImg from "../Images/Math.jpg"
import SudokuImg from "../Images/Sudoku.jpg"
import TerminalImg from "../Images/Terminal.jpg"
import CodeImg from "../Images/Code.jpg"

export const projectData = [
  {
    id: uuidv4(),
    name: "Mods for City Skylines",
    desc: "Worked under a professor in order to develop useful mods for the Civil Engineering and Architecture faculty. The mods were developed in C# and were used to help students learn about the city planning process.",
    img: CitySkylinesImg,
    link: "https://github.com/salgue441/City-Skylines-Mod",
  },
  {
    id: uuidv4(),
    name: "Handwritten Digit Recognition",
    desc: "Developed a handwritten digit recognition system in Python using the Keras library. The system was trained using the MNIST dataset and was able to achieve an accuracy of 99.5%.",
    img: MathImg,
    link: "https://github.com/salgue441/Handwritten-Digits-Recognition",
  },
  {
    id: uuidv4(),
    name: "Sudoku Game and Solver",
    desc: "Developed a Sudoku game and solver in C++ using the backtracking algorithm. Allow's the user to play a game of Sudoku and also solve any Sudoku puzzle.",
    img: SudokuImg,
    link: "https://github.com/salgue441/Sudoku",
  },
  {
    id: uuidv4(),
    name: "Terminal Tree Representation",
    desc: "Developed a program in Python that takes a directory and shows the tree representation of files and subdirectories in the terminal.",
    img: TerminalImg,
    link: "https://github.com/salgue441/Terminal-Tree-list",
  },
  {
    id: uuidv4(),
    name: "Typescript Scripting Language",
    desc: "Developed a scripting language in Typescript that allows the user to create and run scripts. The language supports variables, functions, loops, and conditionals.",
    img: CodeImg,
    link: "https://github.com/salgue441/CA-Scripting-Language",
  },
]
