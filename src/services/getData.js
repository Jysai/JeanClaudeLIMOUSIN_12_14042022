import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

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
      console.log(id);
      const res = USER_AVERAGE_SESSIONS.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Impossible de mocker les données");
    }
  }
}

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
