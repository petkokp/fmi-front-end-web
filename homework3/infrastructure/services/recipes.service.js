import { get } from "../utils";

const url = "https://api.npoint.io/51ed846bdd74ff693d7e";

export const retrieveRecipes = () => get(url);
