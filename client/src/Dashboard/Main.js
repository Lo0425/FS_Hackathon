import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import Content from "../Contents/MainContent";
import moment from "moment";
import { checkAuth } from "../api/users";

const Main = () => {
  const { user } = checkAuth();

  console.log(user);
  let now = moment().unix();
  let onboardingDate = user.data.onboardingDate;
  let daysofservicedone = Math.ceil((now - onboardingDate) / 86400);

  if (daysofservicedone == 365) {
    user.data.annualleave += 13;
  } else if (daysofservicedone >= 365 * 2 && daysofservicedone % 365 == 0) {
    user.data.annualleave += 14;
  } else if (user.data.annualleave > 28) {
    user.data.annualleave = 28;
  } else if (daysofservicedone % 365 == 0) {
    user.data.annualleave += 14;
  }

  if (daysofservicedone <= 365 * 2 && daysofservicedone % 365 == 0) {
    user.data.sickleave = 14;
  } else if (
    daysofservicedone < 365 * 5 &&
    daysofservicedone > 365 * 2 &&
    daysofservicedone % 365 == 0
  ) {
    user.data.sickleave = 18;
  } else if (daysofservicedone >= 365 * 5 && daysofservicedone % 365 == 0) {
    user.data.sickleave = 22;
  }

  if (daysofservicedone % 365) {
    user.data.emergencyleave = 10;
  }

  useEffect(() => {
    fetch("http://localhost:8000/users/updateleave/" + user.data._id, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emergencyleave: user.data.emergencyleave,
        sickleave: user.data.sickleave,
        annualleave: user.data.annualleave,
      }),
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/users/updatedays/" + user.data._id, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        daysofservice: daysofservicedone,
      }),
    });
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <Content />
    </div>
  );
};

export default Main;
