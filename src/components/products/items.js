import activityTable from "../Images/activityTable.webp";
import animalShapeSorter from "../Images/animalShapeSorter.webp";
import buildingBlocks from "../Images/buildingBlocks.webp";
import DJTable from "../Images/DJTable.jpg";
import mountainStack from "../Images/mountainStacker.jpg";
import poundingBench from "../Images/poundingBench.webp";
import pushAlong from "../Images/pushAlong.jpg";
import shapeSorter from "../Images/shapeSorter.jpg";
import spiralTower from "../Images/spiralTower.webp";
import woodenFruit from "../Images/WoodenFruit.jpg";

export const data = [
  {
    id: 1,
    title: "Activity Table",
    img: activityTable,
    alt: "Activity Table",
    description:
      "Activity table for toddlers. Toddlers to learn while they play with various different problem solving activities.",
    price: 50.0,
    quantity: 0,
    options: [
      { id: 1, name: "red" },
      { id: 2, name: "blue" },
      { id: 3, name: "yellow" },
    ],
  },
  {
    id: 2,
    title: "Animal Shape Sorter",
    img: animalShapeSorter,
    description:
      "Noah's ark shape sorter. Sorting out more complex shapes with animals. Allows for a fun time loading Noah's ark with the different animals",
    price: 30.89,
    quantity: 0,
  },
  {
    id: 3,
    title: "Building Blocks",
    description:
      "Building blocks with different shapes and sizes. Let their imagination run free to build different things",
    img: buildingBlocks,
    price: 24.38,
    quantity: 0,
  },
  {
    id: 4,
    title: "Piano and DJ Table",
    description:
      "Dance party for your baby and toddler as they play away on this piano and DJ set.",
    img: DJTable,
    price: 45.2,
    quantity: 0,
  },
  {
    id: 5,
    title: "Mountain Stack",
    description:
      "Challenge your toddler with this mountain stack. The bumpy shape allows them to also build different shapes",
    img: mountainStack,
    price: 12.3,
    quantity: 0,
    options: [
      { id: 1, name: "pink" },
      { id: 2, name: "white" },
      { id: 3, name: "blue" },
      { id: 4, name: "grey" },
      { id: 5, name: "green" },
    ],
  },
  {
    id: 6,
    title: "Pounding Bench",
    description:
      "Pound the blocks away with the hammer. Let your toddler work on their hand-eye coordination with inserting the blocks and then hitting them with the hammer.",
    img: poundingBench,
    price: 16.8,
    quantity: 0,
  },
  {
    id: 7,
    title: "Push Along Dog",
    description:
      "Allow your toddler to push the dog along as they are walking. Also for babies to follow whilst you push the dog along.",
    img: pushAlong,
    price: 10.3,
    quantity: 0,
  },
  {
    id: 8,
    title: "Truck Shape Sorter",
    description:
      "Sort simple shapes into the truck and also push the truck along",
    img: shapeSorter,
    price: 15.9,
    quantity: 0,
  },
  {
    id: 9,
    title: "Spiral Tower",
    description:
      "Watch the balls roll down the spiral tower. Teach your toddler how to place them at the top.",
    img: spiralTower,
    price: 16.2,
    quantity: 0,
    options: [
      { id: 1, name: "yellow" },
      { id: 2, name: "red" },
      { id: 3, name: "blue" },
      { id: 4, name: "grey" },
      { id: 5, name: "green" },
    ],
  },
  {
    id: 10,
    title: "Wooden Fruit Set",
    description: "Wooden fruit set to teach toddlers to cut fruit.",
    img: woodenFruit,
    price: 20.3,
    quantity: 0,
  },
];
