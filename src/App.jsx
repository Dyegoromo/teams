import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Form from "./components/form/form.jsx";
import MyOrg from "./components/MyOrg";
import Team from "./components/team";
import Footer from "./components/footer";

function App() {
  /* First I have to create the hook */
  const [showForm, updateShow] = useState(false);
  const [workers, updateWorker] = useState([
    {
      id: uuid(),
      name: "Yotas",
      photo: "https://github.com/Dyegoromo.png",
      position: "Jr",
      team: "Front End",
      fav: true,
    },
    {
      id: uuid(),
      name: "Jhon Doe",
      photo: "https://github.com/Dyegoromo.png",
      position: "CEO",
      team: "Programmers",
      fav: false,
    },
    {
      id: uuid(),
      name: "Juan Tre",
      photo: "https://github.com/Dyegoromo.png",
      position: "Mid",
      team: "Mobile",
      fav: false,
    },
  ]);
  const [equipos, updateTeams] = useState([
    {
      id: uuid(),
      title: "Programmers",
      mainColor: "#57C278",
      secondColor: "#D9F7E9",
    },
    {
      id: uuid(),
      title: "Front End",
      mainColor: "#82CFFA",
      secondColor: "#E8F8FF",
    },
    {
      id: uuid(),
      title: "Data Science",
      mainColor: "#A6D157",
      secondColor: "#F0F8E2",
    },
    {
      id: uuid(),
      title: "Devops",
      mainColor: "#E06B69",
      secondColor: "#FDE7E8",
    },
    {
      id: uuid(),
      title: "UX & Design",
      mainColor: "#DB6EBF",
      secondColor: "#FAE9F5",
    },
    {
      id: uuid(),
      title: "Mobile",
      mainColor: "#FFBA05",
      secondColor: "#FFF5D9",
    },
    {
      id: uuid(),
      title: "Innovation",
      mainColor: "#FF8A29",
      secondColor: "#FFEEDF",
    },
  ]);

  /* Then we create the function to change the state of the hook (gotta contain the same as in the hook) */

  const changeShow = () => {
    updateShow(!showForm);
  };

  //Register worker

  const registerWorker = (worker) => {
    //spread operator: Creates a copy of the array and then adds the new data (in this case comes in 'worker').
    updateWorker([...workers, worker]);
  };

  ////Delete worker

  const deleteWorker = (id) => {
    console.log("Delete worker", id);
    const newWorkers = workers.filter((worker) => worker.id !== id);
    updateWorker(newWorkers);
  };

  ////Update color

  const updateColor = (color, id) => {
    const teamsOk = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.mainColor = color;
      }
      return equipo;
    });
    updateTeams(teamsOk);
  };

  //Create team

  const createTeam = (newTeam) => {
    console.log(newTeam);
    updateTeams([...equipos, { ...newTeam, id: uuid() }]);
  };

  //fav

  const like = (id) => {
    console.log("Like", id);
    const teamsOk = workers.map((worker) => {
      if (worker.id === id) {
        worker.fav = !worker.fav;
      }
      return worker;
    });
    updateWorker(teamsOk);
  };

  //Teams list

  return (
    <div className="App">
      <Header />
      {/* Now I set the case in wich react has to show/hide the form (this could be done with a ternary operator or with the &&) */}

      {showForm && (
        <Form
          teams={equipos.map((equipo) => equipo.title)}
          registerWorker={registerWorker}
          createTeam={createTeam}
        />
      )}
      {/* Now, here I have to set the props that the button in the form is going to listen */}
      <MyOrg changeShow={changeShow} />
      {equipos.map((equipo) => (
        <Team
          data={equipo}
          key={equipo.title}
          workers={workers.filter((worker) => worker.team === equipo.title)}
          deleteWorker={deleteWorker}
          updateColor={updateColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
