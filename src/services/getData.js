import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";


/**
 * Axios User_MAIN_DATA from the API
 * @param {number} id of the user to whom we get the data
 * @returns {object} user data
 */
export async function getUserMainData(id) {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    return res.data;
   
  } catch (error) {
    console.log(
      "Impossible de se connecter à l'API, mock des données en cours"
    );
    try {
      const res = USER_MAIN_DATA.filter((data) => data.id === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Impossible de mocker les données");
    }
  }
}

/**
 * Axios USER_ACTIVITY from the API
 * @param {number} id of the user to whom we get the data
 * @returns {object} user data
 */
export async function getUserActivity(id) {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (error) {
    console.log(
      "Impossible de se connecter à l'API, mock des données en cours"
    );
    try {
      const res = USER_ACTIVITY.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Impossible de mocker les données");
    }
  }
}


/**
 * Axios USER_AVERAGE_SESSIONS from the API
 * @param {number} id of the user to whom we get the data
 * @returns {object} user data
 */

export async function getUserAverageSession(id) {
  try {
    const res = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return res.data;
  } catch (error) {
    console.log(
      "Impossible de se connecter à l'API, mock des données en cours"
    );
    try {
     
      const res = USER_AVERAGE_SESSIONS.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Impossible de mocker les données");
    }
  }
}

/**
 * Axios USER_PERFORMANCE from the API
 * @param {number} id of the user to whom we get the data
 * @returns {object} user data
 */

export async function getUserPeformance(id) {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (error) {
    console.log(
      "Impossible de se connecter à l'API, mock des données en cours"
    );
    try {
      const res = USER_PERFORMANCE.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Impossible de mocker les données");
    }
  }
}
