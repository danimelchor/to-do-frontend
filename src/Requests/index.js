import axios from "axios";
import { SERVER_URL } from "../vars.config";

const key = () => localStorage.getItem("API_KEY");

export const sendCheckLoggedIn = async () => {
  const url = SERVER_URL + "/api/v1/whoami";
  console.log(key());
  try {
    await axios.get(url, { withCredentials: true, params: { API_KEY: key() } });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// GET TABS
export const sendGrabTasks = async () => {
  const url = SERVER_URL + "/api/v1/";
  try {
    const res = await axios.get(url, {
      withCredentials: true,
      params: { API_KEY: key() },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// SAVE NEW TAB
export const sendSaveTab = async (title) => {
  const url = SERVER_URL + "/api/v1/tab";
  try {
    const res = await axios.post(
      url,
      { title, API_KEY: key() },
      { withCredentials: true }
    );
    return await sendGrabTasks();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// EDIT TAB NAME
export const sendEditTab = async (tabId, title) => {
  const url = SERVER_URL + "/api/v1/tab";
  try {
    const res = await axios.put(
      url,
      { tabId, title, API_KEY: key() },
      { withCredentials: true }
    );
    return await sendGrabTasks();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// DELETE TAB
export const sendDeleteTab = async (tabId) => {
  const url = SERVER_URL + "/api/v1/tab";
  try {
    const res = await axios.delete(url, {
      data: { tabId, API_KEY: key() },
      withCredentials: true,
    });
    console.log(res);
    return await sendGrabTasks();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// SAVE NEW TASK
export const sendSaveTask = async (tabId, taskName) => {
  const url = SERVER_URL + "/api/v1/task";
  try {
    const res = await axios.post(
      url,
      { tabId, taskName, API_KEY: key() },
      { withCredentials: true }
    );
    return await sendGrabTasks();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// COMPLETE TASK
export const sendCompleteTask = async (tabId, taskId, completed) => {
  const url = SERVER_URL + "/api/v1/task";
  try {
    const res = await axios.put(
      url,
      { tabId, taskId, completed, API_KEY: key() },
      { withCredentials: true }
    );
    return await sendGrabTasks();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// DELETE TASK
export const sendDeleteTask = async (tabId, taskId) => {
  const url = SERVER_URL + "/api/v1/task";
  try {
    const res = await axios.delete(url, {
      data: { tabId, taskId, API_KEY: key() },
      withCredentials: true,
    });
    return await sendGrabTasks();
  } catch (err) {
    console.log(err);
    return [];
  }
};
