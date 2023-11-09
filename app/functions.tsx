import { Choice, Question, Survey } from "@/types";
import { BACKEND_URL } from "./constants";

export async function getSurveys() {
  // returned data is from type Survey
  const response = await fetch(`${BACKEND_URL}/surveys/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data: Survey[] = await response.json();

  return data;
}

export async function getSurvey(id: string) {
  // returned data is from type Survey
  const response = await fetch(`${BACKEND_URL}/surveys/${id}/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data: Survey = await response.json();

  return data;
}

export async function getQuestions(id: string) {
  // returned data is from type Survey
  const response = await fetch(`${BACKEND_URL}/surveys/${id}/questions/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data: Question[] = await response.json();

  return data;
}

export async function getChoices(id: string) {
  // returned data is from type Survey
  const response = await fetch(`${BACKEND_URL}/questions/${id}/choices/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data: Choice[] = await response.json();

  return data;
}

export async function postResponse(
  surveyID: string,
  questionID: string | undefined,
  choiceID: string,
  userID: string
) {
  // returned data is from type Survey
  const response = await fetch(`${BACKEND_URL}/responses/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: userID,
      survey: surveyID,
      question: questionID,
      choice: choiceID,
    }),
  });
  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data = await response.json();

  return data;
}

export async function signUP(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  // returned data is from type Survey
  const response = await fetch(`${BACKEND_URL}/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      // raise an exception
      throw new Error("Something went wrong");
      return;
    }
    const data = await response.json();
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    } else {
      localStorage.removeItem("jwt");
    }

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("jwt");
  }
}

export async function checkLogin() {
  // check if user is logged in with jwt in cookies
  try {
    const response = await fetch(`${BACKEND_URL}/user/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jwt: localStorage.getItem("jwt"),
      }),
    });

    if (!response.ok) {
      // raise an exception
      throw new Error("Something went wrong");
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("jwt");
    return;
  }
}

export async function finishSurvey(surveyID: string) {
  const token = localStorage.getItem("jwt");
  if (!token) {
    return;
  }
  const response = await fetch(`${BACKEND_URL}/finish/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      survey: surveyID,
      jwt: token,
    }),
  });

  if (!response.ok) {
    // raise an exception
    throw new Error("Something went wrong");
    return;
  }
  const data = await response.json();
  console.log(data);
  return data;
}
